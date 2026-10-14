import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon } from 'lucide-react';
import services from '../data/services';

export default function NotFound() {
  return (
    <main style={{
      fontFamily: 'var(--font-family)',
      background: '#0f172a',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(140px, 18vw, 180px) clamp(20px, 5vw, 40px) 90px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 20% 10%, rgba(234, 88, 12, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(194, 132, 71, 0.12) 0%, transparent 50%)',
      }} />
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <p aria-hidden="true" style={{
          fontSize: 'clamp(5rem, 16vw, 9rem)',
          fontWeight: 900,
          lineHeight: 1,
          margin: '0 0 10px 0',
          letterSpacing: '-0.05em',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(234, 88, 12, 0.85)',
        }}>
          404
        </p>
        <h1 style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          letterSpacing: '-0.03em',
          margin: '0 0 14px 0',
        }}>
          Sidan hittades inte
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 auto 32px', maxWidth: '520px' }}>
          Länken kan vara gammal eller felstavad. Gå till startsidan eller välj en av våra tjänster nedan.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          <Link to="/" className="nf-btn nf-btn-primary">
            <HomeIcon size={17} /> Till startsidan
          </Link>
          <Link to="/kontakt" className="nf-btn nf-btn-ghost">
            Kontakta oss
          </Link>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {services.map((svc) => (
            <li key={svc.slug}>
              <Link to={svc.href} className="nf-chip">
                {svc.title} <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .nf-btn {
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
          font-weight: 700; font-size: 0.95rem; padding: 14px 26px; border-radius: var(--border-radius-pill);
          transition: all 0.25s ease;
        }
        .nf-btn-primary { background: var(--color-primary); color: #ffffff; box-shadow: 0 6px 20px rgba(234, 88, 12, 0.35); }
        .nf-btn-primary:hover { background: var(--color-primary-hover); transform: translateY(-2px); }
        .nf-btn-ghost { color: #ffffff; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); }
        .nf-btn-ghost:hover { background: rgba(255,255,255,0.14); }
        .nf-chip {
          display: inline-flex; align-items: center; gap: 6px; text-decoration: none;
          color: rgba(255,255,255,0.85); font-weight: 600; font-size: 0.88rem;
          padding: 9px 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.14);
          transition: all 0.2s ease;
        }
        .nf-chip:hover { color: var(--color-primary); border-color: var(--color-primary); }
      ` }} />
    </main>
  );
}
