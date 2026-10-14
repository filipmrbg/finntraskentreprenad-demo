/*
# Create contact_submissions table

1. New Tables
- `contact_submissions` — stores all form submissions from the contact and quote forms.
  - `id` (uuid, primary key, auto-generated)
  - `created_at` (timestamptz, defaults to now())
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — submitter's phone number
  - `service` (text, nullable) — selected service type from dropdown
  - `message` (text, not null) — the project description / message
  - `source` (text, defaults to 'quote') — which form the submission came from ('quote' or 'contact')
  - `submission_id` (uuid, nullable) — external ID generated for the email, used for cross-referencing
  - `status` (text, defaults to 'new') — processing status of the submission

2. Security
- Enable RLS on `contact_submissions`.
- Allow public INSERT for anon and authenticated (the forms are public, no login required).
- No SELECT/UPDATE/DELETE policies — submissions can only be read/managed from the Supabase dashboard
  with the service role key, not from the frontend.

3. Important Notes
- This is a single-tenant public-contact form. Anyone can submit; nobody can read submissions from the client.
- The INSERT-only policy ensures the frontend can write submissions but never read or modify them.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'quote',
  submission_id UUID,
  status TEXT DEFAULT 'new'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert to contact_submissions" ON contact_submissions;
CREATE POLICY "Allow public insert to contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
