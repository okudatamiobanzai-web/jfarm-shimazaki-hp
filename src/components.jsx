// =====================================================================
// SHARED COMPONENTS — illustrations (placeholder SVGs), nav, footer,
// and small UI primitives.
// =====================================================================

// ── Hand-drawn-feel SVG icons (small kicker icons next to headings) ──
// Kept VERY simple per system prompt: circles, rounded shapes, no fake hand-drawn complexity.

const Icon = ({ kind, size = 24, color = 'currentColor' }) => {
  const s = size, c = color;
  switch (kind) {
    case 'cow': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="14" rx="7" ry="5"/>
        <circle cx="9.5" cy="13.5" r="0.8" fill={c}/>
        <circle cx="14.5" cy="13.5" r="0.8" fill={c}/>
        <path d="M8 9c-.5-2-2-3-3-2.5M16 9c.5-2 2-3 3-2.5"/>
        <path d="M9 18.5v2M15 18.5v2"/>
      </svg>
    );
    case 'milk': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v3l1.5 3v10a2 2 0 01-2 2h-5a2 2 0 01-2-2V9L9 6V3z"/>
        <path d="M9 11h6"/>
      </svg>
    );
    case 'bale': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="7"/>
        <path d="M5.5 11c2 .5 11 .5 13 0M5.5 13c2 .5 11 .5 13 0M5.5 15c2 .5 11 .5 13 0"/>
      </svg>
    );
    case 'sprout': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V11"/>
        <path d="M12 11C9 11 6 9 6 5c4 0 6 3 6 6z"/>
        <path d="M12 11c3 0 6-2 6-6-4 0-6 3-6 6z"/>
      </svg>
    );
    case 'community': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="9" r="2.5"/>
        <circle cx="16" cy="9" r="2.5"/>
        <path d="M3 19c0-3 2-5 5-5s5 2 5 5M11 19c0-3 2-5 5-5s5 2 5 5"/>
      </svg>
    );
    case 'sun': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>
      </svg>
    );
    case 'arrow': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6"/>
      </svg>
    );
    case 'menu': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16"/>
      </svg>
    );
    case 'close': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18"/>
      </svg>
    );
    case 'instagram': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill={c}/>
      </svg>
    );
    case 'heart': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.5-7 10-7 10z"/>
      </svg>
    );
    case 'heartLine': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.5-7 10-7 10z"/>
      </svg>
    );
    case 'comment': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
        <path d="M4 11.5a7.5 7.5 0 1114 3.9L15 20l-3.5-.7A7.5 7.5 0 014 11.5z"/>
      </svg>
    );
    case 'share': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
        <path d="M4 12l17-8-6 18-4-7-7-3z"/>
      </svg>
    );
    case 'bookmark': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
        <path d="M6 4h12v17l-6-4-6 4V4z"/>
      </svg>
    );
    case 'carousel': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinejoin="round">
        <rect x="7" y="7" width="13" height="13" rx="2"/>
        <path d="M4 16V6a2 2 0 012-2h10"/>
      </svg>
    );
    case 'reel': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4"/>
        <path d="M10 8.5l6 3.5-6 3.5v-7z" fill={c}/>
      </svg>
    );
    case 'verified': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="#3897F0" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M12 2l2 2.1 2.9-.4.6 2.9 2.6 1.4-1 2.8 1 2.8-2.6 1.4-.6 2.9-2.9-.4L12 20l-2-2.1-2.9.4-.6-2.9-2.6-1.4 1-2.8-1-2.8 2.6-1.4.6-2.9 2.9.4L12 2z"/>
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    );
    default: return null;
  }
};

// ── Hero illustration ─────────────────────────────────────────────────
// A stylized "farm overview" picture-book illustration. Placeholder-friendly
// but evocative enough to read as the farm landscape until a real watercolor
// drops in. Uses palette colors from CSS variables.

const HeroIllustration = ({ className = '' }) => (
  <svg viewBox="0 0 800 500" className={className} style={{ display: 'block', width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="var(--c-line)" strokeWidth="1" opacity="0.5"/>
      </pattern>
    </defs>
    {/* Sky */}
    <rect width="800" height="500" fill="var(--c-bgCream)"/>
    {/* Distant mountain */}
    <path d="M0 220 Q120 160 240 200 T480 180 T800 210 L800 280 L0 280 Z" fill="var(--c-subSage)" opacity="0.7"/>
    <path d="M0 245 Q160 200 320 230 T640 220 T800 240 L800 290 L0 290 Z" fill="var(--c-primary)" opacity="0.55"/>
    {/* Sun */}
    <circle cx="640" cy="120" r="42" fill="var(--c-ctaSunset)" opacity="0.85"/>
    <circle cx="640" cy="120" r="42" fill="none" stroke="var(--c-ctaSunset)" strokeWidth="1.5" strokeDasharray="2 6" opacity="0.5"/>
    {/* Cloud strokes */}
    <path d="M120 85 q20 -16 40 0 q20 -10 36 4" fill="none" stroke="var(--c-textDark)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <path d="M340 60 q24 -14 48 0 q24 -8 42 4" fill="none" stroke="var(--c-textDark)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    {/* Pasture base */}
    <rect x="0" y="280" width="800" height="220" fill="var(--c-primary)" opacity="0.85"/>
    <rect x="0" y="280" width="800" height="220" fill="url(#hatch)"/>
    {/* Fence line */}
    <g stroke="var(--c-accentBrown)" strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={i} x1={i * 35} y1={300} x2={i * 35} y2={325}/>
      ))}
      <line x1="0" y1="306" x2="800" y2="306"/>
      <line x1="0" y1="320" x2="800" y2="320"/>
    </g>
    {/* Barn */}
    <g transform="translate(440 200)">
      <polygon points="0,40 80,0 160,40 160,120 0,120" fill="var(--c-accentBrown)"/>
      <polygon points="0,40 80,0 160,40 80,55" fill="var(--c-accentBrown)" opacity="0.7"/>
      <rect x="60" y="70" width="40" height="50" fill="var(--c-bgCream)"/>
      <rect x="20" y="55" width="22" height="22" fill="var(--c-cardIvory)"/>
      <rect x="118" y="55" width="22" height="22" fill="var(--c-cardIvory)"/>
      <line x1="80" y1="40" x2="80" y2="120" stroke="var(--c-bgCream)" strokeWidth="1" opacity="0.4"/>
    </g>
    {/* Silo */}
    <g transform="translate(620 220)">
      <rect x="0" y="20" width="38" height="100" fill="var(--c-cardIvory)" stroke="var(--c-accentBrown)" strokeWidth="1.5"/>
      <ellipse cx="19" cy="20" rx="19" ry="8" fill="var(--c-accentBrown)"/>
    </g>
    {/* Cows (simple silhouettes) */}
    <g fill="var(--c-bgCream)" stroke="var(--c-textDark)" strokeWidth="1.2">
      <Cow x={100} y={380}/>
      <Cow x={180} y={400}/>
      <Cow x={280} y={385}/>
      <Cow x={350} y={420} flipped/>
      <Cow x={120} y={440}/>
    </g>
    {/* Hay bales */}
    <g transform="translate(60 360)">
      <ellipse cx="20" cy="20" rx="22" ry="14" fill="var(--c-cardIvory)" stroke="var(--c-accentBrown)" strokeWidth="1.4"/>
      <path d="M2 16 Q20 22 38 16 M2 24 Q20 30 38 24" fill="none" stroke="var(--c-accentBrown)" strokeWidth="0.8" opacity="0.7"/>
    </g>
  </svg>
);

const Cow = ({ x, y, flipped }) => (
  <g transform={`translate(${x} ${y}) ${flipped ? 'scale(-1 1)' : ''}`}>
    <ellipse cx="0" cy="0" rx="22" ry="11"/>
    <ellipse cx="-18" cy="-2" rx="8" ry="7"/>
    <path d="M-22 -7 q-2 -3 -1 -5 M-15 -8 q-2 -4 0 -6" stroke="var(--c-textDark)" strokeWidth="0.8" fill="none"/>
    <line x1="-10" y1="10" x2="-10" y2="16" strokeWidth="1.4"/>
    <line x1="10" y1="10" x2="10" y2="16" strokeWidth="1.4"/>
    <ellipse cx="3" cy="-3" rx="6" ry="3" fill="var(--c-textDark)" opacity="0.35"/>
    <ellipse cx="-8" cy="3" rx="4" ry="2" fill="var(--c-textDark)" opacity="0.35"/>
  </g>
);

// ── Striped placeholder for swappable images ──────────────────────────
const Placeholder = ({ label = 'image', aspect = '4 / 3', tone = 'light' }) => (
  <div style={{
    aspectRatio: aspect,
    width: '100%',
    background: tone === 'dark'
      ? 'repeating-linear-gradient(135deg, var(--c-accentBrown) 0 10px, #6b4528 10px 20px)'
      : 'repeating-linear-gradient(135deg, var(--c-cardIvory) 0 10px, var(--c-line) 10px 20px)',
    color: tone === 'dark' ? 'var(--c-bgCream)' : 'var(--c-textMute)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em',
    textTransform: 'uppercase', textAlign: 'center', padding: 12,
  }}>
    [ {label} ]
  </div>
);

// ── Smart image: try real URL, fall back to placeholder on error ──────
const SmartImage = ({ src, label, aspect = '4 / 3', useRemote = true, fit = 'cover' }) => {
  const [errored, setErrored] = React.useState(false);
  if (!useRemote || errored || !src) {
    return <Placeholder label={label} aspect={aspect}/>;
  }
  return (
    <div style={{ aspectRatio: aspect, width: '100%', overflow: 'hidden', background: 'var(--c-cardIvory)' }}>
      <img src={src} alt={label}
        onError={() => setErrored(true)}
        style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }}/>
    </div>
  );
};

// ── Logo (image-based, official mark) ────────────────────────────────
const Logo = ({ size = 'md' }) => {
  const h = size === 'lg' ? 72 : size === 'sm' ? 40 : 56;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      flexShrink: 0, lineHeight: 1,
    }}>
      <img
        src="assets/logo.png"
        alt="Jファームシマザキ グループ"
        style={{
          height: h, width: 'auto', display: 'block',
          borderRadius: 6,
          imageRendering: 'auto',
        }}
      />
    </div>
  );
};

// ── Side nav (PC) ─────────────────────────────────────────────────────
const SideNav = ({ current, onNavigate, recruitTone }) => {
  const items = [
    { key: 'home',     label: 'トップ',     en: 'Home' },
    { key: 'about',    label: '牧場について', en: 'About' },
    { key: 'business', label: '事業紹介',     en: 'Business' },
    { key: 'brand',    label: 'しまざき壮健牛', en: 'Brand' },
    { key: 'community',label: '地域とともに',  en: 'Community' },
    { key: 'recruit',  label: '採用',         en: 'Recruit', highlight: true },
    { key: 'news',     label: 'お知らせ',     en: 'News' },
    { key: 'contact',  label: 'お問い合わせ',  en: 'Contact' },
  ];
  return (
    <nav style={{
      width: 220, height: '100%',
      background: 'var(--c-bgCream)',
      borderRight: '1px solid var(--c-line)',
      padding: '32px 24px 24px',
      display: 'flex', flexDirection: 'column', gap: 28,
      flexShrink: 0,
    }}>
      <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        <Logo size="lg"/>
      </a>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => (
          <li key={it.key}>
            <a
              onClick={() => !it.disabled && onNavigate(it.key)}
              style={{
                display: 'flex', alignItems: 'baseline', gap: 8,
                padding: '10px 12px', borderRadius: 8,
                cursor: it.disabled ? 'not-allowed' : 'pointer',
                background: current === it.key ? 'var(--c-cardIvory)' : 'transparent',
                color: it.disabled ? 'var(--c-textMute)' : 'var(--c-textDark)',
                opacity: it.disabled ? 0.55 : 1,
                transition: 'background 160ms, color 160ms',
                fontFamily: FONTS.heading,
                fontSize: 14,
                position: 'relative',
              }}
              onMouseEnter={e => { if (!it.disabled && current !== it.key) e.currentTarget.style.background = 'var(--c-cardIvory)'; }}
              onMouseLeave={e => { if (current !== it.key) e.currentTarget.style.background = 'transparent'; }}
            >
              <span>{it.label}</span>
              <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 11, color: 'var(--c-textMute)', marginLeft: 'auto' }}>
                {it.en}
              </span>
              {it.highlight && (
                <span style={{
                  position: 'absolute', right: -4, top: 8,
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--c-ctaSunset)',
                }}/>
              )}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 11, color: 'var(--c-textMute)', fontFamily: FONTS.body }}>
        <a style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--c-textDark)' }}>
          <Icon kind="instagram" size={16}/> @jfarm_shimazaki
        </a>
        <div>TEL {COPY.brand.tel}</div>
      </div>
    </nav>
  );
};

// ── Top nav (PC alternate / mobile collapsed) ────────────────────────
const TopNav = ({ current, onNavigate, mobile, menuOpen, setMenuOpen }) => {
  const items = [
    { key: 'home',     label: 'トップ' },
    { key: 'about',    label: '牧場について' },
    { key: 'business', label: '事業紹介' },
    { key: 'brand',    label: '壮健牛' },
    { key: 'community',label: '地域' },
    { key: 'recruit',  label: '採用',      highlight: true },
    { key: 'news',     label: 'お知らせ' },
    { key: 'contact',  label: 'Contact' },
  ];
  return (
    <header style={{
      height: 64,
      background: 'var(--c-bgCream)',
      borderBottom: '1px solid var(--c-line)',
      display: 'flex', alignItems: 'center',
      padding: mobile ? '0 16px' : '0 32px',
      gap: 16, flexShrink: 0,
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        <Logo size={mobile ? 'sm' : 'md'}/>
      </a>
      {!mobile && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0 auto', display: 'flex', gap: 4 }}>
          {items.map(it => (
            <li key={it.key}>
              <a onClick={() => !it.disabled && onNavigate(it.key)} style={{
                cursor: it.disabled ? 'not-allowed' : 'pointer',
                padding: '8px 14px', borderRadius: 6, fontSize: 13,
                fontFamily: FONTS.heading,
                background: current === it.key ? 'var(--c-cardIvory)' : 'transparent',
                color: it.disabled ? 'var(--c-textMute)' : 'var(--c-textDark)',
                opacity: it.disabled ? 0.55 : 1,
                position: 'relative',
              }}>
                {it.label}
                {it.highlight && <span style={{
                  position: 'absolute', top: 4, right: 4,
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'var(--c-ctaSunset)',
                }}/>}
              </a>
            </li>
          ))}
        </ul>
      )}
      {mobile && (
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{
            marginLeft: 'auto',
            background: 'transparent', border: 'none',
            color: 'var(--c-textDark)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44,
          }}>
          <Icon kind={menuOpen ? 'close' : 'menu'} size={22}/>
        </button>
      )}
    </header>
  );
};

// ── Mobile sheet menu ────────────────────────────────────────────────
const MobileMenu = ({ current, onNavigate, open, onClose }) => {
  const items = [
    { key: 'home',     label: 'トップ', en: 'Home' },
    { key: 'about',    label: '牧場について', en: 'About' },
    { key: 'business', label: '事業紹介',     en: 'Business' },
    { key: 'brand',    label: 'しまざき壮健牛', en: 'Brand' },
    { key: 'community',label: '地域とともに',  en: 'Community' },
    { key: 'recruit',  label: '採用',         en: 'Recruit', highlight: true },
    { key: 'news',     label: 'お知らせ',     en: 'News' },
    { key: 'contact',  label: 'お問い合わせ',  en: 'Contact' },
  ];
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', inset: '64px 0 0', background: 'var(--c-bgCream)',
      zIndex: 60, padding: '24px 20px',
      animation: 'jf-slideUp 240ms ease-out',
    }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(it => (
          <li key={it.key}>
            <a onClick={() => { if (!it.disabled) { onNavigate(it.key); onClose(); } }}
              style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                padding: '14px 12px', borderBottom: '1px solid var(--c-line)',
                color: it.disabled ? 'var(--c-textMute)' : 'var(--c-textDark)',
                opacity: it.disabled ? 0.5 : 1,
                fontFamily: FONTS.heading, fontSize: 16,
                cursor: it.disabled ? 'not-allowed' : 'pointer',
              }}>
              <span>{it.label}</span>
              <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 12, color: 'var(--c-textMute)' }}>
                {it.en}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 32, fontSize: 12, color: 'var(--c-textMute)', fontFamily: FONTS.body, lineHeight: 1.6 }}>
        <div>{COPY.brand.address}</div>
        <div>TEL {COPY.brand.tel}</div>
      </div>
    </div>
  );
};

// ── Footer ──────────────────────────────────────────────────────────
const Footer = ({ onNavigate }) => (
  <footer style={{
    background: 'var(--c-textDark)',
    color: 'var(--c-bgCream)',
    padding: '48px 32px 32px',
    fontFamily: FONTS.body,
  }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 32, marginBottom: 32 }}>
      <div>
        <img
          src="assets/logo.png"
          alt="Jファームシマザキ グループ"
          style={{ height: 72, width: 'auto', display: 'block', borderRadius: 6, marginBottom: 14 }}
        />
        <div style={{ fontFamily: FONTS.heading, fontSize: 15, marginBottom: 10, opacity: 0.9 }}>
          有限会社ジェイファームシマザキ
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.8, opacity: 0.85 }}>
          {COPY.brand.address}<br/>
          TEL {COPY.brand.tel}　FAX {COPY.brand.fax}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.1em', opacity: 0.6, marginBottom: 12 }}>SITE MAP</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, lineHeight: 2 }}>
          {[['home','トップ'],['about','牧場について'],['recruit','採用']].map(([k, l]) => (
            <li key={k}><a onClick={() => onNavigate(k)} style={{ color: 'var(--c-bgCream)', cursor: 'pointer' }}>{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.1em', opacity: 0.6, marginBottom: 12 }}>FOLLOW</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <Icon kind="instagram" size={18}/> @jfarm_shimazaki
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(251,248,241,0.12)', paddingTop: 16, fontSize: 11, opacity: 0.5, display: 'flex', justifyContent: 'space-between' }}>
      <span>© {new Date().getFullYear()} J‑Farm Shimazaki, Inc.</span>
      <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic' }}>Betsukai, Hokkaido</span>
    </div>
  </footer>
);

// ── Section heading with kicker icon ────────────────────────────────
const SectionHead = ({ kicker, en, title, icon, align = 'left' }) => (
  <div style={{ textAlign: align, marginBottom: 32 }}>
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      color: 'var(--c-primary)', marginBottom: 8,
    }}>
      {icon && <Icon kind={icon} size={20}/>}
      <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, letterSpacing: '0.08em' }}>{en}</span>
    </div>
    <h2 style={{
      fontFamily: FONTS.heading, fontWeight: 500,
      fontSize: 'clamp(22px, 3vw, 32px)',
      color: 'var(--c-textDark)', margin: 0,
      letterSpacing: '0.02em',
    }}>{title}</h2>
    {kicker && <div style={{ fontSize: 13, color: 'var(--c-textMute)', marginTop: 8, fontFamily: FONTS.body }}>{kicker}</div>}
  </div>
);

// ── Count-up number ─────────────────────────────────────────────────
const CountUp = ({ to, suffix = '', dur = 1400 }) => {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4, root: el.closest('[data-scroll-root]') || null });
    io.observe(el);
    return () => io.disconnect();
  }, [to, dur]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
};

// ── Reveal-on-scroll wrapper ────────────────────────────────────────
const Reveal = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { setShown(true); io.disconnect(); }
      });
    }, { threshold: 0.15, root: el.closest('[data-scroll-root]') || null });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
    }}>{children}</div>
  );
};

// ── Button ──────────────────────────────────────────────────────────
const Button = ({ children, onClick, variant = 'primary', size = 'md', as = 'button' }) => {
  const [hover, setHover] = React.useState(false);
  const styles = {
    primary: {
      bg: hover ? 'var(--c-textDark)' : 'var(--c-ctaSunset)',
      fg: 'var(--c-bgCream)',
      border: 'transparent',
    },
    secondary: {
      bg: hover ? 'var(--c-cardIvory)' : 'transparent',
      fg: 'var(--c-textDark)',
      border: 'var(--c-textDark)',
    },
    ghost: {
      bg: hover ? 'var(--c-cardIvory)' : 'transparent',
      fg: 'var(--c-textDark)',
      border: 'transparent',
    },
  }[variant];
  const Tag = as;
  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: size === 'lg' ? '16px 28px' : '12px 22px',
        background: styles.bg, color: styles.fg,
        border: `1px solid ${styles.border}`,
        borderRadius: 999,
        fontFamily: FONTS.heading, fontSize: size === 'lg' ? 16 : 14,
        cursor: 'pointer',
        transition: 'background 200ms, color 200ms, transform 200ms',
        transform: hover ? 'translateY(-1px)' : 'none',
        textDecoration: 'none',
      }}
    >
      {children}
    </Tag>
  );
};

Object.assign(window, {
  Icon, HeroIllustration, Cow, Placeholder, SmartImage, Logo,
  SideNav, TopNav, MobileMenu, Footer, SectionHead, CountUp, Reveal, Button,
});
