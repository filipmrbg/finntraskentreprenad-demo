import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Star,
  Phone,
  MapPin,
  Hammer,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CallModal from '../components/CallModal';
import CTABanner from '../components/CTABanner';
import ReviewCard from '../components/ReviewCard';
import SocialBanner from '../components/SocialBanner';
import ProjectsGallery from '../components/ProjectsGallery';
import FAQAccordion from '../components/FAQAccordion';
import { ServiceIcon } from '../components/ServiceIcons';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const homeFaqItems = [
  {
    question: 'Kostar det något att få en offert?',
    answer: 'Nej, vi erbjuder alltid kostnadsfria offerter och rådgivning helt utan förbindelser.',
  },
  {
    question: 'Hur fungerar ROT avdraget?',
    answer: 'Som privatperson har du rätt till ROT avdrag som reducerar arbetskostnaden med 30 %. Vi sköter all administration direkt med Skatteverket och drar av beloppet på din faktura.',
  },
  {
    question: 'Lämnar ni garanti på utfört arbete?',
    answer: 'Ja, vi arbetar alltid enligt gällande branschregler och lämnar fullständiga garantier på både utfört arbete och material.',
  },
  {
    question: 'Hjälper ni till med både små och stora projekt?',
    answer: 'Ja, vi åtar oss allt från mindre renoveringar och servicearbeten till mer omfattande nybyggnationer och tillbyggnader.',
  },
  {
    question: 'Hur går processen till från start till mål?',
    answer: 'Vi inleder med en dialog kring dina önskemål och förutsättningar, tar fram en tydlig offert och sätter en överenskommen tidsplan innan arbetet påbörjas.',
  },
];

export default function Home() {
  usePageTitle(
    'Finnträsk Entreprenad | Mark och Schaktarbeten i Västerbotten',
    'Finnträsk Entreprenad utför professionella mark och schaktarbeten, tomtplanering, anläggning, grundarbeten och maskintjänster i Västerbotten med omnejd. Begär kostnadsfri offert!'
  );

  const { hash, state } = useLocation();
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const desktopVideoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260930_051043_bafacc09-c033-4a24-ad3e-1038a50119ea.mp4';
  const mobileVideoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260930_051043_bafacc09-c033-4a24-ad3e-1038a50119ea.mp4';

  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const heroVideoUrl = isMobile ? mobileVideoUrl : desktopVideoUrl;

  useEffect(() => {
    const targetId = (state as { scrollTo?: string } | null)?.scrollTo || (hash ? hash.replace('#', '') : null);
    if (targetId) {
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      };
      const t1 = setTimeout(scrollToElement, 60);
      const t2 = setTimeout(scrollToElement, 200);
      const t3 = setTimeout(scrollToElement, 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [hash, state]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay blocked (e.g. iOS Low Power Mode) — will unlock on user interaction
        });
      }
    };

    const events = ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing'];
    const handler = () => attemptPlay();
    events.forEach((event) => video.addEventListener(event, handler));
    attemptPlay();

    const unlockPlay = () => {
      if (video.paused) attemptPlay();
    };

    window.addEventListener('touchstart', unlockPlay, { passive: true });
    window.addEventListener('touchend', unlockPlay, { passive: true });
    window.addEventListener('scroll', unlockPlay, { passive: true });
    window.addEventListener('click', unlockPlay, { passive: true });

    return () => {
      events.forEach((event) => video.removeEventListener(event, handler));
      window.removeEventListener('touchstart', unlockPlay);
      window.removeEventListener('touchend', unlockPlay);
      window.removeEventListener('scroll', unlockPlay);
      window.removeEventListener('click', unlockPlay);
    };
  }, [isMobile]);



  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        boxSizing: 'border-box',
      }}>
        {/* Parallax Background Video */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: '-20% 0',
            zIndex: 0,
            willChange: 'transform',
            background: '#0f172a',
          }}
        >
          <video
            key={heroVideoUrl}
            ref={heroVideoRef}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(1.06) contrast(1.03)',
            }}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        </div>
        {/* Cinematic gradient overlay: bright and clear over the machinery, soft contrast behind the text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(15, 17, 23, 0.58) 0%, rgba(15, 17, 23, 0.32) 48%, rgba(15, 17, 23, 0.05) 80%), linear-gradient(180deg, rgba(15, 17, 23, 0.35) 0%, transparent 22%, transparent 88%, rgba(15, 17, 23, 0.4) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '720px',
            margin: '0',
            paddingTop: '60px',
            paddingBottom: '40px',
          }}>
            {/* Top Location Line */}
            <ScrollReveal animation="fade-down" delay={0} duration={0.6}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontSize: 'clamp(0.74rem, 1.2vw, 0.86rem)',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.95)',
                display: 'block',
                marginBottom: '14px',
              }}>
                UTGÅR FRÅN VÄSTERBOTTEN MED OMNEJD
              </span>
            </ScrollReveal>

            {/* Huge Bold Headline (H1) */}
            <ScrollReveal animation="fade-up" delay={100} duration={0.8}>
              <h1 style={{
                fontFamily: 'var(--font-family)',
                fontSize: 'clamp(2.4rem, 7vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                textTransform: 'uppercase',
                letterSpacing: '-0.015em',
                margin: '0 0 20px 0',
                textShadow: '0 4px 18px rgba(0, 0, 0, 0.75)',
              }}>
                <span style={{ color: '#ffffff', display: 'block' }}>FINNTRÄSK</span>
                <span style={{ color: 'var(--color-primary)', display: 'block', whiteSpace: 'nowrap' }}>ENTREPRENAD</span>
              </h1>
            </ScrollReveal>

            {/* Subtitle / Description */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <p style={{
                fontFamily: 'var(--font-family)',
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                lineHeight: 1.65,
                maxWidth: '620px',
                margin: '0 0 36px 0',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)',
                fontWeight: 400,
              }}>
                Familjeföretaget i Västerbotten som gör visioner till verklighet. Vi utför allt inom mark och schaktarbeten, tomtplanering, anläggning, grundläggning och maskintjänster med personlig service och goda kundrelationer.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={300} duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}>
                <Button variant="primary" size="lg" href="/offert">
                  Begär offert
                </Button>

                <Button
                  variant="white"
                  size="lg"
                  href="#tjanster"
                >
                  Se våra tjänster
                </Button>
              </div>

              {/* Both phone numbers presented on the exact same level */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '18px',
                padding: '8px 18px',
                borderRadius: '999px',
                background: 'rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                fontSize: '0.88rem',
                color: 'rgba(255, 255, 255, 0.9)',
                flexWrap: 'wrap',
              }}>
                <a
                  href="tel:0705884032"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Niklas:</span> 070 588 40 32
                </a>
                <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>•</span>
                <a
                  href="tel:0705884042"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Kevin:</span> 070 588 40 42
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: VÅRA TJÄNSTER (MODERN CLEAN PHOTO CARDS) ───── */}
      <section
        id="tjanster"
        style={{
          background: '#f8fafc',
          padding: 'clamp(80px, 10vw, 120px) 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          {/* Clean Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '580px' }}>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Vad vi erbjuder
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Entreprenadtjänster med fokus på kvalitet
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: '0 0 12px 0',
                }}>
                  Från mark och schaktarbeten till anläggning, tomtplanering och maskintjänster i Västerbotten med omnejd.
                </p>
                <Link
                  to="/tjanster"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                  }}
                >
                  Utforska alla tjänster <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Clean Modern Photo Grid - 4 Services with Icons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={index * 80}>
                <Link
                  to={svc.href}
                  className="modern-photo-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'translateY(-6px)';
                    card.style.boxShadow = '0 20px 40px rgba(15, 23, 42, 0.12)';
                    card.style.borderColor = 'rgba(234, 88, 12, 0.3)';
                    const img = card.querySelector('.card-photo') as HTMLElement;
                    if (img) img.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.05)';
                    card.style.borderColor = '#e2e8f0';
                    const img = card.querySelector('.card-photo') as HTMLElement;
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  {/* Photo Container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 3',
                    minHeight: '230px',
                    overflow: 'hidden',
                    background: '#0f172a',
                  }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      className="card-photo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 35%',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.6) 100%)',
                      pointerEvents: 'none',
                    }} />
                  </div>

                  {/* Content Container */}
                  <div style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}>
                    {/* Architectural Service Icon */}
                    <div style={{ marginBottom: '16px' }}>
                      <ServiceIcon type={svc.slug} color="#c28447" size={38} />
                    </div>

                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      margin: '0 0 10px 0',
                      letterSpacing: '-0.015em',
                      lineHeight: 1.25,
                    }}>
                      {svc.title}
                    </h3>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      margin: '0 0 20px 0',
                      flex: 1,
                    }}>
                      {svc.shortDescription}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid #f1f5f9',
                    }}>
                      Läs mer <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Centered Button Underneath Grid */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <ScrollReveal animation="fade-up" delay={200}>
              <Button variant="primary" href="/tjanster" size="lg">
                Utforska alla tjänster <ArrowRight size={18} />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DIN LOKALA BYGGFIRMA / OM OSS ─────────────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px, 35%, 400px) 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Left: Company Image Card */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(15, 23, 42, 0.1)',
                aspectRatio: '4 / 5',
                maxHeight: '480px',
              }}>
                <img
                  src={images.about.hero.url || '/about.webp'}
                  alt={images.about.hero.alt || 'Finnträsk Entreprenad'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Din lokala entreprenör i Västerbotten med omnejd
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  Finnträsk Entreprenad är ett familjeföretag med stark lokal förankring i Västerbotten som utför allt inom mark och schaktarbeten. Stor kunskap och bredd gör att vi löser det mesta, och med en gedigen bakgrund inom transportsektorn åtar vi oss även större uppdrag. Det viktigaste för oss är att få en god kundrelation och att kunden blir helt nöjd med arbetet.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Lokal förankring och personligt engagemang i varje projekt',
                    'Tydliga offerter, fasta priser och trygg dialog från start till mål',
                    'Bred maskinpark och stor kunskap inom mark och schakt',
                    'Gedigen transportbakgrund för både mindre och större uppdrag',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={250}>
                <div style={{ marginTop: '32px' }}>
                  <Button variant="dark" href="/om-oss">
                    Läs mer om oss
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REFERENSER / PROJEKT ──────────────────────── */}
      <ProjectsGallery />

      {/* ── SECTION 5: HUR DET FUNGERAR (3-STEGS PROCESS MED PILAR) ── */}
      <section style={{
        background: '#ffffff',
        padding: 'clamp(60px, 8vw, 100px) 0',
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={container}>
          {/* Clean Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '540px' }}>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Enkelt och tryggt
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Så går det till från idé till verklighet
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  Från första kontakt till färdigställt entreprenadprojekt i tre enkla steg med full transparens och trygghet.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="steps-grid-wrapper" style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '0',
            textAlign: 'center',
          }}>
            {[
              {
                icon: Phone,
                title: '1. Kontakta oss',
                desc: 'Hör av dig till Niklas eller Kevin kring ditt projekt. Vi ger kostnadsfri rådgivning och bollar möjligheter.',
              },
              {
                icon: MapPin,
                title: '2. Platsbesök och offert',
                desc: 'Vi går igenom tomtens förutsättningar på plats och tar fram en tydlig offert med fast pris och tidsplan.',
              },
              {
                icon: Hammer,
                title: '3. Vi utför arbetet',
                desc: 'Vi genomför schakt och markarbetet med högsta precision, moderna maskiner och trygga garantier.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <ScrollReveal animation="blur-in" delay={i * 150} duration={0.8}>
                  <div className="step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', maxWidth: '280px' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: 'var(--color-primary)',
                      borderRadius: 'var(--border-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <Icon size={28} color="#1a1f2e" />
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      margin: '0 0 12px 0',
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      margin: 0,
                      maxWidth: '260px',
                    }}>
                      {desc}
                    </p>
                  </div>
                </ScrollReveal>
                {i < 2 && (
                  <div className="step-arrow">
                    <svg width="65" height="24" viewBox="0 0 65 24" fill="none" stroke="#C4C4C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
                      <path d="M 5 12 C 20 10, 40 10, 58 11" />
                      <path d="M 49 5 C 52 8, 56 10, 58 11" />
                      <path d="M 48 18 C 51 15, 56 12, 58 11" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(50px, 7vw, 80px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/cta-mid-section.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,31,46,0.88)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Nyfiken på vad ditt projekt kostar?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi skickar en kostnadsfri offert inom 24 timmar.
            </p>
            <Button variant="primary" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: KUNDRECENSIONER ──────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={container}>
          {/* Clean Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Kundomdömen
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Vad säger våra kunder?
                </h2>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal animation="fade-left" delay={100}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.92rem',
                  color: '#4b5563',
                  fontWeight: 500,
                  background: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.13h4.01c2.34-2.16 3.69-5.32 3.69-8.75z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-4.01-3.13c-1.11.75-2.53 1.19-3.95 1.19-3.04 0-5.61-2.05-6.53-4.82H1.31v3.23A12 12 0 0 0 12 24z" />
                    <path fill="#FBBC05" d="M5.47 14.33A7.16 7.16 0 0 1 5 12c0-.8.14-1.58.39-2.33V6.44H1.31A11.96 11.96 0 0 0 0 12c0 2.05.52 4 1.31 5.67l4.16-3.34z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0A12 12 0 0 0 1.31 6.44l4.16 3.23a7.18 7.18 0 0 1 6.53-4.92z" />
                  </svg>
                  <span style={{ fontWeight: 700, color: '#111827' }}>5.0 / 5</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                  <span style={{ color: 'var(--color-gray-600)', fontSize: '0.85rem' }}>(Omdömen i Västerbotten med omnejd)</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="reviews-grid">
            {[
              {
                name: 'Johan Eriksson',
                location: 'Skellefteå',
                text: 'Vi anlitade Finnträsk Entreprenad för tomtplanering och schaktning inför vårt nya garage. Otroligt smidigt samarbete, snabb återkoppling och ett fantastiskt slutresultat med högsta precision. Klart i tid och rent och städat efteråt!',
                stars: 5,
                date: 'för 2 veckor sedan',
                authorSub: 'Lokal guide • 14 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Karin och Markus Lindqvist',
                location: 'Byske',
                text: 'Niklas och Kevin hjälpte oss att anlägga en fantastisk grillplats och utföra dikesgrävning på fastigheten. Mycket trevligt och proffsigt bemötande, tydlig offert och ett suveränt hantverk rakt igenom!',
                stars: 5,
                date: 'för en månad sedan',
                authorSub: '8 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Stefan Holmström',
                location: 'Västerbotten',
                text: 'Toppklassig entreprenadfirma! Behövde hjälp med trädfällning med skylift samt grundläggning för infart. Finnträsk Entreprenad löste allt snabbt, säkert och till ett mycket bra pris. Rekommenderas varmt!',
                stars: 5,
                date: 'för 2 månader sedan',
                authorSub: 'Lokal guide • 21 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
              },
            ].map((review, i) => {
              const delay = i * 150;
              return (
                <ScrollReveal key={i} animation="fade-up" delay={delay}>
                  <ReviewCard review={review} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: VANLIGA FRÅGOR (FAQ - DARK CONTRAST BREAK) ── */}
      <section style={{
        background: '#0f172a',
        padding: 'clamp(70px, 9vw, 110px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 85% 25%, rgba(234, 88, 12, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <FAQAccordion
            items={homeFaqItems}
            title="Vanliga frågor"
            subtitle="Här hittar du svar på vanliga funderingar kring offerter, ROT avdrag och hur vi arbetar."
            buttonText="Kontakta oss direkt"
            buttonLink="/kontakt"
            dark={true}
          />
        </div>
      </section>

      {/* ── SOCIAL MEDIA BANNER ─────────────────────────────────── */}
      <SocialBanner />

      {/* ── SECTION 10: CTA BANNER ───────────────────────────────── */}
      <CTABanner />

      {/* ── TWEAKED SPACED STYLES ───────────────────────────────── */}
      <style>{`
        .spaced-screenshot-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(20px, 3vw, 32px);
        }
        .spaced-tile {
          position: relative;
          display: block;
          text-decoration: none;
          aspect-ratio: 16/10;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .spaced-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .spaced-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.88) 100%);
          transition: background 0.4s ease;
        }
        .spaced-tile:hover {
          transform: translateY(-6px);
          border-color: rgba(217, 119, 6, 0.45);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.16);
        }
        .spaced-tile:hover .spaced-tile-img {
          transform: scale(1.06);
        }
        .spaced-tile:hover .spaced-tile-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.92) 100%);
        }
        .spaced-tile-content {
          position: absolute;
          inset: auto 0 0 0;
          padding: 24px 24px 22px 24px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 2;
        }
        .spaced-tile-left {
          display: flex;
          flex-direction: column;
        }
        .spaced-tile-title {
          color: #ffffff;
          font-weight: 700;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
        }
        .spaced-tile-right {
          flex-shrink: 0;
          margin-left: 12px;
        }
        .spaced-tile-action {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .spaced-tile:hover .spaced-tile-action {
          color: var(--color-primary);
        }

        .steps-grid-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .review-card-el {
          background: var(--color-white);
          border: 1px solid #EDE8E0;
          border-radius: var(--border-radius-lg);
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .review-card-el:hover {
          transform: translateY(-5px) rotate(-0.5deg);
          box-shadow: 0 16px 40px rgba(28,21,16,0.10);
        }
        .step-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 70px;
        }
        @media (max-width: 1024px) {
          .spaced-screenshot-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .spaced-screenshot-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .steps-grid-wrapper { flex-direction: column !important; align-items: center !important; gap: 24px !important; }
          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </main>
  );
}
