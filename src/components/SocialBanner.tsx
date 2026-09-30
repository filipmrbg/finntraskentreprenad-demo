import { Instagram, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SocialBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        padding: 'clamp(56px, 7vw, 84px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
        }}
      >
        <ScrollReveal animation="fade-up" duration={0.7}>
          <div className="social-hub-banner">
            <div className="social-hub-icon-wrap">
              <Instagram size={36} color="#ffffff" />
            </div>

            <div className="social-hub-content">
              <span className="social-hub-badge">Instagram</span>
              <h2 className="social-hub-title">Följ Finnträsk Entreprenad</h2>
              <p className="social-hub-desc">
                Följ <strong>@finntraskentreprenad</strong> för att se bilder och uppdateringar från våra pågående markarbeten, schaktprojekt och maskintjänster i Västerbotten.
              </p>
            </div>

            <div className="social-hub-action">
              <a
                href="https://www.instagram.com/finntraskentreprenad/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-hub-btn instagram"
                aria-label="Följ Finnträsk Entreprenad på Instagram"
              >
                <Instagram size={18} />
                <span>Följ @finntraskentreprenad</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .social-hub-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: clamp(28px, 4vw, 36px) clamp(24px, 4vw, 40px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .social-hub-banner:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
        }

        .social-hub-icon-wrap {
          width: 68px;
          height: 68px;
          min-width: 68px;
          border-radius: 18px;
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(225, 48, 108, 0.28);
        }

        .social-hub-content {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .social-hub-badge {
          color: var(--color-primary);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .social-hub-title {
          font-weight: 800;
          color: var(--color-text-dark);
          font-size: clamp(1.4rem, 2.4vw, 1.85rem);
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.2;
        }

        .social-hub-desc {
          color: var(--color-gray-600);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          max-width: 620px;
        }

        .social-hub-action {
          flex-shrink: 0;
        }

        .social-hub-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          white-space: nowrap;
        }

        .social-hub-btn.instagram {
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
        }

        .social-hub-btn.instagram:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(225, 48, 108, 0.35);
        }

        @media (max-width: 860px) {
          .social-hub-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 24px;
          }

          .social-hub-action {
            width: 100%;
          }

          .social-hub-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
