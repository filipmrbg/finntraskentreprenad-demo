import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import { Phone } from 'lucide-react';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const teamMembers = [
  {
    role: 'Grundare och ägare',
    name: 'Niklas Lundmark',
    initials: 'NL',
    phone: '070 588 40 32',
    tel: '0705884032',
    description: 'Driver Finnträsk Entreprenad med stor kunskap inom mark och schaktarbeten, tomtplanering och entreprenaduppdrag i Västerbotten.',
  },
  {
    role: 'Grundare och ägare',
    name: 'Kevin Lundmark',
    initials: 'KL',
    phone: '070 588 40 42',
    tel: '0705884042',
    description: 'Drivande kraft i familjeföretaget med gedigen bakgrund inom transportsektorn, maskintjänster och personliga kundrelationer.',
  },
];

export default function About() {
  usePageTitle(
    'Om Finnträsk Entreprenad | Mark och Schaktarbeten i Västerbotten',
    'Läs mer om Finnträsk Entreprenad. Familjeföretaget i Västerbotten som gör visioner till verklighet inom mark och schaktarbeten, tomtplanering och maskintjänster.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about-hero-bg.webp)',
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
                Om Finnträsk Entreprenad
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
                Familjeföretaget i Västerbotten som gör visioner till verklighet. Professionella mark och schaktarbeten med stark lokal förankring och goda kundrelationer.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '1100px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(320px, 40%, 460px) 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: Transparent Company Logo / Image Card */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0',
                  width: '100%',
                  maxWidth: '320px',
                  height: '320px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px',
                }}>
                  <img
                    src={images.about.teamMember?.url || images.about.hero?.url || images.logo.url}
                    alt="Finnträsk Entreprenad"
                    loading="eager"
                    decoding="async"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Mark och entreprenadarbeten med yrkesstolthet och lokal förankring
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    Finnträsk Entreprenad är ett företag med lokal förankring som utför allt inom mark och schaktarbeten. Med bas i Västerbotten verkar vi i hela regionen – inklusive Byske, Skellefteå och Piteå – för privatpersoner, lantbruk, företag och fastighetsägare.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Stor kunskap och bredd gör att vi löser det mesta
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Vi har en gedigen bakgrund inom transportsektorn med goda kontakter vilket gör att vi kan åta oss även större uppdrag. Det viktigaste för oss är att få en god kundrelation och att kunden blir helt nöjd med arbetet. Vi är serviceinriktade och tar dig och dina planer på fullaste allvar.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Oavsett om det handlar om tomtplanering inför nybygge, dikesgrävning, anläggning av grillplats eller trädfällning med skylift diskuterar vi oss fram till den bästa lösningen tillsammans med dig.
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(255, 121, 0, 0.08)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Det viktigaste för oss är att få en god kundrelation och att kunden blir nöjd med arbetet. Vi är serviceinriktade och tar dig på allvar. Hör av dig till oss om du har några frågor kring ett jobb du vill ha utfört så diskuterar vi oss fram till en lösning."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Niklas Lundmark och Kevin Lundmark, Grundare och ägare Finnträsk Entreprenad
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION D: FOUNDER & LEADERSHIP ──────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '90px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
                letterSpacing: '-0.03em',
                margin: '0 0 12px 0',
              }}>
                Grundare och kontaktpersoner
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto',
              }}>
                Niklas Lundmark och Kevin Lundmark leder Finnträsk Entreprenad och säkerställer personligt engagemang, yrkesskicklighet och trygghet i varje uppdrag.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '640px',
            margin: '0 auto',
          }} className="team-grid">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="slide-up-fade" delay={i * 120}>
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(255, 121, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                >
                  <div style={{ padding: '36px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: 'rgba(255, 121, 0, 0.12)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      margin: '0 auto 18px auto',
                      border: '2px solid rgba(255, 121, 0, 0.3)',
                    }}>
                      {member.initials}
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      margin: '0 0 6px 0',
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      margin: '0 0 10px 0',
                      lineHeight: 1.4,
                    }}>
                      {member.role}
                    </p>
                    <a
                      href={`tel:${member.tel}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        color: 'var(--color-text-dark)',
                        fontWeight: 600,
                        fontSize: '0.92rem',
                        textDecoration: 'none',
                        marginBottom: '14px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-dark)')}
                    >
                      <Phone size={14} color="var(--color-primary)" />
                      {member.phone}
                    </a>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid > *:first-child {
            display: flex;
            justifyContent: center;
          }
        }
      `}</style>
    </main>
  );
}
