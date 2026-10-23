import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Phone } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { ServiceIcon } from '../components/ServiceIcons';
import services, { getServiceBySlug } from '../data/services';
import NotFound from './NotFound';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const areas = ['Skellefteå', 'Byske', 'Finnträsk', 'Kåge', 'Ursviken', 'Bureå', 'Boliden', 'Burträsk', 'Jörn', 'Piteå'];

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = getServiceBySlug(slug);

  if (!svc) return <NotFound />;

  const others = services.filter((s) => s.slug !== svc.slug);
  const paragraphs = svc.detailedDescription.split('\n\n');

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(130px, 16vw, 170px)',
        paddingBottom: 'clamp(56px, 7vw, 90px)',
        background: '#0f172a',
      }}>
        <img
          src={svc.heroImage}
          alt=""
          aria-hidden="true"
          {...{ fetchpriority: "high" }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: svc.imagePosition || 'center 40%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(100deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.78) 50%, rgba(15, 23, 42, 0.45) 100%)',
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav aria-label="Brödsmulor" style={{ marginBottom: '22px' }}>
            <ol style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.65)',
            }}>
              <li><Link to="/" className="sd-crumb">Hem</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} style={{ display: 'block' }} /></li>
              <li><Link to="/tjanster" className="sd-crumb">Tjänster</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} style={{ display: 'block' }} /></li>
              <li aria-current="page" style={{ color: '#ffffff', fontWeight: 600 }}>{svc.title}</li>
            </ol>
          </nav>

          <div style={{ maxWidth: '720px' }}>
            <ScrollReveal animation="fade-up">
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                <span style={{ width: '28px', height: '2px', background: 'var(--color-primary)', display: 'inline-block' }} />
                {svc.badge}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="blur-in" delay={80}>
              <h1 style={{
                color: '#ffffff',
                fontWeight: 800,
                fontSize: 'clamp(2.1rem, 4.6vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: '0 0 18px 0',
              }}>
                {svc.h1}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={160}>
              <p style={{
                color: 'rgba(255,255,255,0.86)',
                fontSize: 'clamp(1rem, 1.4vw, 1.12rem)',
                lineHeight: 1.65,
                margin: '0 0 30px 0',
                maxWidth: '600px',
              }}>
                {svc.heroText}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={240}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link to={`/offert?tjanst=${svc.slug}`} className="sd-btn-primary">
                  Begär kostnadsfri offert <ArrowRight size={17} />
                </Link>
                {svc.slug !== 'transport-maskintransport' && (
                  <a href="tel:0705884032" className="sd-btn-ghost">
                    <Phone size={16} color="var(--color-primary)" /> Niklas: 070-588 40 32
                  </a>
                )}
                <a href="tel:0705884042" className="sd-btn-ghost">
                  <Phone size={16} color="var(--color-primary)" /> Kevin: 070-588 40 42
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={container}>
          <div className="sd-intro">
            <ScrollReveal animation="fade-up">
              <div>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  {svc.title} med lokal förankring
                </h2>
                {paragraphs.map((p, i) => (
                  <p key={i} style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.03rem',
                    lineHeight: 1.8,
                    margin: '0 0 18px 0',
                  }}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={120}>
              <aside style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: 'clamp(24px, 3vw, 34px)',
              }}>
                <div style={{ marginBottom: '18px' }}>
                  <ServiceIcon type={svc.slug} color="#ff7900" size={42} />
                </div>
                <h3 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  margin: '0 0 6px 0',
                }}>
                  Det här ingår
                </h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', margin: '0 0 18px 0', lineHeight: 1.6 }}>
                  Klicka för att läsa mer om varje tjänst.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {svc.subServices.map((sub) => (
                    <li key={sub.id}>
                      <a href={`#${sub.id}`} className="sd-jump">
                        <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                        <span>{sub.name}</span>
                        <ArrowRight size={15} className="sd-jump-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES ──────────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {svc.subServices.map((sub, index) => (
              <ScrollReveal key={sub.id} animation="fade-up" delay={index * 60}>
                <article id={sub.id} className="sd-sub">
                  <div className="sd-sub-num">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h2 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)',
                      letterSpacing: '-0.02em',
                      margin: '0 0 12px 0',
                      lineHeight: 1.25,
                    }}>
                      {sub.name}
                    </h2>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      {sub.text}
                    </p>
                  </div>
                  {sub.bullets && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {sub.bullets.map((b) => (
                        <li key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.93rem', color: '#334155', fontWeight: 600, lineHeight: 1.45 }}>
                          <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '1px' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link to={`/offert?tjanst=${svc.slug}`} className="sd-btn-primary">
              Begär offert på {svc.title.toLowerCase()} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AREAS ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px, 8vw, 90px) 0' }}>
        <div style={{ ...container, textAlign: 'center' }}>
          <ScrollReveal animation="fade-up">
            <h2 style={{
              color: 'var(--color-text-dark)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)',
              letterSpacing: '-0.025em',
              margin: '0 0 12px 0',
            }}>
              Här utför vi {svc.title.toLowerCase()}
            </h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 26px' }}>
              Vi utgår från Finnträsk och tar uppdrag i hela Skellefteå kommun och i övriga Västerbotten.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              {areas.map((a) => (
                <li key={a} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#334155',
                }}>
                  <MapPin size={14} color="var(--color-primary)" /> {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      {svc.faq && svc.faq.length > 0 && (
        <section style={{ background: '#f8fafc', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
          <div style={container}>
            <FAQAccordion
              items={svc.faq}
              title={`Vanliga frågor om ${svc.title.toLowerCase()}`}
              subtitle={
                svc.slug === 'transport-maskintransport'
                  ? 'Hittar du inte svaret? Ring Kevin så hjälper vi dig.'
                  : 'Hittar du inte svaret? Ring Niklas eller Kevin så hjälper vi dig.'
              }
              buttonText="Begär offert"
              buttonLink="/offert"
            />
          </div>
        </section>
      )}

      {/* ── OTHER SERVICES ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <h2 style={{
            color: 'var(--color-text-dark)',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)',
            letterSpacing: '-0.025em',
            margin: '0 0 28px 0',
          }}>
            Fler tjänster
          </h2>
          <div className="sd-others">
            {others.map((o) => (
              <Link key={o.slug} to={o.href} className="sd-other">
                <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={o.image}
                    alt={o.imageAlt}
                    loading="lazy"
                    className="sd-other-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px 22px 22px' }}>
                  <h3 style={{ color: 'var(--color-text-dark)', fontWeight: 800, fontSize: '1.15rem', margin: '0 0 8px 0' }}>
                    {o.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                    {o.subServices.map((s) => s.name).join(', ')}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Läs mer <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <style dangerouslySetInnerHTML={{ __html: `
        .sd-crumb { color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.2s ease; }
        .sd-crumb:hover { color: var(--color-primary); }
        .sd-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--color-primary); color: #ffffff; font-weight: 700; font-size: 0.97rem;
          padding: 15px 28px; border-radius: var(--border-radius-pill); text-decoration: none;
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.35); transition: all 0.25s ease;
        }
        .sd-btn-primary:hover { background: var(--color-primary-hover); transform: translateY(-2px); }
        .sd-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          color: #ffffff; font-weight: 600; font-size: 0.92rem; text-decoration: none;
          padding: 14px 20px; border-radius: var(--border-radius-pill);
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); transition: all 0.25s ease;
        }
        .sd-btn-ghost:hover { background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.3); }
        .sd-intro { display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(32px, 5vw, 70px); align-items: start; }
        .sd-jump {
          display: flex; align-items: center; gap: 10px; padding: 11px 12px; border-radius: 10px;
          color: #334155; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: background 0.2s ease, color 0.2s ease;
        }
        .sd-jump:hover { background: #ffffff; color: var(--color-primary); }
        .sd-jump-arrow { margin-left: auto; opacity: 0; transform: translateX(-4px); transition: all 0.2s ease; }
        .sd-jump:hover .sd-jump-arrow { opacity: 1; transform: translateX(0); }
        .sd-sub {
          display: grid; grid-template-columns: 64px 1.5fr 1fr; gap: clamp(20px, 3vw, 40px); align-items: start;
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: clamp(24px, 3vw, 36px);
          scroll-margin-top: 110px; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
        }
        .sd-sub-num {
          font-size: 2rem; font-weight: 800; line-height: 1; letter-spacing: -0.03em;
          color: transparent; -webkit-text-stroke: 1.5px #ff7900;
        }
        .sd-others { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .sd-other {
          display: flex; flex-direction: column; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;
          overflow: hidden; text-decoration: none; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sd-other:hover { transform: translateY(-5px); box-shadow: 0 18px 36px rgba(15, 23, 42, 0.1); border-color: rgba(234, 88, 12, 0.3); }
        .sd-other-img { transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .sd-other:hover .sd-other-img { transform: scale(1.05); }
        @media (max-width: 968px) {
          .sd-intro { grid-template-columns: 1fr; }
          .sd-sub { grid-template-columns: 1fr; gap: 14px; }
          .sd-others { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
