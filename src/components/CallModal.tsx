import { Phone, X, UserCheck } from 'lucide-react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  if (!isOpen) return null;

  const contacts = [
    {
      name: 'Niklas Lundmark',
      role: 'Ägare & Grundare',
      phone: '070 588 40 32',
      tel: 'tel:0705884032',
    },
    {
      name: 'Kevin Lundmark',
      role: 'Ägare & Grundare',
      phone: '070 588 40 42',
      tel: 'tel:0705884042',
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'callFadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          animation: 'callScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Stäng"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748b',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e2e8f0';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.color = '#64748b';
          }}
        >
          <X size={19} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: 'var(--color-primary)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              boxShadow: '0 8px 24px rgba(255, 121, 0, 0.35)',
            }}
          >
            <Phone size={26} color="#ffffff" />
          </div>
          <h2
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 6px 0',
              fontFamily: 'var(--font-family)',
            }}
          >
            Ring Finnträsk Entreprenad
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Välkommen att ringa Niklas eller Kevin direkt för personlig service, rådgivning och offert.
          </p>
        </div>

        {/* Contacts List — Both on the exact same level */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.tel}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 18px',
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 121, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <UserCheck size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0 0 2px 0',
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    {c.name}
                  </h3>
                  <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
                    {c.phone}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 15px',
                  background: 'var(--color-primary)',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.04em',
                }}
              >
                <Phone size={13} /> RING
              </div>
            </a>
          ))}
        </div>

        <style>{`
          @keyframes callFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes callScaleUp {
            from { opacity: 0; transform: scale(0.94); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}
