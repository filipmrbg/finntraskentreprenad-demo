import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import images from '../data/images';

const serviceLinks = [
  { label: 'Grävning', href: '/tjanster#gravning' },
  { label: 'Byggnation', href: '/tjanster#byggnation' },
  { label: 'Betong', href: '/tjanster#betong' },
  { label: 'Maskinförare', href: '/tjanster#maskinforare' },
];

const socialIcons = [
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/gsbygg_varmland/' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogoClick(e: React.MouseEvent) {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  return (
    <footer style={{ background: 'var(--color-white)', fontFamily: 'var(--font-family)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px clamp(20px, 5vw, 40px) 0' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
        }}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}>
                <div style={{
                  display: 'inline-block',
                }}>
                  <img
                    src={images.logoDark?.url || '/logo-dark.png'}
                    alt={images.logoDark?.alt || images.logo.alt}
                    style={{
                      height: '75px',
                      width: 'auto',
                      display: 'block',
                      objectFit: 'contain',
                      borderRadius: '8px',
                    }}
                  />
                </div>
              </Link>
            </div>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              GS Bygg Värmland AB erbjuder professionella bygg och hantverkstjänster med högsta kvalitet, noggrannhet och finish i Värmland med omnejd.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gray-600)',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-gray-600)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigera */}
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--color-text-dark)', fontSize: '1rem', margin: '0 0 20px 0' }}>
              Tjänster
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      color: 'var(--color-gray-600)',
                      textDecoration: 'none',
                      lineHeight: '2.2',
                      fontSize: '0.95rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--color-text-dark)', fontSize: '1rem', margin: '0 0 20px 0' }}>
              Kontaktuppgifter
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>

              <a
                href="mailto:gsbyggvarmland@hotmail.com"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Mail size={16} strokeWidth={2} />
                </div>
                <span>gsbyggvarmland@hotmail.com</span>
              </a>

              <a
                href="tel:0768407405"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Phone size={16} strokeWidth={2} />
                </div>
                <span>076 840 74 05</span>
              </a>

              <div
                className="footer-contact-static"
              >
                <div className="footer-contact-icon">
                  <MapPin size={16} strokeWidth={2} />
                </div>
                <span>Värmland • Karlstad • Hammarö • Kil • Ulvsby</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px',
            marginTop: '40px',
            paddingBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--color-gray-600)', fontSize: '0.875rem', flexWrap: 'wrap' }}>
            <span>© 2026 GS Bygg Värmland AB</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-gray-600) !important;
          text-decoration: none;
          transition: all 0.2s ease;
          padding: 2px 0;
          cursor: pointer;
        }
        .footer-contact-item:hover {
          color: var(--color-primary) !important;
          transform: translate3d(3px, 0, 0);
        }
        .footer-contact-icon {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
        }
        .footer-contact-static {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-gray-600);
          padding: 2px 0;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div:first-child > div { justify-content: center; }
          .footer-bottom { flex-direction: column; align-items: center !important; text-align: center; }
          .footer-contact-static, .footer-contact-item {
            justify-content: center;
          }
          .footer-contact-item:hover {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}

