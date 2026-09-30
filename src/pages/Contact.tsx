import { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Arbetar ni med ROT avdrag?',
    answer: 'Ja! Vid godkända mark och grundarbeten på din bostad eller tomt drar vi av ROT avdraget direkt på fakturan och sköter all administration mot Skatteverket.',
  },
  {
    question: 'Hur lång tid tar det att få ett prisförslag?',
    answer: 'Vi återkopplar vanligtvis inom 24 timmar och lämnar en tydlig, specificerad offert inom 1 till 3 arbetsdagar efter genomgång eller platsbesök.',
  },
  {
    question: 'Vilka områden är ert huvudsakliga upptagningsområde?',
    answer: 'Vi utgår från Finnträsk och utför uppdrag i hela Västerbotten, inklusive Byske, Skellefteå, Piteå och omnejd.',
  },
  {
    question: 'Kan jag boka ett kostnadsfritt platsbesök?',
    answer: 'Självklart! Kontakta oss via formuläret eller ring Niklas (070 588 40 32) eller Kevin (070 588 40 42) så bokar vi in en tid som passar dig.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 121, 0, 0.15)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Contact() {
  usePageTitle(
    'Kontakta Finnträsk Entreprenad | Västerbotten',
    'Kontakta Finnträsk Entreprenad. Vi utför allt inom mark och schaktarbeten, tomtplanering, anläggning och maskintjänster i Västerbotten. Ring Niklas 070 588 40 32 eller Kevin 070 588 40 42.'
  );
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      // Simulerad inskickning för demo-template
      await new Promise((resolve) => setTimeout(resolve, 600));

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ett oväntat fel uppstod.');
    }
  };

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/contact-hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                Kontakta oss
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: 0, maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
                Vi återkopplar vanligtvis inom 24 timmar. Kostnadsfritt platsbesök och offert ingår alltid.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: CONTACT CONTENT ────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Du kan nå oss via formuläret, telefon eller e-post. Oavsett om det gäller tomtplanering, mark och schaktarbeten, grillplatser, dikesgrävning eller maskintjänster hjälper vi dig gärna.
              </p>

              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(255, 121, 0, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Telefon
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <a
                        href="tel:0705884032"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        Niklas: 070 588 40 32
                      </a>
                      <a
                        href="tel:0705884042"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        Kevin: 070 588 40 42
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(255, 121, 0, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPin size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Plats och område
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Bas i Finnträsk • Byske, Skellefteå, Piteå och Västerbotten
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(255, 121, 0, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      E-post
                    </p>
                    <a
                      href="mailto:info@finntraskentreprenad.se"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      info@finntraskentreprenad.se
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>


            {/* Right: form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: 'clamp(24px, 4vw, 40px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  margin: '0 0 24px 0',
                }}>
                  Fyll i dina uppgifter
                </h2>

                <form onSubmit={handleSubmit}>

                  {status === 'success' && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '12px',
                      marginBottom: '20px',
                    }}>
                      <CheckCircle2 size={22} color="#22c55e" />
                      <p style={{ margin: 0, color: '#16a34a', fontSize: '0.9rem', fontWeight: 600 }}>
                        Tack för ditt meddelande! Vi återkommer inom 24 timmar.
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '12px',
                      marginBottom: '20px',
                    }}>
                      <AlertCircle size={22} color="#ef4444" />
                      <p style={{ margin: 0, color: '#dc2626', fontSize: '0.9rem', fontWeight: 600 }}>
                        {errorMsg || 'Något gick fel. Försök igen senare.'}
                      </p>
                    </div>
                  )}
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    Namn *
                  </label>
                  <input
                    type="text"
                    placeholder="Förnamn och efternamn"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />

                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    E-postadress *
                  </label>
                  <input
                    type="email"
                    placeholder="din.epost@doman.se"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />

                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    placeholder="070 123 45 67"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />

                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    Typ av tjänst
                  </label>
                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  >
                    <option value="">Välj tjänst...</option>
                    <option value="gravning">Schaktning</option>
                    <option value="byggnation">Markanläggning</option>
                    <option value="betong">Grundläggning</option>
                    <option value="maskintjanster">Maskintjänster</option>
                    <option value="annat">Annat entreprenadprojekt</option>
                  </select>

                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    Projektbeskrivning *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Beskriv ditt projekt så detaljerat du kan (t.ex. tomtplanering, schaktning, önskad starttid, ort)..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical', marginBottom: '24px' }}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      if (status === 'sending') return;
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(-2px)';
                      el.style.boxShadow = '0 8px 24px rgba(255, 121, 0, 0.4)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {status === 'sending'
                      ? (<><Loader2 size={18} className="animate-spin" /> Skickar...</>)
                      : (<><Send size={18} /> Skicka offertförfrågan</>)
                    }
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ────────────────────────────────────── */}
      <section style={{ background: 'var(--color-dark)', padding: '100px 0' }}>
        <div style={container}>
          <FAQAccordion
            dark={true}
            items={faqItems}
            title="Vanliga frågor"
            subtitle="Svar på det vi ofta får höra. Hittar du inte svaret är du alltid välkommen att ringa Niklas eller Kevin!"
            buttonText="Skicka meddelande"
            buttonLink="/kontakt"
          />
        </div>
      </section>

      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
