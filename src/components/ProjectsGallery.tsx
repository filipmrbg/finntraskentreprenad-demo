import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';
import images from '../data/images';

interface ReferenceItem {
  id: string;
  image: string;
  alt: string;
}

const references: ReferenceItem[] = images.gallery.map((g, i) => ({
  id: String(i + 1),
  image: g.url,
  alt: g.alt,
}));

// Triple the list to ensure perfectly smooth, infinite seamless looping on all screens
const marqueeItems = [...references, ...references, ...references];

export default function ProjectsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = references.length;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + total) % total));
  }, [total]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % total));
  }, [total]);

  // Lightbox keyboard navigation & body lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section
      id="projekt"
      style={{
        background: '#f8fafc',
        padding: 'clamp(70px, 9vw, 110px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
        }}
      >
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '36px',
        }}>
          <div>
            <ScrollReveal animation="fade-right">
              <span style={{
                color: 'var(--color-primary)',
                fontWeight: 700,
                fontSize: '0.84rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}>
                Referenser
              </span>
              <h2
                style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.6vw, 2.85rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.16,
                }}
              >
                Här är några av<br />
                <span style={{ color: 'var(--color-primary)' }}>våra tidigare projekt</span>
              </h2>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal animation="fade-left" delay={120}>
              <Link
                to="/offert"
                className="gallery-head-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '12px',
                  border: '1.5px solid #cbd5e1',
                  background: '#ffffff',
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                }}
              >
                <span>Begär offert för ditt projekt</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── Infinite Continuous Rolling Strip ── */}
      <div className="gallery-marquee-viewport">
        <div className="gallery-marquee-track">
          {marqueeItems.map((item, index) => {
            const originalIndex = index % total;
            return (
              <div
                key={`${item.id}-${index}`}
                className="gallery-marquee-card"
                onClick={() => setLightboxIndex(originalIndex)}
                role="button"
                tabIndex={0}
                aria-label={`Visa bild ${originalIndex + 1} i fullskärm`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery-marquee-img"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Hint and CTA Button */}
      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <ScrollReveal animation="fade-up" delay={150}>
          <p style={{
            color: 'var(--color-gray-600)',
            fontSize: '0.88rem',
            margin: '0 0 16px 0',
            fontWeight: 500,
          }}>
            Håll muspekaren över för att pausa • Klicka på valfri bild för att förstora
          </p>
          <Button variant="primary" href="/kontakt" size="md">
            Kontakta oss om ditt projekt <ArrowRight size={16} />
          </Button>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal via Portal directly to body */}
      {lightboxIndex !== null && typeof document !== 'undefined' && createPortal(
        <div
          className="ref-modal-backdrop"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="ref-modal-close"
            aria-label="Stäng"
          >
            <X size={24} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="ref-modal-arrow prev"
            aria-label="Föregående bild"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="ref-modal-arrow next"
            aria-label="Nästa bild"
          >
            <ChevronRight size={30} />
          </button>

          {/* Modal Image Wrapper */}
          <div
            className="ref-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={references[lightboxIndex].image}
              alt={references[lightboxIndex].alt}
              className="ref-modal-img"
            />
            <div className="ref-modal-counter">
              {lightboxIndex + 1} / {total}
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .gallery-head-cta:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }

        /* Continuous Infinite Rolling Marquee Viewport */
        .gallery-marquee-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 12px 0 20px 0;
          mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        }

        .gallery-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: infiniteRoll 42s linear infinite;
          will-change: transform;
        }

        .gallery-marquee-viewport:hover .gallery-marquee-track {
          animation-play-state: paused;
        }

        @keyframes infiniteRoll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        /* Large, prominent photo cards with zero text */
        .gallery-marquee-card {
          flex: 0 0 auto;
          width: clamp(380px, 34vw, 540px);
          height: clamp(320px, 30vw, 450px);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          background: #e2e8f0;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        .gallery-marquee-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: var(--color-primary);
          box-shadow: 0 20px 48px -8px rgba(15, 23, 42, 0.2);
          z-index: 5;
        }

        .gallery-marquee-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          pointer-events: none;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-marquee-card:hover .gallery-marquee-img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-marquee-card {
            width: clamp(280px, 78vw, 360px);
            height: 280px;
            border-radius: 16px;
          }
          .gallery-marquee-track {
            gap: 16px;
            animation-duration: 30s;
          }
        }

        /* Lightbox Modal (Directly on body) */
        .ref-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 15, 29, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          margin: 0;
          box-sizing: border-box;
          animation: modalFadeIn 0.2s ease;
        }

        .ref-modal-dialog {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: modalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000000;
        }

        .ref-modal-img {
          max-width: 88vw;
          max-height: 80vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .ref-modal-counter {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 14px;
          letter-spacing: 0.05em;
        }

        .ref-modal-close {
          position: fixed;
          top: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 1000001;
        }

        .ref-modal-close:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.08);
        }

        .ref-modal-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 1000001;
        }

        .ref-modal-arrow:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.08);
        }

        .ref-modal-arrow.prev {
          left: 24px;
        }

        .ref-modal-arrow.next {
          right: 24px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
