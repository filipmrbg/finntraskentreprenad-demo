import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import services, { ServiceItem } from '../data/services';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function ServicesOverview() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToEl = () => {
        const element = document.getElementById(id);
        if (element) {
          const isMobile = window.innerWidth < 860;
          const yOffset = isMobile ? -85 : -140;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          return true;
        }
        return false;
      };
      if (!scrollToEl()) {
        const t1 = setTimeout(scrollToEl, 80);
        const t2 = setTimeout(scrollToEl, 250);
        return () => { clearTimeout(t1); clearTimeout(t2); };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const isMobile = window.innerWidth < 860;
      const yOffset = isMobile ? -85 : -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>

      {/* ── HERO HEADER ──────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/services-hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '46px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="blur-in">
            <h1 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}>
              Tjänster i Skellefteå och Västerbotten
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{
              color: 'rgba(255,255,255,0.88)',
              fontSize: '1.08rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              Markarbeten, grundläggning, skogsentreprenad, fastighetsservice samt transport- och maskintransporter. Alla våra tjänster samlade i fem områden, utförda av ett lokalt familjeföretag från Finnträsk.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ── ANCHOR TAB BAR (EJ STICKY PÅ MOBIL) ──────────────────────────── */}
      <div className="so-anchor-bar">
        <div style={container}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            {services.map((svc) => (
              <button
                key={svc.slug}
                onClick={() => scrollToSection(svc.slug)}
                className="so-tab-btn"
              >
                {svc.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAILED SERVICE SECTIONS ──────────── */}
      <div style={{ padding: '20px 0 80px 0' }}>
        {services.map((svc: ServiceItem, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={svc.slug}
              id={svc.slug}
              className="so-section-wrap"
              style={{
                padding: '80px 0',
                background: isEven ? '#ffffff' : '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <div style={container}>
                <div className="so-service-grid">

                  {/* Image Column */}
                  <div className={`so-service-image ${isEven ? 'is-even' : 'is-odd'}`}>
                    <ScrollReveal animation={isEven ? 'fade-right' : 'fade-left'}>
                      <div className="so-img-box" style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                        border: '3px solid #ffffff',
                        aspectRatio: '4 / 3',
                        background: '#0f172a',
                      }}>
                        <img
                          src={svc.image}
                          alt={svc.imageAlt}
                          loading={index < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                          {...{ fetchpriority: index < 2 ? "high" : "auto" }}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: svc.imagePosition || 'center 35%',
                            display: 'block',
                          }}
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column */}
                  <div className={`so-service-content ${isEven ? 'is-even' : 'is-odd'}`}>
                    <ScrollReveal animation={isEven ? 'fade-left' : 'fade-right'}>
                      {svc.tag && (
                        <span style={{
                          color: 'var(--color-primary)',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          display: 'block',
                          marginBottom: '8px',
                        }}>
                          {svc.tag}
                        </span>
                      )}
                      <h2 style={{
                        color: 'var(--color-text-dark)',
                        fontWeight: 800,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.03em',
                        margin: '0 0 16px 0',
                        lineHeight: 1.2,
                      }}>
                        <Link to={svc.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {svc.title}
                        </Link>
                      </h2>
                      <p style={{
                        color: 'var(--color-gray-600)',
                        fontSize: '1.02rem',
                        lineHeight: 1.75,
                        margin: '0 0 24px 0',
                      }}>
                        {svc.detailedDescription.split('\n\n')[0]}
                      </p>

                      {/* Sub-services, each linking into the service page */}
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '8px 16px',
                        margin: '0 0 28px 0',
                      }}>
                        {svc.subServices.map((sub) => (
                          <li key={sub.id}>
                            <Link to={`${svc.href}#${sub.id}`} className="so-sub-link">
                              <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                              <span>{sub.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* Action Buttons */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                        <Link
                          to={svc.href}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'var(--color-primary)',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            padding: '14px 28px',
                            borderRadius: 'var(--border-radius-pill)',
                            textDecoration: 'none',
                            boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
                            transition: 'all 0.25s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--color-primary-hover)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          Läs mer om {svc.title.toLowerCase()} <ArrowRight size={16} />
                        </Link>
                        <Link to={`/offert?tjanst=${svc.slug}`} className="so-secondary">
                          Begär offert
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <CTABanner />

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Anchor Tab Bar: Ej sticky på mobil, sticky på desktop */
        .so-anchor-bar {
          position: relative;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 14px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }
        @media (min-width: 860px) {
          .so-anchor-bar {
            position: sticky;
            top: 72px;
            z-index: 40;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          }
        }

        .so-tab-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 8px 20px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-family);
          white-space: nowrap;
        }
        .so-tab-btn:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        /* Desktop: Varannan bild vänster, varannan höger */
        @media (min-width: 860px) {
          .so-service-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 50px !important;
            align-items: center !important;
          }
          .so-service-image.is-even { order: 1; }
          .so-service-content.is-even { order: 2; }
          .so-service-image.is-odd { order: 2; }
          .so-service-content.is-odd { order: 1; }
        }

        /* Mobil & mindre skärmar: Alltid samma ordning: Bild (1) först, sedan Rubrik & text (2) */
        @media (max-width: 859px) {
          .so-service-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
          }
          .so-service-image {
            order: 1 !important;
            width: 100% !important;
          }
          .so-service-content {
            order: 2 !important;
            width: 100% !important;
          }
          .so-section-wrap {
            padding: 48px 0 !important;
          }
          .so-img-box {
            aspect-ratio: 4 / 3 !important;
            min-height: auto !important;
            max-height: 380px !important;
          }
        }

        .so-sub-link {
          display: flex; align-items: center; gap: 8px; padding: 6px 0;
          font-size: 0.95rem; color: #334155; font-weight: 600; text-decoration: none;
          transition: color 0.2s ease;
        }
        .so-sub-link:hover { color: var(--color-primary); }
        .so-secondary {
          display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px;
          border-radius: var(--border-radius-pill); border: 1.5px solid #cbd5e1;
          color: #334155; font-weight: 700; font-size: 0.95rem; text-decoration: none;
          transition: all 0.2s ease;
        }
        .so-secondary:hover { border-color: var(--color-primary); color: var(--color-primary); }
      ` }} />
    </main>
  );
}
