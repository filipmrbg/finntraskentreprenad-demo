import { getSupabase } from './supabaseClient';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: 'quote' | 'contact';
}

export interface SubmitResult {
  submissionId: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  const submissionId = crypto.randomUUID();

  // 1. Always save to database first
  const { error: dbError } = await getSupabase().from('contact_submissions').insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service || null,
    message: data.message,
    source: data.source,
    submission_id: submissionId,
  });

  if (dbError) {
    throw new Error('Kunde inte spara din förfrågan i databasen. Försök igen senare.');
  }

  // 2. Then send email via edge function
  const edgeFunctionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ ...data, submissionId }),
  });

  if (!response.ok) {
    // Database save succeeded but email failed — still report success to user
    // since the submission is stored; the team can see it in the dashboard.
    console.warn('Email sending failed but submission was saved to database.');
  }

  return { submissionId };
}
