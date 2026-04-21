// =====================================================================
// APP — split-view shell (PC + Mobile frames), router, Tweaks panel
// =====================================================================

const { useState, useEffect, useRef, useMemo } = React;

// ── Tweakable defaults (persisted via host EDITMODE markers) ──────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "pasture",
  "navStyle": "side",
  "heroVariant": "illust",
  "recruitTone": "soft",
  "useRemoteImages": true,
  "view": "split"
}/*EDITMODE-END*/;

// ── Page frame: renders a single device viewport with nav + content ───
const PageFrame = ({ kind, page, onNavigate, tweaks }) => {
  const isMobile = kind === 'mobile';
  const useSide = !isMobile && tweaks.navStyle === 'side';
  const scrollRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Reset scroll on page change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setMenuOpen(false);
  }, [page, kind]);

  const PageEl = page === 'about'     ? AboutPage
              : page === 'recruit'    ? RecruitPage
              : page === 'business'   ? BusinessPage
              : page === 'brand'      ? BrandPage
              : page === 'community'  ? CommunityPage
              : page === 'news'       ? NewsPage
              : page === 'contact'    ? ContactPage
              : HomePage;

  return (
    <div style={{
      display: 'flex',
      width: '100%', height: '100%',
      background: 'var(--c-bgCream)',
      flexDirection: useSide ? 'row' : 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {useSide
        ? <SideNav current={page} onNavigate={onNavigate}/>
        : <TopNav current={page} onNavigate={onNavigate} mobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      }
      {isMobile && <MobileMenu current={page} onNavigate={onNavigate} open={menuOpen} onClose={() => setMenuOpen(false)}/>}
      <main
        ref={scrollRef}
        data-scroll-root
        {...(isMobile ? { 'data-narrow': '' } : {})}
        style={{ flex: 1, minWidth: 0, overflow: 'auto', overflowX: 'hidden', position: 'relative' }}
      >
        <PageEl
          onNavigate={onNavigate}
          useRemoteImages={tweaks.useRemoteImages}
          heroVariant={tweaks.heroVariant}
          recruitTone={tweaks.recruitTone}
        />
        <Footer onNavigate={onNavigate}/>
      </main>
    </div>
  );
};

// ── Page picker (small dropdown for per-frame switching) ──────────────
const PagePicker = ({ value, onChange, pages }) => (
  <select value={value} onChange={e => onChange(e.target.value)} style={{
    background: '#FBF8F1', border: '1px solid #d8d2c2',
    borderRadius: 6, padding: '3px 8px', fontSize: 11,
    fontFamily: '"Zen Maru Gothic", system-ui, sans-serif',
    color: '#3E2F1E', cursor: 'pointer', outline: 'none',
  }}>
    {pages.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
  </select>
);

// ── Device viewport wrappers ──────────────────────────────────────────
const PCFrame = ({ children, label, picker }) => {
  const outerRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    if (!outerRef.current) return;
    const DESIGN_W = 1280;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        const w = e.contentRect.width;
        setScale(Math.min(1, w / DESIGN_W));
      }
    });
    ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, []);
  return (
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, height: '100%', minHeight: 0 }}>
    <FrameLabel label={label} sub="1280 × auto" right={picker}/>
    <div ref={outerRef} style={{
      flex: 1, minHeight: 0,
      borderRadius: 14, overflow: 'hidden',
      border: '1px solid #d8d2c2',
      boxShadow: '0 24px 48px -28px rgba(62,47,30,0.35)',
      background: '#fff',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 32, background: '#EFE6D2', borderBottom: '1px solid #d8d2c2',
        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6, flexShrink: 0,
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#D88B5A' }}/>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E0C97A' }}/>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#8FA37A' }}/>
        <div style={{
          marginLeft: 16, flex: 1, maxWidth: 360,
          height: 18, background: 'rgba(255,255,255,0.7)', borderRadius: 999,
          display: 'flex', alignItems: 'center', padding: '0 10px',
          fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 10, color: '#7A6A55',
        }}>jfarm-shimazaki.jp</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          width: 1280, height: `${100/scale}%`,
          transform: `scale(${scale})`, transformOrigin: 'top left',
        }}>{children}</div>
      </div>
    </div>
  </div>
  );
};

const MobileFrame = ({ children, label, picker }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', minWidth: 0, minHeight: 0 }}>
    <FrameLabel label={label} sub="390 × 844" right={picker}/>
    <div style={{
      width: 360, maxWidth: '100%', flex: 1, minHeight: 0,
      borderRadius: 38, overflow: 'hidden',
      border: '8px solid #2a1f12',
      boxShadow: '0 24px 48px -28px rgba(62,47,30,0.45)',
      background: '#fff',
      position: 'relative',
      paddingTop: 40,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
        width: 100, height: 24, background: '#2a1f12', borderRadius: 999,
        zIndex: 100,
      }}/>
      <div style={{ width: '100%', flex: 1, minHeight: 0, overflow: 'auto' }}>{children}</div>
    </div>
  </div>
);

const FrameLabel = ({ label, sub, right }) => (
  <div style={{
    display: 'flex', alignItems: 'baseline', gap: 8,
    padding: '0 4px 12px', color: '#7A6A55',
    fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
    fontSize: 13, letterSpacing: '0.06em',
  }}>
    <span style={{ color: '#3E2F1E' }}>{label}</span>
    <span style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontStyle: 'normal', fontSize: 10 }}>{sub}</span>
    {right && <span style={{ marginLeft: 'auto' }}>{right}</span>}
  </div>
);

// ── Tweaks panel ──────────────────────────────────────────────────────
const TweaksPanel = ({ tweaks, setTweak, visible, onClose }) => {
  if (!visible) return null;
  const fieldRow = { display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12, alignItems: 'center', marginBottom: 14 };
  const labelStyle = { fontFamily: '"Zen Maru Gothic", system-ui, sans-serif', fontSize: 12, color: '#3E2F1E' };

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, zIndex: 200,
      width: 320, background: '#FBF8F1', border: '1px solid #d8d2c2',
      borderRadius: 14, boxShadow: '0 24px 60px -20px rgba(62,47,30,0.4)',
      padding: 18, fontFamily: '"Noto Sans JP", system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: 12, color: '#7A6A55', letterSpacing: '0.1em' }}>Tweaks</div>
          <div style={{ fontFamily: '"Zen Maru Gothic", system-ui, sans-serif', fontSize: 14, color: '#3E2F1E' }}>デザイン切替</div>
        </div>
        <button onClick={onClose} style={{
          background: 'transparent', border: 'none', cursor: 'pointer', color: '#7A6A55',
          width: 28, height: 28, borderRadius: 6,
        }}>
          <Icon kind="close" size={16}/>
        </button>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>表示</span>
        <ToggleGroup value={tweaks.view} onChange={v => setTweak('view', v)} options={[
          { v: 'split', l: '両方' }, { v: 'pc', l: 'PC' }, { v: 'mobile', l: 'モバイル' },
        ]}/>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>カラー</span>
        <ToggleGroup value={tweaks.palette} onChange={v => setTweak('palette', v)} options={[
          { v: 'pasture', l: '牧草' }, { v: 'sunset', l: '夕焼け' }, { v: 'monotone', l: '生成り' },
        ]}/>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>ナビ</span>
        <ToggleGroup value={tweaks.navStyle} onChange={v => setTweak('navStyle', v)} options={[
          { v: 'side', l: '左サイド' }, { v: 'top', l: '上部横' },
        ]}/>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>ヒーロー</span>
        <ToggleGroup value={tweaks.heroVariant} onChange={v => setTweak('heroVariant', v)} options={[
          { v: 'illust', l: '写真 全面' }, { v: 'copy', l: 'コピー重視' },
        ]}/>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>採用トーン</span>
        <ToggleGroup value={tweaks.recruitTone} onChange={v => setTweak('recruitTone', v)} options={[
          { v: 'soft', l: '柔らかめ' }, { v: 'bold', l: '力強め' },
        ]}/>
      </div>

      <div style={fieldRow}>
        <span style={labelStyle}>画像</span>
        <ToggleGroup value={tweaks.useRemoteImages ? 'on' : 'off'} onChange={v => setTweak('useRemoteImages', v === 'on')} options={[
          { v: 'on', l: '実写を使用' }, { v: 'off', l: 'プレースホルダ' },
        ]}/>
      </div>

      <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #E5DCC6', fontSize: 10, color: '#7A6A55', lineHeight: 1.6 }}>
        <strong style={{ color: '#3E2F1E' }}>差し替え:</strong> 配色・コピー・画像URLは <code style={{ fontFamily: '"JetBrains Mono", monospace' }}>src/config.jsx</code> で一括変更できます。
      </div>
    </div>
  );
};

const ToggleGroup = ({ value, onChange, options }) => (
  <div style={{ display: 'inline-flex', background: '#EFE6D2', borderRadius: 8, padding: 2, gap: 2, fontFamily: '"Zen Maru Gothic", system-ui, sans-serif' }}>
    {options.map(o => (
      <button key={o.v} onClick={() => onChange(o.v)} style={{
        padding: '6px 10px', borderRadius: 6, fontSize: 11,
        background: value === o.v ? '#FBF8F1' : 'transparent',
        color: value === o.v ? '#3E2F1E' : '#7A6A55',
        border: 'none', cursor: 'pointer',
        boxShadow: value === o.v ? '0 1px 2px rgba(62,47,30,0.1)' : 'none',
        transition: 'background 160ms',
      }}>{o.l}</button>
    ))}
  </div>
);

// ── App root ──────────────────────────────────────────────────────────
const App = () => {
  // page persistence
  const [page, setPage] = useState(() => localStorage.getItem('jf:page') || 'home');
  useEffect(() => { localStorage.setItem('jf:page', page); }, [page]);

  // mobile-frame independent page (null = sync with PC)
  const [mobilePage, setMobilePage] = useState(() => localStorage.getItem('jf:mobilePage') || '');
  useEffect(() => { localStorage.setItem('jf:mobilePage', mobilePage || ''); }, [mobilePage]);
  const effectiveMobilePage = mobilePage || page;

  // tweaks
  const [tweaks, setTweaks] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('jf:tweaks') || 'null');
      return stored ? { ...TWEAK_DEFAULTS, ...stored } : TWEAK_DEFAULTS;
    } catch { return TWEAK_DEFAULTS; }
  });
  useEffect(() => { localStorage.setItem('jf:tweaks', JSON.stringify(tweaks)); }, [tweaks]);

  const setTweak = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      // Notify host so it can persist to disk
      try {
        window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
      } catch {}
      return next;
    });
  };

  // Tweaks panel visibility (host toggle)
  const [tweaksVisible, setTweaksVisible] = useState(false);
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent?.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Apply palette as CSS variables on the page
  const palette = PALETTES[tweaks.palette] || PALETTES.pasture;
  const cssVars = useMemo(() => ({
    '--c-bgCream':     palette.bgCream,
    '--c-primary':     palette.primary,
    '--c-subSage':     palette.subSage,
    '--c-cardIvory':   palette.cardIvory,
    '--c-accentBrown': palette.accentBrown,
    '--c-ctaSunset':   palette.ctaSunset,
    '--c-textDark':    palette.textDark,
    '--c-textMute':    palette.textMute,
    '--c-line':        palette.line,
  }), [tweaks.palette]);

  const showPC = tweaks.view === 'pc' || tweaks.view === 'split';
  const showMobile = tweaks.view === 'mobile' || tweaks.view === 'split';

  const labelMap = { home: 'トップ', about: '牧場について', business: '事業紹介', brand: 'しまざき壮健牛', community: '地域とともに', recruit: '採用', news: 'お知らせ', contact: 'お問い合わせ' };
  const pageLabel = labelMap[page] || page;
  const mobileLabel = labelMap[effectiveMobilePage] || effectiveMobilePage;
  const pageList = [['home','トップ'],['about','牧場について'],['business','事業紹介'],['brand','しまざき壮健牛'],['community','地域とともに'],['recruit','採用'],['news','お知らせ'],['contact','お問い合わせ']];

  return (
    <div style={{
      ...cssVars,
      width: '100%', height: '100vh',
      display: 'flex', flexDirection: 'column',
      background: '#1c160d',
      fontFamily: '"Noto Sans JP", system-ui, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Top bar */}
      <div style={{
        flexShrink: 0,
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 24,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        color: '#FBF8F1',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: 16 }}>J‑Farm Shimazaki</span>
          <span style={{ fontSize: 11, opacity: 0.5, fontFamily: '"JetBrains Mono", monospace' }}>HP renewal · phase 1 mock</span>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 2, minWidth: 0, overflowX: 'auto', flexWrap: 'nowrap' }}>
          {[['home','トップ'],['about','About'],['business','事業'],['brand','壮健牛'],['community','地域'],['recruit','採用'],['news','News'],['contact','Contact']].map(([k, l]) => (
            <button key={k} onClick={() => setPage(k)}
              style={{
                background: page === k ? 'rgba(216,139,90,0.18)' : 'transparent',
                color: page === k ? '#FBF8F1' : 'rgba(251,248,241,0.55)',
                border: '1px solid', borderColor: page === k ? 'rgba(216,139,90,0.4)' : 'transparent',
                padding: '6px 10px', borderRadius: 999, fontSize: 12,
                cursor: 'pointer', fontFamily: '"Zen Maru Gothic", system-ui, sans-serif',
                transition: 'background 200ms, color 200ms',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>{l}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: 'rgba(251,248,241,0.55)' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: 2, gap: 2 }}>
            {[['split','両方'],['pc','PC'],['mobile','SP']].map(([v, l]) => (
              <button key={v} onClick={() => setTweak('view', v)} style={{
                padding: '5px 12px', borderRadius: 999, fontSize: 11,
                background: tweaks.view === v ? 'rgba(216,139,90,0.35)' : 'transparent',
                color: tweaks.view === v ? '#FBF8F1' : 'rgba(251,248,241,0.6)',
                border: 'none', cursor: 'pointer',
                fontFamily: '"Zen Maru Gothic", system-ui, sans-serif',
                transition: 'background 160ms',
              }}>{l}</button>
            ))}
          </div>
          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }}/>
          <button onClick={() => setTweaksVisible(v => !v)} style={{
            background: tweaksVisible ? 'rgba(216,139,90,0.18)' : 'transparent',
            color: '#FBF8F1', border: '1px solid rgba(255,255,255,0.15)',
            padding: '6px 12px', borderRadius: 999, fontSize: 11, cursor: 'pointer',
            fontFamily: '"Zen Maru Gothic", system-ui, sans-serif',
          }}>Tweaks</button>
        </div>
      </div>

      {/* Frames area */}
      <div style={{
        flex: 1, minHeight: 0, padding: 24,
        display: 'grid', gap: 24,
        gridTemplateColumns: showPC && showMobile ? 'minmax(0, 1fr) 360px' : '1fr',
        background: '#1c160d',
      }}>
        {showPC && (
          <PCFrame label={`PC · ${pageLabel}`} picker={<PagePicker value={page} onChange={setPage} pages={pageList}/>}>
            <PageFrame kind="pc" page={page} onNavigate={setPage} tweaks={tweaks}/>
          </PCFrame>
        )}
        {showMobile && (
          <MobileFrame label={`Mobile · ${mobileLabel}`} picker={<PagePicker value={effectiveMobilePage} onChange={setMobilePage} pages={pageList}/>}>
            <PageFrame kind="mobile" page={effectiveMobilePage} onNavigate={setMobilePage} tweaks={{ ...tweaks, navStyle: 'top' }}/>
          </MobileFrame>
        )}
      </div>

      <TweaksPanel tweaks={tweaks} setTweak={setTweak} visible={tweaksVisible} onClose={() => setTweaksVisible(false)}/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
