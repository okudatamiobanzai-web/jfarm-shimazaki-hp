// =====================================================================
// PAGES 2 — Business / Brand / Community / News / Contact
// =====================================================================

// ── Reusable: page header banner ─────────────────────────────────────
const PageHeader = ({ en, ja, lede, idx, total }) => (
  <section style={{ padding: 'clamp(48px, 8vw, 96px) 32px 32px' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
      <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 14, letterSpacing: '0.12em' }}>{en}</span>
      <span style={{ flex: 1, height: 1, background: 'var(--c-line)' }}/>
      {idx && <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)' }}>{idx} / {total}</span>}
    </div>
    <h1 style={{
      fontFamily: FONTS.display, fontWeight: 500,
      fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.3,
      color: 'var(--c-textDark)', margin: 0, letterSpacing: '0.02em',
    }}>
      {ja}
    </h1>
    {lede && (
      <p style={{
        fontFamily: FONTS.heading, fontSize: 'clamp(14px, 1.4vw, 17px)',
        color: 'var(--c-textMute)', maxWidth: 620, marginTop: 16, lineHeight: 1.9, whiteSpace: 'pre-line',
      }}>
        {lede}
      </p>
    )}
  </section>
);

// ── BUSINESS ─────────────────────────────────────────────────────────
const BusinessPage = ({ useRemoteImages }) => (
  <div style={{ background: 'var(--c-bgCream)' }}>
    <PageHeader en="Business" ja="事業紹介" lede={COPY.business.intro} idx="02" total="08"/>

    {/* THREE FARM SITES */}
    <section style={{ padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1100, marginBottom: 32 }}>
        <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-primary)', letterSpacing: '0.1em', marginBottom: 10 }}>
          Three Sites
        </div>
        <h2 style={{ fontFamily: FONTS.display, fontSize: 'clamp(22px, 3vw, 32px)', margin: 0, color: 'var(--c-textDark)', fontWeight: 500 }}>
          3つの牧場で、ライフステージごとに。
        </h2>
        <p style={{ fontFamily: FONTS.heading, fontSize: 14, color: 'var(--c-textMute)', marginTop: 10, maxWidth: 640, lineHeight: 1.9 }}>
          本社牧場・第2牧場・第3牧場（共栄牧場）で、牛のライフステージごとに専門施設を整備。作業の分業化・効率化と、牛群管理の精度向上につなげています。
        </p>
      </div>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', maxWidth: 1100 }}>
        {COPY.business.sites.map((s, i) => (
          <Reveal key={s.key} delay={i * 80}>
            <div style={{
              background: 'var(--c-cardIvory)', border: '1px solid var(--c-line)',
              borderRadius: 14, padding: '22px 20px',
              display: 'flex', flexDirection: 'column', gap: 10,
              height: '100%',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 16, right: 18,
                fontFamily: FONTS.latin, fontStyle: 'italic',
                fontSize: 46, color: 'var(--c-primary)',
                opacity: 0.16, letterSpacing: '-0.04em',
              }}>0{i+1}</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.12em', color: 'var(--c-accentBrown)' }}>
                SITE 0{i+1}
              </div>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 19, margin: '4px 0 6px', color: 'var(--c-textDark)' }}>
                {s.name}
              </h3>
              <div style={{ fontFamily: FONTS.display, fontSize: 14, color: 'var(--c-primary)', marginBottom: 4 }}>
                — {s.role}
              </div>
              <div style={{ fontSize: 12, color: 'var(--c-textMute)', lineHeight: 1.8, fontFamily: FONTS.body }}>
                {s.note}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {COPY.business.divisions.map((d, i) => (
      <section key={d.key} style={{
        padding: 'clamp(48px, 6vw, 80px) 32px',
        background: i % 2 === 1 ? 'var(--c-cardIvory)' : 'var(--c-bgCream)',
        borderTop: '1px solid var(--c-line)',
      }}>
        <Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
            gap: 'clamp(20px, 4vw, 48px)',
            alignItems: 'center', maxWidth: 1100,
            direction: i % 2 === 1 ? 'rtl' : 'ltr',
          }}>
            <div style={{ direction: 'ltr' }}>
              <SmartImage src={IMAGES[d.img]} label={d.title} aspect="4 / 5" useRemote={useRemoteImages}/>
            </div>
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 22, color: 'var(--c-primary)' }}>{d.kicker}</span>
                <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-textMute)', letterSpacing: '0.08em' }}>{d.en}</span>
              </div>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(22px, 2.8vw, 30px)', margin: '0 0 8px', color: 'var(--c-textDark)' }}>
                {d.title}
              </h2>
              <div style={{ fontFamily: FONTS.display, fontSize: 16, color: 'var(--c-primary)', marginBottom: 16 }}>
                — {d.lede}
              </div>
              <p style={{ fontSize: 14, lineHeight: 2, color: 'var(--c-textDark)', margin: '0 0 24px', fontFamily: FONTS.body, textWrap: 'pretty', opacity: 0.9 }}>
                {d.body}
              </p>
              <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
                {d.stats.map(([k, v], j) => (
                  <div key={j} style={{ borderTop: '1px solid var(--c-line)', paddingTop: 10 }}>
                    <dt style={{ fontFamily: FONTS.body, fontSize: 11, color: 'var(--c-textMute)', marginBottom: 4 }}>{k}</dt>
                    <dd style={{ margin: 0, fontFamily: FONTS.heading, fontSize: 16, color: 'var(--c-textDark)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </section>
    ))}
  </div>
);

// ── BRAND (souken-gyu) ───────────────────────────────────────────────
const BrandPage = ({ useRemoteImages, onNavigate }) => {
  const b = COPY.brandPage;
  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 'min(70vh, 600px)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.7 }}>
          <SmartImage src={IMAGES.banner_soukengyu} label="souken hero" aspect="auto" useRemote={useRemoteImages}/>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(62,47,30,0.1) 0%, rgba(62,47,30,0.7) 100%)' }}/>
        <div style={{ position: 'relative', padding: 'clamp(40px, 8vw, 80px) 32px', color: 'var(--c-bgCream)' }}>
          <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 14, letterSpacing: '0.16em', opacity: 0.85, marginBottom: 12 }}>
            {b.heroEn}
          </div>
          <h1 style={{ fontFamily: FONTS.display, fontWeight: 500, fontSize: 'clamp(40px, 7vw, 76px)', lineHeight: 1.2, margin: '0 0 16px', letterSpacing: '0.04em' }}>
            {b.hero}
          </h1>
          <p style={{ fontFamily: FONTS.heading, fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 2, margin: 0, opacity: 0.95, whiteSpace: 'pre-line', maxWidth: 580 }}>
            {b.lede}
          </p>
        </div>
      </section>

      {/* Origin */}
      <section style={{ padding: '80px 32px' }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-primary)', letterSpacing: '0.1em', marginBottom: 8 }}>Origin of the name</div>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.4vw, 26px)', margin: '0 0 20px', color: 'var(--c-textDark)' }}>{b.origin.label}</h2>
            <p style={{ fontFamily: FONTS.display, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 2, color: 'var(--c-textDark)', margin: 0, textWrap: 'pretty' }}>
              {b.origin.body}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section style={{ padding: '64px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)', borderBottom: '1px solid var(--c-line)' }}>
        <SectionHead en="What makes it special" title="壮健牛の特徴" icon="bale" align="center"/>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: 880, margin: '0 auto' }}>
          {b.features.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ textAlign: 'center', padding: '20px 12px', borderLeft: i ? '1px solid var(--c-line)' : 'none' }}>
                <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4, color: 'var(--c-primary)' }}>
                  <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 'clamp(40px, 5vw, 56px)', lineHeight: 1, fontWeight: 500 }}>
                    <CountUp to={parseInt(f.num, 10)}/>
                  </span>
                  <span style={{ fontFamily: FONTS.heading, fontSize: 14 }}>{f.unit}</span>
                </div>
                <div style={{ fontFamily: FONTS.heading, fontSize: 14, marginTop: 10, color: 'var(--c-textDark)' }}>{f.label}</div>
                <div style={{ fontSize: 11, color: 'var(--c-textMute)', marginTop: 4, lineHeight: 1.6 }}>{f.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Where to buy" title="お買い求めいただける場所" icon="milk"/>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 1000 }}>
          {b.channels.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <a style={{
                display: 'block', padding: '28px',
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 16, cursor: 'pointer',
                transition: 'border-color 200ms, transform 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--c-line)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 20, margin: 0, color: 'var(--c-textDark)' }}>{c.name}</h3>
                  <Icon kind="arrow" size={16} color="var(--c-primary)"/>
                </div>
                <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-primary)', marginBottom: 12 }}>{c.desc}</div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty' }}>{c.meta}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

// ── COMMUNITY ────────────────────────────────────────────────────────
const CommunityPage = ({ useRemoteImages }) => {
  const c = COPY.communityPage;
  return (
  <div style={{ background: 'var(--c-bgCream)' }}>
    <PageHeader en="Community" ja="地域とともに" lede={c.intro} idx="05" total="08"/>

    {/* HERO STATS */}
    <section style={{ padding: '0 32px 64px' }}>
      <div style={{
        maxWidth: 1100,
        display: 'grid', gap: 0,
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        border: '1px solid var(--c-line)', borderRadius: 18, overflow: 'hidden',
        background: 'var(--c-cardIvory)',
      }}>
        {c.heroStat.map((n, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              padding: '28px 24px', textAlign: 'center',
              borderRight: '1px solid var(--c-line)',
              height: '100%',
            }}>
              <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 'clamp(32px, 4.4vw, 48px)', color: 'var(--c-primary)', lineHeight: 1, fontWeight: 500 }}>
                <CountUp to={n.value} suffix={n.suffix}/>
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: 13, marginTop: 10, color: 'var(--c-textDark)' }}>{n.label}</div>
              <div style={{ fontSize: 11, color: 'var(--c-textMute)', marginTop: 4, fontFamily: FONTS.body }}>{n.note}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PROGRAM CARDS — 4 activities with photo + meta */}
    <section style={{ padding: '32px 32px 80px' }}>
      <SectionHead en="Four Programs" title="4つの取り組み" kicker="酪農を、地域の営みへ広げていく。" icon="sprout"/>
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 1100 }}>
        {c.programs.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <article style={{
              background: 'var(--c-bgCream)', borderRadius: 18,
              border: '1px solid var(--c-line)',
              overflow: 'hidden', height: '100%',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 240ms, box-shadow 240ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -20px rgba(62,47,30,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'relative' }}>
                <SmartImage src={IMAGES[p.img]} label={p.title} aspect="16 / 10" useRemote={useRemoteImages}/>
                <span style={{
                  position: 'absolute', top: 14, right: 14,
                  background: 'var(--c-bgCream)', color: 'var(--c-textDark)',
                  padding: '4px 10px', borderRadius: 999, fontSize: 10,
                  fontFamily: FONTS.heading, letterSpacing: '0.06em',
                  border: '1px solid var(--c-line)',
                }}>{p.tag}</span>
              </div>
              <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 12, color: 'var(--c-primary)', letterSpacing: '0.08em', marginBottom: 6 }}>
                  {p.kicker}
                </div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(17px, 1.8vw, 20px)', margin: '0 0 14px', color: 'var(--c-textDark)', lineHeight: 1.5 }}>
                  {p.title}
                </h3>
                <p style={{ margin: '0 0 18px', fontSize: 13, lineHeight: 1.9, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty', flex: 1 }}>
                  {p.body}
                </p>
                <div style={{
                  display: 'flex', gap: 14, paddingTop: 12,
                  borderTop: '1px solid var(--c-line)',
                  fontSize: 11, color: 'var(--c-textMute)', fontFamily: FONTS.body,
                }}>
                  <span>開始 <strong style={{ color: 'var(--c-textDark)', fontFamily: FONTS.heading, marginLeft: 4 }}>{p.since}</strong></span>
                  <span style={{ opacity: 0.4 }}>／</span>
                  <span>規模 <strong style={{ color: 'var(--c-textDark)', fontFamily: FONTS.heading, marginLeft: 4 }}>{p.scale}</strong></span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ANNUAL CALENDAR */}
    <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)', borderBottom: '1px solid var(--c-line)' }}>
      <SectionHead en="Annual Calendar" title="一年の地域活動" kicker="季節ごとのイベント・授業・受け入れ。" icon="sun"/>
      <ol style={{
        listStyle: 'none', padding: 0, margin: 0, maxWidth: 1100,
        display: 'grid', gap: 10,
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      }}>
        {c.calendar.map((e, i) => (
          <Reveal key={i} delay={i * 50}>
            <li style={{
              background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
              borderRadius: 12, padding: '14px 18px',
              display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 12, alignItems: 'center',
              height: '100%',
            }}>
              <div style={{
                fontFamily: FONTS.latin, fontStyle: 'italic',
                fontSize: 22, color: 'var(--c-primary)', lineHeight: 1,
                fontWeight: 500,
              }}>
                {e.month}
              </div>
              <div style={{ fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)', lineHeight: 1.5 }}>
                {e.title}
              </div>
              <span style={{
                background: 'var(--c-cardIvory)', color: 'var(--c-textMute)',
                fontFamily: FONTS.body, fontSize: 10,
                padding: '3px 9px', borderRadius: 999,
                border: '1px solid var(--c-line)',
              }}>{e.kind}</span>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>

    {/* CHIENOWA FEATURE BANNER */}
    <section style={{ padding: '80px 32px' }}>
      <div style={{
        maxWidth: 1100,
        display: 'grid', gap: 'clamp(24px, 4vw, 48px)',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
        alignItems: 'center',
      }}>
        <Reveal>
          <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--c-line)', background: 'var(--c-cardIvory)' }}>
            <SmartImage src={IMAGES.banner_chienowa} label="ちえのわ" aspect="4 / 3" useRemote={useRemoteImages} fit="contain"/>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.1em', marginBottom: 10 }}>Featured Project</div>
            <h3 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(22px, 2.6vw, 28px)', margin: '0 0 16px', color: 'var(--c-textDark)', lineHeight: 1.5 }}>
              ちえのわ事業協同組合
            </h3>
            <p style={{ margin: '0 0 20px', fontFamily: FONTS.body, fontSize: 14, lineHeight: 1.9, color: 'var(--c-textMute)', textWrap: 'pretty' }}>
              牧場で絞った生乳から、地域のジェラートへ。別海の酪農家が集まり、共同で運営する加工・販売プロジェクトです。原料から販売まで、地域の中で循環させる新しい酪農のかたち。
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--c-line)' }}>
              {[
                ['設立', '2018年'],
                ['組合員', '別海の酪農家5名'],
                ['商品', 'ジェラート・乳製品'],
                ['展開', '店舗・マルシェ・EC'],
              ].map(([k, v]) => (
                <div key={k} style={{ flex: '1 1 120px' }}>
                  <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 11, color: 'var(--c-primary)', letterSpacing: '0.08em', marginBottom: 4 }}>{k}</div>
                  <div style={{ fontFamily: FONTS.heading, fontSize: 14, color: 'var(--c-textDark)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* VOICES */}
    <section style={{ padding: '0 32px 80px' }}>
      <SectionHead en="Voices from the Community" title="地域からの声" icon="cow"/>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', maxWidth: 1100 }}>
        {c.voices.map((v, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure style={{
              margin: 0, padding: '24px 24px 20px',
              background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
              borderRadius: 14, height: '100%',
            }}>
              <blockquote style={{
                margin: '0 0 16px', padding: 0,
                fontFamily: FONTS.display, fontSize: 15, lineHeight: 1.9,
                color: 'var(--c-textDark)',
              }}>
                <span style={{ fontFamily: FONTS.latin, fontSize: 28, color: 'var(--c-primary)', lineHeight: 0, verticalAlign: '-0.5em', marginRight: 4 }}>“</span>
                {v.text}
              </blockquote>
              <figcaption style={{ fontFamily: FONTS.body, fontSize: 11, color: 'var(--c-textMute)', paddingTop: 12, borderTop: '1px solid var(--c-line)' }}>
                — {v.who}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PARTNERS */}
    <section style={{ padding: '0 32px 96px' }}>
      <div style={{ maxWidth: 1100 }}>
        <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-primary)', letterSpacing: '0.1em', marginBottom: 8 }}>Partners & Collaborators</div>
        <h3 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(18px, 2.2vw, 22px)', margin: '0 0 20px', color: 'var(--c-textDark)' }}>連携・協力団体</h3>
        <div style={{
          display: 'grid', gap: 10,
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}>
          {c.partners.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
              padding: '14px 18px',
              border: '1px solid var(--c-line)', borderRadius: 10,
              background: 'var(--c-bgCream)',
            }}>
              <span style={{ fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)' }}>{p.name}</span>
              <span style={{ fontFamily: FONTS.body, fontSize: 10, color: 'var(--c-textMute)', letterSpacing: '0.04em' }}>{p.kind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

// ── NEWS ─────────────────────────────────────────────────────────────
const NewsPage = ({ useRemoteImages }) => {
  const [filter, setFilter] = React.useState('all');
  const items = filter === 'all' ? COPY.newsAll : COPY.newsAll.filter(n => n.tag === filter);
  const tags = ['all', ...Array.from(new Set(COPY.newsAll.map(n => n.tag)))];

  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      <PageHeader en="News" ja="お知らせ" lede="Instagramと連動して、牧場の日々をお届けします。" idx="07" total="08"/>

      {/* Filter */}
      <section style={{ padding: '0 32px 24px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tags.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: '8px 14px', borderRadius: 999, fontSize: 12,
              fontFamily: FONTS.heading, cursor: 'pointer',
              background: filter === t ? 'var(--c-textDark)' : 'transparent',
              color: filter === t ? 'var(--c-bgCream)' : 'var(--c-textDark)',
              border: '1px solid', borderColor: filter === t ? 'var(--c-textDark)' : 'var(--c-line)',
              transition: 'background 200ms, color 200ms',
            }}>
              {t === 'all' ? 'すべて' : t}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 32px 96px' }}>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', maxWidth: 1100 }}>
          {items.map((n, i) => (
            <Reveal key={`${filter}-${i}`} delay={i * 60}>
              <a style={{
                display: 'block',
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                transition: 'transform 240ms, box-shadow 240ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 28px -16px rgba(62,47,30,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <SmartImage src={IMAGES[n.img]} label={n.tag} aspect="4 / 3" useRemote={useRemoteImages}/>
                <div style={{ padding: '16px 18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)' }}>{n.date}</span>
                    <span style={{
                      background: 'var(--c-cardIvory)', borderRadius: 4,
                      padding: '1px 8px', fontSize: 10, color: 'var(--c-textDark)',
                      fontFamily: FONTS.heading,
                    }}>{n.tag}</span>
                  </div>
                  <p style={{ margin: 0, fontFamily: FONTS.body, fontSize: 13, lineHeight: 1.7, color: 'var(--c-textDark)', textWrap: 'pretty' }}>
                    {n.text}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Instagram feed embed */}
      <section style={{ padding: '40px 32px 96px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto 32px', textAlign: 'center' }}>
          <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.12em', marginBottom: 10 }}>Live from Instagram</div>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 'clamp(22px, 2.8vw, 32px)', margin: '0 0 8px', color: 'var(--c-textDark)', fontWeight: 500 }}>
            @{INSTAGRAM.handle}
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'var(--c-textMute)', margin: 0 }}>
            日々の牧場の様子をInstagramで発信しています。
          </p>
        </div>
        <InstagramFeed useRemoteImages={useRemoteImages}/>
      </section>
    </div>
  );
};
const ContactPage = () => {
  const [form, setForm] = React.useState({
    name: '', kana: '', org: '', email: '', tel: '', type: '採用', body: '', agree: false,
  });
  const [step, setStep] = React.useState('input');
  const [errors, setErrors] = React.useState({});

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = '氏名を入力してください';
    if (!form.email.trim()) e.email = 'メールを入力してください';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'メール形式が正しくありません';
    if (!form.body.trim()) e.body = 'お問い合わせ内容をご記入ください';
    if (!form.agree) e.agree = 'プライバシーポリシーに同意してください';
    return e;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep('done');
  };

  const fieldStyle = {
    width: '100%', padding: '12px 14px',
    background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
    borderRadius: 8, fontFamily: FONTS.body, fontSize: 14,
    color: 'var(--c-textDark)', outline: 'none',
  };
  const labelStyle = { display: 'block', fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)', marginBottom: 6 };
  const errStyle  = { fontSize: 11, color: '#b54a3a', marginTop: 4, fontFamily: FONTS.body };

  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      <PageHeader en="Contact" ja="お問い合わせ" lede="採用・取材・商品・見学。お気軽にご連絡ください。" idx="08" total="08"/>

      <section style={{ padding: '32px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 'clamp(24px, 4vw, 48px)', maxWidth: 1100, alignItems: 'flex-start' }}>
          {/* Info column */}
          <aside>
            <div style={{
              background: 'var(--c-cardIvory)', borderRadius: 18,
              padding: 'clamp(24px, 3vw, 32px)', marginBottom: 16,
            }}>
              <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, marginBottom: 10 }}>Direct contact</div>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 18, margin: '0 0 18px', color: 'var(--c-textDark)' }}>お電話・FAXでも</h3>
              <dl style={{ margin: 0, fontFamily: FONTS.body, fontSize: 13, color: 'var(--c-textDark)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--c-line)' }}>
                  <dt style={{ color: 'var(--c-textMute)' }}>TEL</dt>
                  <dd style={{ margin: 0, fontFamily: FONTS.mono, letterSpacing: '0.05em' }}>{COPY.brand.tel}</dd>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--c-line)' }}>
                  <dt style={{ color: 'var(--c-textMute)' }}>FAX</dt>
                  <dd style={{ margin: 0, fontFamily: FONTS.mono, letterSpacing: '0.05em' }}>{COPY.brand.fax}</dd>
                </div>
                <div style={{ paddingTop: 14 }}>
                  <dt style={{ color: 'var(--c-textMute)', marginBottom: 6 }}>所在地</dt>
                  <dd style={{ margin: 0, lineHeight: 1.8 }}>{COPY.brand.address}</dd>
                </div>
              </dl>
            </div>

            {/* Map placeholder */}
            <div style={{
              borderRadius: 18, overflow: 'hidden', border: '1px solid var(--c-line)',
              aspectRatio: '4 / 3', position: 'relative',
              background: 'var(--c-subSage)',
            }}>
              <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', display: 'block' }}>
                <rect width="400" height="300" fill="var(--c-subSage)" opacity="0.5"/>
                <path d="M0 120 Q100 100 200 130 T400 120 L400 300 L0 300 Z" fill="var(--c-primary)" opacity="0.4"/>
                <path d="M40 60 L120 60 M40 100 L260 100 M0 180 L400 180 M0 240 L400 240" stroke="var(--c-bgCream)" strokeWidth="2" opacity="0.6"/>
                {/* pin */}
                <g transform="translate(220 150)">
                  <circle r="14" fill="var(--c-ctaSunset)" opacity="0.3"/>
                  <circle r="8" fill="var(--c-ctaSunset)"/>
                  <circle r="3" fill="var(--c-bgCream)"/>
                </g>
              </svg>
              <div style={{
                position: 'absolute', left: 12, bottom: 12,
                background: 'var(--c-bgCream)', borderRadius: 6,
                padding: '6px 10px', fontFamily: FONTS.mono, fontSize: 10, color: 'var(--c-textDark)',
              }}>
                [ google map placeholder ]
              </div>
            </div>
          </aside>

          {/* Form column */}
          <div>
            {step === 'done' ? (
              <div style={{
                background: 'var(--c-cardIvory)', borderRadius: 18,
                padding: 'clamp(32px, 5vw, 48px)', textAlign: 'center',
              }}>
                <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.1em', marginBottom: 12 }}>Thank you</div>
                <h3 style={{ fontFamily: FONTS.display, fontSize: 'clamp(22px, 3vw, 28px)', margin: '0 0 14px', color: 'var(--c-textDark)' }}>
                  ご連絡ありがとうございました。
                </h3>
                <p style={{ fontFamily: FONTS.heading, fontSize: 14, lineHeight: 1.9, color: 'var(--c-textMute)', margin: '0 0 24px' }}>
                  内容を確認のうえ、3営業日以内に担当よりご返信いたします。
                </p>
                <Button onClick={() => { setStep('input'); setForm({ name:'',kana:'',org:'',email:'',tel:'',type:'採用',body:'',agree:false }); }} variant="secondary">
                  最初に戻る
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 18, padding: 'clamp(24px, 4vw, 36px)', display: 'grid', gap: 18,
              }}>
                <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label style={labelStyle}>氏名 <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
                    <input style={fieldStyle} value={form.name} onChange={set('name')}/>
                    {errors.name && <div style={errStyle}>{errors.name}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>ふりがな</label>
                    <input style={fieldStyle} value={form.kana} onChange={set('kana')}/>
                  </div>
                  <div>
                    <label style={labelStyle}>法人名</label>
                    <input style={fieldStyle} value={form.org} onChange={set('org')}/>
                  </div>
                  <div>
                    <label style={labelStyle}>お問い合わせ種別</label>
                    <select style={fieldStyle} value={form.type} onChange={set('type')}>
                      {['採用', '取材', '商品', '見学', 'その他'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>メール <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
                    <input style={fieldStyle} type="email" value={form.email} onChange={set('email')}/>
                    {errors.email && <div style={errStyle}>{errors.email}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>電話</label>
                    <input style={fieldStyle} value={form.tel} onChange={set('tel')}/>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>お問い合わせ内容 <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
                  <textarea style={{ ...fieldStyle, minHeight: 140, resize: 'vertical', fontFamily: FONTS.body }} value={form.body} onChange={set('body')}/>
                  {errors.body && <div style={errStyle}>{errors.body}</div>}
                </div>
                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--c-textDark)', fontFamily: FONTS.body, cursor: 'pointer' }}>
                  <input type="checkbox" checked={form.agree} onChange={set('agree')} style={{ marginTop: 3 }}/>
                  <span>プライバシーポリシーに同意のうえ送信します。</span>
                </label>
                {errors.agree && <div style={errStyle}>{errors.agree}</div>}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button as="button" variant="primary" size="lg">送信する <Icon kind="arrow" size={16}/></Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { BusinessPage, BrandPage, CommunityPage, NewsPage, ContactPage, PageHeader });
