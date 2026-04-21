// =====================================================================
// PAGES — Home, About, Recruit
// =====================================================================

// ── Home / Top page ───────────────────────────────────────────────────

const HomePage = ({ onNavigate, useRemoteImages, heroVariant }) => {
  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      {/* HERO */}
      {heroVariant === 'illust'
        ? <HeroPhoto onNavigate={onNavigate} useRemoteImages={useRemoteImages}/>
        : <HeroCopy onNavigate={onNavigate} useRemoteImages={useRemoteImages}/>}

      {/* PHILOSOPHY */}
      <section style={{ padding: '80px 32px', borderTop: '1px solid var(--c-line)' }}>
        <Reveal>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              fontFamily: FONTS.latin, fontStyle: 'italic',
              color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.08em', marginBottom: 8,
            }}>Our Philosophy</div>
            <div style={{
              fontFamily: FONTS.heading, color: 'var(--c-textMute)',
              fontSize: 12, letterSpacing: '0.3em', marginBottom: 28,
            }}>{COPY.philosophy.label}</div>
            <p style={{
              fontFamily: FONTS.display,
              fontSize: 'clamp(20px, 2.6vw, 28px)',
              lineHeight: 1.9, color: 'var(--c-textDark)',
              margin: 0, letterSpacing: '0.04em',
              textWrap: 'pretty',
            }}>
              {COPY.philosophy.body}
            </p>
          </div>
        </Reveal>
      </section>

      {/* NUMBERS */}
      <section style={{
        padding: '64px 32px',
        background: 'var(--c-cardIvory)',
        borderTop: '1px solid var(--c-line)',
        borderBottom: '1px solid var(--c-line)',
      }}>
        <SectionHead en="By the Numbers" title="数字で見るJファーム" icon="bale" align="center"/>
        <div style={{
          display: 'grid', gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          maxWidth: 1100, margin: '0 auto',
        }}>
          {COPY.numbers.map((n, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                background: 'var(--c-bgCream)',
                border: '1px solid var(--c-line)',
                borderRadius: 16,
                padding: '28px 22px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: FONTS.latin, fontStyle: 'italic',
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  color: 'var(--c-primary)', lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                  fontWeight: 500,
                }}>
                  <CountUp to={n.value} suffix={n.suffix}/>
                </div>
                <div style={{ fontFamily: FONTS.heading, fontSize: 14, marginTop: 12, color: 'var(--c-textDark)' }}>
                  {n.label}
                </div>
                <div style={{ fontSize: 11, color: 'var(--c-textMute)', marginTop: 4, fontFamily: FONTS.body }}>
                  {n.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Our Three Pillars" title="3つの柱" icon="cow"/>
        <div style={{
          display: 'grid', gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          maxWidth: 1100,
        }}>
          {COPY.pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 100}>
              <article style={{
                background: 'var(--c-bgCream)',
                border: '1px solid var(--c-line)',
                borderRadius: 18, overflow: 'hidden',
                transition: 'transform 240ms, box-shadow 240ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 28px -16px rgba(62,47,30,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <SmartImage src={IMAGES[p.img]} label={p.label} aspect="5 / 3" useRemote={useRemoteImages}/>
                <div style={{ padding: '20px 22px 24px' }}>
                  <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 12, color: 'var(--c-primary)', letterSpacing: '0.08em', marginBottom: 4 }}>
                    {p.kicker}
                  </div>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 20, margin: '0 0 10px', color: 'var(--c-textDark)' }}>
                    {p.label}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--c-textMute)', margin: 0, fontFamily: FONTS.body, textWrap: 'pretty' }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DAILY (Instagram embed) */}
      <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)' }}>
        <SectionHead en="The Daily Farm" title="牧場の日々" kicker="Instagramと連動。投稿するたびに、このページも更新されます。" icon="sun"/>
        <InstagramHomeStrip useRemoteImages={useRemoteImages}/>
      </section>

      {/* RECRUIT CTA */}
      <section style={{ padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
        <Reveal>
          <div style={{
            maxWidth: 920, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
            background: 'var(--c-textDark)', color: 'var(--c-bgCream)',
            borderRadius: 24, padding: 'clamp(28px, 5vw, 48px)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div>
              <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, opacity: 0.7, letterSpacing: '0.08em', marginBottom: 10 }}>
                We're hiring
              </div>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(22px, 3vw, 30px)', margin: '0 0 12px', lineHeight: 1.4 }}>
                仲間を、本気で募集しています。
              </h3>
              <p style={{ fontSize: 13, opacity: 0.85, margin: 0, lineHeight: 1.8, maxWidth: 520, fontFamily: FONTS.body }}>
                未経験から独立まで。研修牧場として伴走する仕組みを整えています。
              </p>
            </div>
            <Button onClick={() => onNavigate('recruit')} variant="primary" size="lg">
              採用情報を見る <Icon kind="arrow" size={16}/>
            </Button>
            {/* Decorative */}
            <svg style={{ position: 'absolute', right: -40, bottom: -40, opacity: 0.1 }}
              width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="60" fill="none" stroke="var(--c-bgCream)" strokeWidth="1.5"/>
              <circle cx="100" cy="100" r="80" fill="none" stroke="var(--c-bgCream)" strokeWidth="1" strokeDasharray="2 6"/>
            </svg>
          </div>
        </Reveal>
      </section>

      {/* NEWS */}
      <section style={{ padding: '0 32px 96px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <SectionHead en="News" title="お知らせ" icon="milk"/>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--c-line)' }}>
            {COPY.newsItems.slice(0, 3).map((n, i) => (
              <li key={i} style={{
                padding: '20px 4px',
                borderBottom: '1px solid var(--c-line)',
                display: 'grid', gridTemplateColumns: '120px 1fr auto',
                gap: 16, alignItems: 'baseline',
                cursor: 'pointer',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--c-cardIvory)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <span style={{ fontFamily: FONTS.mono, fontSize: 12, color: 'var(--c-textMute)' }}>{n.date}</span>
                <span style={{ fontFamily: FONTS.body, fontSize: 14, color: 'var(--c-textDark)' }}>{n.text}</span>
                <Icon kind="arrow" size={14} color="var(--c-textMute)"/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

const HeroPhoto = ({ onNavigate, useRemoteImages }) => (
  <section style={{ position: 'relative', minHeight: 'min(86vh, 720px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <SmartImage src={IMAGES.about_farm01} label="farm landscape" aspect="auto" useRemote={useRemoteImages}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(62,47,30,0.15) 0%, rgba(62,47,30,0) 35%, rgba(251,248,241,0.95) 100%)' }}/>
    </div>
    <div style={{
      position: 'relative', zIndex: 1, marginTop: 'auto',
      padding: '0 32px 64px', maxWidth: 760,
    }}>
      <div style={{
        fontFamily: FONTS.latin, fontStyle: 'italic',
        color: 'var(--c-textDark)', opacity: 0.8, fontSize: 13, letterSpacing: '0.12em',
        marginBottom: 16,
      }}>{COPY.hero.eyebrow}</div>
      <h1 style={{
        fontFamily: FONTS.display, fontWeight: 500,
        fontSize: 'clamp(36px, 6vw, 64px)',
        lineHeight: 1.3, color: 'var(--c-textDark)',
        margin: '0 0 16px', letterSpacing: '0.04em',
      }}>
        {COPY.hero.catchMain}<br/>{COPY.hero.catchSub}
      </h1>
      <p style={{
        fontFamily: FONTS.heading, fontSize: 'clamp(14px, 1.4vw, 17px)',
        color: 'var(--c-textDark)', margin: '0 0 28px', opacity: 0.85,
      }}>
        — {COPY.hero.lede}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => onNavigate('about')} variant="primary">牧場について <Icon kind="arrow" size={14}/></Button>
        <Button onClick={() => onNavigate('recruit')} variant="secondary">採用情報</Button>
      </div>
    </div>
  </section>
);

const HeroCopy = ({ onNavigate, useRemoteImages }) => (
  <section style={{ position: 'relative', padding: 'clamp(56px, 10vw, 120px) 32px', display: 'grid', gap: 40, gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', alignItems: 'center' }}>
    <div>
      <div style={{
        fontFamily: FONTS.latin, fontStyle: 'italic',
        color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.12em',
        marginBottom: 20,
      }}>{COPY.hero.eyebrow}</div>
      <h1 style={{
        fontFamily: FONTS.display, fontWeight: 500,
        fontSize: 'clamp(42px, 7vw, 88px)',
        lineHeight: 1.25, color: 'var(--c-textDark)',
        margin: '0 0 24px', letterSpacing: '0.02em',
      }}>
        {COPY.hero.catchMain}<br/>
        <span style={{ color: 'var(--c-primary)' }}>{COPY.hero.catchSub}</span>
      </h1>
      <p style={{
        fontFamily: FONTS.heading, fontSize: 'clamp(15px, 1.4vw, 18px)',
        color: 'var(--c-textDark)', margin: '0 0 36px', opacity: 0.8, lineHeight: 1.8,
      }}>
        — {COPY.hero.lede}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => onNavigate('about')} variant="primary" size="lg">牧場について <Icon kind="arrow" size={16}/></Button>
        <Button onClick={() => onNavigate('recruit')} variant="secondary" size="lg">採用情報</Button>
      </div>
    </div>
    <div style={{
      borderRadius: 24, overflow: 'hidden',
      aspectRatio: '4 / 5', minHeight: 320,
      border: '1px solid var(--c-line)',
      position: 'relative',
    }}>
      <SmartImage src={IMAGES.main_ph01} label="farm hero photo" aspect="4 / 5" useRemote={useRemoteImages}/>
    </div>
  </section>
);

// ── About page ────────────────────────────────────────────────────────

const AboutPage = ({ useRemoteImages }) => {
  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      {/* Page header */}
      <section style={{ padding: 'clamp(48px, 8vw, 96px) 32px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 14, letterSpacing: '0.12em' }}>About</span>
          <span style={{ flex: 1, height: 1, background: 'var(--c-line)' }}/>
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)' }}>01 / 03</span>
        </div>
        <h1 style={{
          fontFamily: FONTS.display, fontWeight: 500,
          fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.3,
          color: 'var(--c-textDark)', margin: 0, letterSpacing: '0.02em',
        }}>
          牧場について
        </h1>
        <p style={{
          fontFamily: FONTS.heading, fontSize: 'clamp(14px, 1.4vw, 17px)',
          color: 'var(--c-textMute)', maxWidth: 560, marginTop: 16, lineHeight: 1.9,
        }}>
          1948年、別海町泉川地区に入植した一族の物語。三代にわたる歩みと、これからの挑戦をご紹介します。
        </p>
      </section>

      {/* Father-son spread */}
      <section style={{ padding: '32px 32px 64px', display: 'grid', gap: 32, gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: 'center', maxWidth: 1100 }}>
        <Reveal>
          <SmartImage src={IMAGES.about_farm02} label="代表 父子" aspect="4 / 5" useRemote={useRemoteImages}/>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, marginBottom: 8 }}>From the Representative</div>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.4vw, 28px)', margin: '0 0 24px', lineHeight: 1.5 }}>
              三代にわたって受け継いだ酪農を、<br/>次の世代に手渡したい。
            </h2>
            {[
              '祖父が入植して受け継いできた酪農を守りたい',
              'この地域をもう一度活気あるものにしたい',
              '酪農の仕事を魅力あるものにして若者に選ばれる産業に',
            ].map((q, i) => (
              <blockquote key={i} style={{
                margin: '0 0 14px', padding: '14px 18px',
                borderLeft: '3px solid var(--c-primary)',
                background: 'var(--c-cardIvory)',
                fontFamily: FONTS.display, fontSize: 15,
                color: 'var(--c-textDark)', lineHeight: 1.7,
              }}>
                「{q}」
              </blockquote>
            ))}
            <div style={{ marginTop: 20, fontFamily: FONTS.heading, fontSize: 14, color: 'var(--c-textDark)' }}>
              三代目代表  <span style={{ fontFamily: FONTS.display, fontSize: 18, marginLeft: 6 }}>島崎 洋介</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE - scroll-linked */}
      <Timeline/>

      {/* TEAM STATS */}
      <section style={{ padding: '64px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)' }}>
        <SectionHead en="Our Team in Numbers" title="チームを、数字で" icon="community" align="center"/>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', maxWidth: 1000, margin: '0 auto' }}>
          {COPY.teamStats.map((n, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 'clamp(36px, 5vw, 48px)', color: 'var(--c-primary)', lineHeight: 1, fontWeight: 500 }}>
                  <CountUp to={n.value} suffix={n.suffix}/>
                </div>
                <div style={{ fontFamily: FONTS.heading, fontSize: 13, marginTop: 10, color: 'var(--c-textDark)' }}>{n.label}</div>
                <div style={{ fontSize: 11, color: 'var(--c-textMute)', marginTop: 4 }}>{n.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEMBER PORTRAITS */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Our Team" title="メンバー紹介" kicker="三代目代表から新人スタッフまで。Jファームを支える顔ぶれ。" icon="community"/>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', maxWidth: 1100 }}>
          {COPY.members.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <article style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 18, overflow: 'hidden', height: '100%',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 240ms, box-shadow 240ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -20px rgba(62,47,30,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'relative' }}>
                  <SmartImage src={IMAGES[m.img]} label={`${m.name} portrait`} aspect="4 / 5" useRemote={useRemoteImages}/>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(62,47,30,0) 55%, rgba(62,47,30,0.75) 100%)',
                  }}/>
                  <div style={{
                    position: 'absolute', left: 18, right: 18, bottom: 16, color: 'var(--c-bgCream)',
                  }}>
                    <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 11, opacity: 0.85, letterSpacing: '0.08em', marginBottom: 2 }}>
                      {m.nameEn}
                    </div>
                    <div style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '0.02em' }}>
                      {m.name}
                    </div>
                    <div style={{ fontFamily: FONTS.heading, fontSize: 12, opacity: 0.88, marginTop: 2 }}>
                      {m.role}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '18px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {m.tags.map(t => (
                      <span key={t} style={{
                        background: 'var(--c-cardIvory)', color: 'var(--c-textDark)',
                        fontFamily: FONTS.body, fontSize: 10.5,
                        padding: '3px 9px', borderRadius: 999, border: '1px solid var(--c-line)',
                      }}>#{t}</span>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: FONTS.display, fontSize: 14, lineHeight: 1.9,
                    color: 'var(--c-textDark)', margin: 0,
                    borderLeft: '2px solid var(--c-primary)', paddingLeft: 12,
                  }}>
                    「{m.quote}」
                  </p>
                  <p style={{
                    margin: 0, fontSize: 12, lineHeight: 1.85,
                    color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty', flex: 1,
                  }}>
                    {m.bio}
                  </p>
                  <div style={{
                    borderTop: '1px solid var(--c-line)', paddingTop: 10,
                    fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)',
                  }}>
                    {m.tenure}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STAFF GROUP PHOTO */}
      <section style={{ padding: '0 32px 96px' }}>
        <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--c-line)', maxWidth: 1100 }}>
          <SmartImage src={IMAGES.staff} label="staff group photo" aspect="16 / 7" useRemote={useRemoteImages}/>
        </div>
      </section>

      {/* LONG-TERM VISION */}
      <section style={{ padding: '96px 32px', borderTop: '1px solid var(--c-line)', background: 'var(--c-cardIvory)' }}>
        <SectionHead en="Long-term Vision" title="長期ビジョン" kicker="三段階で描く、次の20年。" icon="sun"/>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', maxWidth: 1180 }}>
          {COPY.vision.phases.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 20, padding: '32px 28px', height: '100%',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 16, right: 20,
                  fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 56,
                  color: 'var(--c-primary)', opacity: 0.12, letterSpacing: '-0.04em',
                }}>0{i+1}</div>
                <div style={{
                  fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.12em',
                  color: 'var(--c-accentBrown)', marginBottom: 12,
                }}>{p.period}</div>
                <h3 style={{
                  fontFamily: FONTS.heading, fontSize: 20, margin: '0 0 14px',
                  color: 'var(--c-textDark)', lineHeight: 1.4,
                }}>{p.title}</h3>
                <p style={{
                  margin: 0, fontSize: 13, lineHeight: 1.9, color: 'var(--c-textMute)',
                  fontFamily: FONTS.body, textWrap: 'pretty',
                }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2025 POLICY */}
      <section style={{ padding: '96px 32px', borderTop: '1px solid var(--c-line)' }}>
        <SectionHead en="2025 Policy" title="2025年度 取組方針" kicker="五つの柱で、もう一段上を目指す。" icon="sprout"/>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', maxWidth: 1200 }}>
          {COPY.policy2025.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 70}>
              <div style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 16, padding: '22px 20px', height: '100%',
              }}>
                <div style={{
                  display: 'inline-block',
                  fontFamily: FONTS.latin, fontStyle: 'italic',
                  padding: '2px 10px', borderRadius: 999,
                  background: 'var(--c-primary)', color: 'var(--c-bgCream)',
                  fontSize: 11, letterSpacing: '0.08em', marginBottom: 14,
                }}>POLICY 0{i+1}</div>
                <h4 style={{ fontFamily: FONTS.heading, fontSize: 15, margin: '0 0 10px', color: 'var(--c-textDark)', lineHeight: 1.5 }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.85, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

const Timeline = () => {
  const containerRef = React.useRef(null);
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const root = el.closest('[data-scroll-root]') || null;
    const items = el.querySelectorAll('[data-tl-item]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActiveIdx(parseInt(e.target.getAttribute('data-tl-item'), 10));
        }
      });
    }, { root, threshold: 0.5 });
    items.forEach(it => io.observe(it));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={containerRef} style={{ padding: '80px 32px', position: 'relative' }}>
      <SectionHead en="Three Generations" title="三代のヒストリー" icon="sprout"/>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 'clamp(20px, 4vw, 60px)', maxWidth: 1100, alignItems: 'flex-start' }}>
        {/* sticky year display */}
        <div style={{ position: 'sticky', top: 80, alignSelf: 'flex-start', minHeight: 200 }}>
          <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 13, color: 'var(--c-primary)', letterSpacing: '0.1em', marginBottom: 8 }}>
            Year
          </div>
          <div key={activeIdx} style={{
            fontFamily: FONTS.latin, fontStyle: 'italic',
            fontSize: 'clamp(72px, 12vw, 140px)', lineHeight: 1,
            color: 'var(--c-textDark)', fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
            animation: 'jf-fadeIn 500ms ease',
          }}>
            {COPY.history[activeIdx]?.year}
          </div>
          <div style={{ marginTop: 24, height: 4, background: 'var(--c-line)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: 'var(--c-primary)',
              width: `${((activeIdx + 1) / COPY.history.length) * 100}%`,
              transition: 'width 400ms ease',
            }}/>
          </div>
          <div style={{ marginTop: 8, fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)' }}>
            {String(activeIdx + 1).padStart(2, '0')} / {String(COPY.history.length).padStart(2, '0')}
          </div>
        </div>

        {/* events */}
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 9, top: 8, bottom: 8, width: 1, background: 'var(--c-line)' }}/>
          {COPY.history.map((h, i) => (
            <li key={i} data-tl-item={i} style={{
              padding: '0 0 56px 36px', position: 'relative',
              opacity: activeIdx === i ? 1 : 0.5,
              transition: 'opacity 400ms',
            }}>
              <div style={{
                position: 'absolute', left: 4, top: 6,
                width: 12, height: 12, borderRadius: '50%',
                background: activeIdx === i ? 'var(--c-primary)' : 'var(--c-bgCream)',
                border: '2px solid var(--c-primary)',
                transition: 'background 300ms',
              }}/>
              <div style={{ fontFamily: FONTS.mono, fontSize: 12, color: 'var(--c-textMute)', letterSpacing: '0.05em', marginBottom: 6 }}>
                {h.year}
              </div>
              <h4 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(16px, 2vw, 20px)', margin: '0 0 8px', color: 'var(--c-textDark)', lineHeight: 1.5 }}>
                {h.title}
              </h4>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.9, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty' }}>
                {h.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

// ── Recruit page ──────────────────────────────────────────────────────

const RecruitPage = ({ useRemoteImages, recruitTone }) => {
  const bold = recruitTone === 'bold';
  return (
    <div style={{ background: 'var(--c-bgCream)' }}>
      {bold ? <RecruitHeroBold useRemoteImages={useRemoteImages}/> : <RecruitHeroSoft useRemoteImages={useRemoteImages}/>}

      {/* FEATURES */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Why J‑Farm" title="J‑Farmの働き方" icon="sun"/>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', maxWidth: 1100 }}>
          {COPY.recruit.features.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 16, padding: '24px 22px', height: '100%',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--c-cardIvory)', color: 'var(--c-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: FONTS.latin, fontStyle: 'italic',
                  marginBottom: 14, fontSize: 14,
                }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <h4 style={{ fontFamily: FONTS.heading, fontSize: 16, margin: '0 0 10px', color: 'var(--c-textDark)' }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--c-textMute)', margin: 0, fontFamily: FONTS.body, textWrap: 'pretty' }}>
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)', borderBottom: '1px solid var(--c-line)' }}>
        <SectionHead en="Five Principles" title="5つの行動指針" icon="sprout"/>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 920, display: 'grid', gap: 12 }}>
          {COPY.recruit.principles.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <li style={{
                display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, alignItems: 'baseline',
                padding: '16px 0', borderBottom: '1px solid var(--c-line)',
              }}>
                <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 28, color: 'var(--c-primary)', fontWeight: 500 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: FONTS.heading, fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--c-textDark)', lineHeight: 1.6 }}>
                  {p}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* FIVE FREEDOMS — Animal Welfare */}
      <section style={{ padding: '96px 32px', borderBottom: '1px solid var(--c-line)' }}>
        <SectionHead
          en="Animal Welfare"
          title="5つの自由"
          kicker="牛のストレスと疾病を減らし、良質な生乳をより多く生産するために。"
          icon="cow"
        />
        <div style={{
          display: 'grid', gap: 14,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          maxWidth: 1200,
        }}>
          {COPY.fiveFreedoms.items.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 14, padding: '22px 20px',
                display: 'flex', gap: 14, alignItems: 'flex-start',
                height: '100%',
              }}>
                <div style={{
                  width: 28, height: 28, flexShrink: 0, borderRadius: '50%',
                  background: 'var(--c-primary)', color: 'var(--c-bgCream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 12,
                  marginTop: 2,
                }}>{i + 1}</div>
                <div style={{
                  fontFamily: FONTS.heading, fontSize: 14, lineHeight: 1.7,
                  color: 'var(--c-textDark)',
                }}>{f}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="A Day at the Farm" title="ある一日の流れ" icon="sun"/>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 720, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 50, top: 8, bottom: 24, width: 1, background: 'var(--c-line)' }}/>
          {COPY.recruit.schedule.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <li style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 18, paddingBottom: 24, position: 'relative' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 14, color: 'var(--c-primary)', position: 'relative' }}>
                  {s.time}
                  <div style={{
                    position: 'absolute', right: -7, top: 4,
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--c-primary)',
                  }}/>
                </div>
                <div>
                  <div style={{ fontFamily: FONTS.heading, fontSize: 16, color: 'var(--c-textDark)', marginBottom: 4 }}>
                    {s.act}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--c-textMute)', fontFamily: FONTS.body }}>
                    {s.note}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* OPENINGS — 募集職種 */}
      <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)', borderBottom: '1px solid var(--c-line)' }}>
        <SectionHead en="Open Positions" title="募集職種" kicker="4つのポジションで仲間を募集しています。" icon="community"/>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 1100 }}>
          {COPY.recruit.openings.map((o, i) => (
            <Reveal key={o.key} delay={i * 80}>
              <article style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 18, padding: '28px 26px',
                display: 'flex', flexDirection: 'column', gap: 14, height: '100%',
                transition: 'transform 240ms, box-shadow 240ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -20px rgba(62,47,30,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 20, margin: 0, color: 'var(--c-textDark)', lineHeight: 1.4 }}>
                    {o.title}
                  </h3>
                  <span style={{
                    background: 'var(--c-primary)', color: 'var(--c-bgCream)',
                    fontFamily: FONTS.heading, fontSize: 10, letterSpacing: '0.06em',
                    padding: '4px 10px', borderRadius: 999, flexShrink: 0, whiteSpace: 'nowrap',
                  }}>{o.type}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '6px 12px', fontSize: 12, color: 'var(--c-textMute)', fontFamily: FONTS.body }}>
                  <span>給与</span><span style={{ color: 'var(--c-textDark)', fontFamily: FONTS.heading }}>{o.salary}</span>
                  <span>経験</span><span style={{ color: 'var(--c-textDark)', fontFamily: FONTS.heading }}>{o.exp}</span>
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty', flex: 1 }}>
                  {o.body}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {o.tags.map(t => (
                    <span key={t} style={{
                      background: 'var(--c-cardIvory)', color: 'var(--c-textDark)',
                      fontFamily: FONTS.body, fontSize: 11,
                      padding: '4px 10px', borderRadius: 999, border: '1px solid var(--c-line)',
                    }}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SENIORS — 先輩の声（充実版） */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Voices from the Team" title="先輩スタッフの声" kicker="3年目、5年目、7年目。それぞれのJ‑Farm。" icon="cow"/>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: 1100 }}>
          {COPY.recruit.seniors.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <article style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 18, overflow: 'hidden', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ position: 'relative' }}>
                  <SmartImage src={IMAGES[s.img]} label={`${s.name} portrait`} aspect="4 / 3" useRemote={useRemoteImages}/>
                  <div style={{
                    position: 'absolute', left: 16, bottom: 16,
                    background: 'var(--c-bgCream)', color: 'var(--c-textDark)',
                    padding: '6px 12px', borderRadius: 999,
                    fontFamily: FONTS.heading, fontSize: 11, letterSpacing: '0.06em',
                    border: '1px solid var(--c-line)',
                  }}>
                    {s.tenure}  ·  {s.role}
                  </div>
                </div>
                <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{
                    fontFamily: FONTS.display, fontSize: 16, lineHeight: 1.9,
                    color: 'var(--c-textDark)', margin: '0 0 18px', flex: 1,
                  }}>
                    「{s.text}」
                  </p>
                  <div style={{ borderTop: '1px solid var(--c-line)', paddingTop: 14, marginBottom: 14, fontSize: 12, color: 'var(--c-textMute)', fontFamily: FONTS.body }}>
                    <strong style={{ color: 'var(--c-textDark)', fontWeight: 500, fontSize: 13 }}>{s.name}</strong>（{s.age}）<br/>
                    {s.prev}
                  </div>
                  <div>
                    <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 11, color: 'var(--c-primary)', letterSpacing: '0.1em', marginBottom: 8 }}>
                      A Typical Day
                    </div>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {s.day.map((d, j) => (
                        <li key={j} style={{
                          background: 'var(--c-cardIvory)', color: 'var(--c-textDark)',
                          fontFamily: FONTS.mono, fontSize: 10,
                          padding: '4px 8px', borderRadius: 4,
                        }}>{d}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FLOW — 選考フロー */}
      <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)' }}>
        <SectionHead en="Recruitment Flow" title="選考の流れ" kicker="エントリーから入社まで、約1〜2ヶ月。" icon="arrow"/>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 1100, display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {COPY.recruit.flow.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <li style={{
                background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
                borderRadius: 14, padding: '24px 22px', position: 'relative', height: '100%',
              }}>
                <div style={{
                  fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 32,
                  color: 'var(--c-primary)', lineHeight: 1, marginBottom: 10,
                  fontWeight: 500,
                }}>
                  {f.step}
                </div>
                <h4 style={{ fontFamily: FONTS.heading, fontSize: 16, margin: '0 0 10px', color: 'var(--c-textDark)' }}>
                  {f.title}
                </h4>
                <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.8, color: 'var(--c-textMute)', fontFamily: FONTS.body, textWrap: 'pretty' }}>
                  {f.body}
                </p>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-primary)', letterSpacing: '0.05em' }}>
                  {f.duration}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* BENEFITS — 待遇・福利厚生 */}
      <section style={{ padding: '80px 32px' }}>
        <SectionHead en="Benefits & Conditions" title="待遇・福利厚生" icon="bale"/>
        <div style={{
          maxWidth: 1100,
          display: 'grid', gap: 0,
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          border: '1px solid var(--c-line)', borderRadius: 14, overflow: 'hidden',
        }}>
          {COPY.recruit.benefits.map((b, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12,
              padding: '18px 22px',
              borderBottom: '1px solid var(--c-line)',
              background: i % 2 === 0 ? 'var(--c-bgCream)' : 'var(--c-cardIvory)',
            }}>
              <dt style={{ fontFamily: FONTS.heading, fontSize: 12, color: 'var(--c-primary)', letterSpacing: '0.06em' }}>
                {b.label}
              </dt>
              <dd style={{ margin: 0, fontFamily: FONTS.body, fontSize: 13, color: 'var(--c-textDark)', lineHeight: 1.7 }}>
                {b.value}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 32px', background: 'var(--c-cardIvory)', borderTop: '1px solid var(--c-line)' }}>
        <SectionHead en="FAQ" title="よくあるご質問" icon="sprout"/>
        <div style={{ maxWidth: 920, display: 'grid', gap: 10 }}>
          {COPY.recruit.faq.map((f, i) => (
            <details key={i} style={{
              background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
              borderRadius: 12, padding: '16px 20px',
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none',
                fontFamily: FONTS.heading, fontSize: 15, color: 'var(--c-textDark)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ color: 'var(--c-primary)', fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 14, flexShrink: 0 }}>Q.</span>
                <span style={{ flex: 1 }}>{f.q}</span>
                <span style={{ color: 'var(--c-textMute)', fontSize: 18, flexShrink: 0 }}>＋</span>
              </summary>
              <div style={{
                marginTop: 12, paddingTop: 12, borderTop: '1px dashed var(--c-line)',
                display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10,
                fontFamily: FONTS.body, fontSize: 13, color: 'var(--c-textMute)', lineHeight: 1.9,
              }}>
                <span style={{ color: 'var(--c-ctaSunset)', fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: 14 }}>A.</span>
                <span>{f.a}</span>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* APPLY FORM */}
      <RecruitForm/>
    </div>
  );
};

const RecruitHeroSoft = ({ useRemoteImages }) => (
  <section style={{ padding: 'clamp(48px, 8vw, 96px) 32px 64px', display: 'grid', gap: 'clamp(24px, 4vw, 48px)', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', alignItems: 'center' }}>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 14, letterSpacing: '0.12em' }}>Recruit</span>
        <span style={{ flex: 1, height: 1, background: 'var(--c-line)' }}/>
      </div>
      <h1 style={{
        fontFamily: FONTS.display, fontWeight: 500,
        fontSize: 'clamp(28px, 4.4vw, 48px)', lineHeight: 1.5,
        color: 'var(--c-textDark)', margin: '0 0 24px', letterSpacing: '0.04em', whiteSpace: 'pre-line',
      }}>
        {COPY.recruit.headlineSoft}
      </h1>
      <p style={{ fontFamily: FONTS.heading, fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 2, color: 'var(--c-textMute)', margin: '0 0 32px', whiteSpace: 'pre-line' }}>
        {COPY.recruit.ledeSoft}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} variant="primary">応募する <Icon kind="arrow" size={14}/></Button>
        <Button variant="ghost">資料請求</Button>
      </div>
    </div>
    <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid var(--c-line)' }}>
      <SmartImage src={IMAGES.about_farm03} label="recruit hero" aspect="4 / 5" useRemote={useRemoteImages}/>
    </div>
  </section>
);

const RecruitHeroBold = ({ useRemoteImages }) => (
  <section style={{
    position: 'relative', padding: 'clamp(64px, 10vw, 128px) 32px',
    background: 'var(--c-textDark)', color: 'var(--c-bgCream)', overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
      <SmartImage src={IMAGES.about_farm01} label="bold bg" aspect="auto" useRemote={useRemoteImages}/>
    </div>
    <div style={{ position: 'relative', maxWidth: 880 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <span style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-ctaSunset)', fontSize: 14, letterSpacing: '0.16em' }}>Recruit  ·  2026</span>
      </div>
      <h1 style={{
        fontFamily: FONTS.heading, fontWeight: 500,
        fontSize: 'clamp(34px, 6vw, 72px)', lineHeight: 1.3,
        margin: '0 0 28px', letterSpacing: '0.01em', whiteSpace: 'pre-line',
      }}>
        {COPY.recruit.headlineBold}
      </h1>
      <p style={{ fontFamily: FONTS.heading, fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.9, opacity: 0.88, margin: '0 0 36px', whiteSpace: 'pre-line', maxWidth: 600 }}>
        {COPY.recruit.ledeBold}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} variant="primary" size="lg">エントリーする <Icon kind="arrow" size={16}/></Button>
      </div>
    </div>
  </section>
);

const RecruitForm = () => {
  const [form, setForm] = React.useState({
    name: '', kana: '', email: '', tel: '', age: '',
    type: '採用', exp: '', motivation: '', agree: false,
  });
  const [step, setStep] = React.useState('input'); // 'input' | 'review' | 'done'
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = '氏名を入力してください';
    if (!form.kana.trim()) e.kana = 'ふりがなを入力してください';
    if (!form.email.trim()) e.email = 'メールを入力してください';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'メール形式が正しくありません';
    if (!form.motivation.trim()) e.motivation = '志望動機をご記入ください';
    if (!form.agree) e.agree = 'プライバシーポリシーに同意してください';
    return e;
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep('review');
  };

  const fieldStyle = {
    width: '100%', padding: '12px 14px',
    background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
    borderRadius: 8, fontFamily: FONTS.body, fontSize: 14,
    color: 'var(--c-textDark)', outline: 'none',
    transition: 'border-color 200ms',
  };
  const labelStyle = { display: 'block', fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)', marginBottom: 6 };
  const errStyle  = { fontSize: 11, color: '#b54a3a', marginTop: 4, fontFamily: FONTS.body };

  if (step === 'done') {
    return (
      <section id="apply-form" style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', background: 'var(--c-cardIvory)', borderRadius: 24, padding: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ fontFamily: FONTS.latin, fontStyle: 'italic', color: 'var(--c-primary)', fontSize: 13, letterSpacing: '0.1em', marginBottom: 12 }}>Thank you</div>
          <h3 style={{ fontFamily: FONTS.display, fontSize: 'clamp(24px, 3vw, 32px)', margin: '0 0 16px', color: 'var(--c-textDark)' }}>
            ご応募ありがとうございました。
          </h3>
          <p style={{ fontFamily: FONTS.heading, fontSize: 14, lineHeight: 1.9, color: 'var(--c-textMute)', margin: '0 0 24px' }}>
            内容を確認のうえ、3営業日以内に担当よりご連絡いたします。
          </p>
          <Button onClick={() => { setStep('input'); setForm({ name:'',kana:'',email:'',tel:'',age:'',type:'採用',exp:'',motivation:'',agree:false }); }} variant="secondary">
            最初に戻る
          </Button>
        </div>
      </section>
    );
  }

  if (step === 'review') {
    const rows = [
      ['氏名', form.name],
      ['ふりがな', form.kana],
      ['メール', form.email],
      ['電話', form.tel || '—'],
      ['年齢', form.age || '—'],
      ['お問い合わせ種別', form.type],
      ['酪農経験', form.exp || '—'],
      ['志望動機', form.motivation],
    ];
    return (
      <section id="apply-form" style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <SectionHead en="Confirm" title="入力内容の確認" icon="arrow"/>
          <dl style={{ margin: 0, padding: 0, border: '1px solid var(--c-line)', borderRadius: 12, overflow: 'hidden' }}>
            {rows.map(([k, v], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderTop: i ? '1px solid var(--c-line)' : 'none' }}>
                <dt style={{ background: 'var(--c-cardIvory)', padding: '14px 16px', fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)' }}>{k}</dt>
                <dd style={{ margin: 0, padding: '14px 16px', fontSize: 13, color: 'var(--c-textDark)', fontFamily: FONTS.body, whiteSpace: 'pre-wrap' }}>{v}</dd>
              </div>
            ))}
          </dl>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'flex-end' }}>
            <Button onClick={() => setStep('input')} variant="ghost">修正する</Button>
            <Button onClick={() => setStep('done')} variant="primary">この内容で送信</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply-form" style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <SectionHead en="Apply" title="応募フォーム" kicker="まずはお気軽にご連絡ください。質問のみでも歓迎します。" icon="milk"/>
        <form onSubmit={onSubmit} noValidate style={{
          background: 'var(--c-bgCream)', border: '1px solid var(--c-line)',
          borderRadius: 18, padding: 'clamp(24px, 4vw, 36px)', display: 'grid', gap: 20,
        }}>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <label style={labelStyle}>氏名 <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
              <input style={fieldStyle} value={form.name} onChange={set('name')} placeholder="島崎 太郎"/>
              {errors.name && <div style={errStyle}>{errors.name}</div>}
            </div>
            <div>
              <label style={labelStyle}>ふりがな <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
              <input style={fieldStyle} value={form.kana} onChange={set('kana')} placeholder="しまざき たろう"/>
              {errors.kana && <div style={errStyle}>{errors.kana}</div>}
            </div>
            <div>
              <label style={labelStyle}>メール <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
              <input style={fieldStyle} type="email" value={form.email} onChange={set('email')} placeholder="you@example.com"/>
              {errors.email && <div style={errStyle}>{errors.email}</div>}
            </div>
            <div>
              <label style={labelStyle}>電話</label>
              <input style={fieldStyle} value={form.tel} onChange={set('tel')} placeholder="090-0000-0000"/>
            </div>
            <div>
              <label style={labelStyle}>年齢</label>
              <input style={fieldStyle} value={form.age} onChange={set('age')} placeholder="28"/>
            </div>
            <div>
              <label style={labelStyle}>お問い合わせ種別</label>
              <select style={fieldStyle} value={form.type} onChange={set('type')}>
                {['採用', '見学希望', '研修牧場について', '取材', 'その他'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>酪農経験</label>
            <input style={fieldStyle} value={form.exp} onChange={set('exp')} placeholder="未経験 / 〇年 など"/>
          </div>

          <div>
            <label style={labelStyle}>志望動機・お問い合わせ内容 <span style={{ color: 'var(--c-ctaSunset)' }}>*</span></label>
            <textarea style={{ ...fieldStyle, minHeight: 140, resize: 'vertical', fontFamily: FONTS.body }}
              value={form.motivation} onChange={set('motivation')}
              placeholder="ご自由にお書きください"/>
            {errors.motivation && <div style={errStyle}>{errors.motivation}</div>}
          </div>

          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--c-textDark)', fontFamily: FONTS.body, cursor: 'pointer' }}>
            <input type="checkbox" checked={form.agree} onChange={set('agree')} style={{ marginTop: 3 }}/>
            <span>プライバシーポリシーに同意のうえ送信します。</span>
          </label>
          {errors.agree && <div style={errStyle}>{errors.agree}</div>}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <Button as="button" variant="primary" size="lg">入力内容を確認 <Icon kind="arrow" size={16}/></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

Object.assign(window, { HomePage, AboutPage, RecruitPage });
