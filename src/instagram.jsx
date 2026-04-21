// =====================================================================
// INSTAGRAM FEED — simulated embedded widget for /news + /home
// Looks like an authentic @jfarm_shimazaki feed pulled via API, with
// profile header, tab switcher (posts / reels / tagged), and hover-reveal
// stats on each tile. Fonts/colors still sit within the site's design
// system so it feels *embedded*, not bolted on.
// =====================================================================

const fmtCount = (n) => n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K' : n.toString();

// Avatar: monogram on sage/brown gradient so it reads as a real profile pic.
const IGAvatar = ({ size = 56, ring = true }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    padding: ring ? 2 : 0,
    background: ring ? 'conic-gradient(from 210deg, #F58529, #DD2A7B, #8134AF, #515BD4, #F58529)' : 'transparent',
    flexShrink: 0,
  }}>
    <div style={{
      width: '100%', height: '100%', borderRadius: '50%',
      background: 'var(--c-bgCream)',
      padding: ring ? 2 : 0,
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--c-primary) 0%, var(--c-accentBrown) 100%)',
        color: 'var(--c-bgCream)',
        display: 'grid', placeItems: 'center',
        fontFamily: FONTS.latin, fontStyle: 'italic', fontSize: size * 0.36,
        letterSpacing: '0.02em',
      }}>j</div>
    </div>
  </div>
);

const IGStoryRing = ({ label, img, useRemote }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0, width: 68 }}>
    <div style={{
      width: 62, height: 62, borderRadius: '50%', padding: 2,
      background: 'conic-gradient(from 210deg, #F58529, #DD2A7B, #8134AF, #515BD4, #F58529)',
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', padding: 2, background: 'var(--c-bgCream)' }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden',
          background: 'var(--c-cardIvory)',
        }}>
          <SmartImage src={IMAGES[img]} label={label} aspect="1 / 1" useRemote={useRemote}/>
        </div>
      </div>
    </div>
    <div style={{
      fontFamily: FONTS.body, fontSize: 10, color: 'var(--c-textDark)',
      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 68,
    }}>{label}</div>
  </div>
);

// Top-right post-type badge (carousel / reel)
const PostTypeBadge = ({ type }) => {
  if (type === 'photo') return null;
  return (
    <div style={{
      position: 'absolute', top: 8, right: 8, zIndex: 2,
      color: '#fff', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))',
    }}>
      <Icon kind={type === 'carousel' ? 'carousel' : 'reel'} size={18}/>
    </div>
  );
};

const IGTile = ({ post, useRemote, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', position: 'relative',
        overflow: 'hidden', cursor: 'pointer',
        background: 'var(--c-cardIvory)',
      }}>
      <SmartImage src={IMAGES[post.img]} label={`post ${post.date}`} aspect="1 / 1" useRemote={useRemote}/>
      <PostTypeBadge type={post.type}/>
      {/* Reel play count lower-left */}
      {post.type === 'reel' && (
        <div style={{
          position: 'absolute', bottom: 8, left: 8,
          color: '#fff', display: 'flex', alignItems: 'center', gap: 4,
          fontFamily: FONTS.body, fontSize: 11, fontWeight: 500,
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
        }}>
          <Icon kind="reel" size={14}/> {fmtCount(post.likes * 8)}
        </div>
      )}
      {/* Hover overlay with stats */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
        opacity: hover ? 1 : 0,
        transition: 'opacity 180ms ease',
        color: '#fff', fontFamily: FONTS.heading, fontWeight: 600, fontSize: 14,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon kind="heart" size={18} color="#fff"/> {fmtCount(post.likes)}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon kind="comment" size={18} color="#fff"/> {post.comments}
        </span>
      </div>
    </a>
  );
};

// ── FULL FEED: profile header + tabs + 3×3 grid ─────────────────────
const InstagramFeed = ({ useRemoteImages, variant = 'full' }) => {
  const [tab, setTab] = React.useState('posts');
  const data = INSTAGRAM;

  // Last-synced timestamp (pretend it's live)
  const [syncedAt] = React.useState(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  });

  return (
    <div style={{
      maxWidth: 1060, margin: '0 auto',
      background: 'var(--c-bgCream)', border: '1px solid var(--c-line)', borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 48px -28px rgba(62,47,30,0.2)',
    }}>
      {/* ── Embed chrome: "Instagram feed · @handle · live sync" ─────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 16px', borderBottom: '1px solid var(--c-line)',
        background: 'var(--c-cardIvory)',
        fontFamily: FONTS.mono, fontSize: 11, color: 'var(--c-textMute)',
      }}>
        <Icon kind="instagram" size={14}/>
        <span style={{ color: 'var(--c-textDark)' }}>Instagram Feed</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>@{data.handle}</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#3BA55D',
            boxShadow: '0 0 0 3px rgba(59,165,93,0.18)',
            animation: 'ig-pulse 2s ease-in-out infinite',
          }}/>
          Synced {syncedAt}
        </span>
      </div>

      {/* ── Profile header ───────────────────────────────────────────── */}
      <div style={{ padding: '28px 28px 20px' }}>
        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <IGAvatar size={96}/>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
              <span style={{ fontFamily: FONTS.body, fontSize: 20, color: 'var(--c-textDark)', fontWeight: 400 }}>
                {data.handle}
              </span>
              <Icon kind="verified" size={18}/>
              <button style={{
                padding: '6px 16px', borderRadius: 8, fontFamily: FONTS.heading, fontSize: 13,
                background: '#0095F6', color: '#fff', border: 'none', cursor: 'pointer',
                fontWeight: 600,
              }}>フォロー</button>
              <button style={{
                padding: '6px 16px', borderRadius: 8, fontFamily: FONTS.heading, fontSize: 13,
                background: 'var(--c-cardIvory)', color: 'var(--c-textDark)',
                border: '1px solid var(--c-line)', cursor: 'pointer',
              }}>メッセージ</button>
            </div>
            <div style={{ display: 'flex', gap: 28, marginBottom: 14, fontFamily: FONTS.body, fontSize: 14, color: 'var(--c-textDark)' }}>
              <span><strong style={{ fontWeight: 700 }}>{data.posts}</strong> <span style={{ color: 'var(--c-textMute)' }}>投稿</span></span>
              <span><strong style={{ fontWeight: 700 }}>{fmtCount(data.followers)}</strong> <span style={{ color: 'var(--c-textMute)' }}>フォロワー</span></span>
              <span><strong style={{ fontWeight: 700 }}>{data.following}</strong> <span style={{ color: 'var(--c-textMute)' }}>フォロー中</span></span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 13, lineHeight: 1.6, color: 'var(--c-textDark)' }}>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{data.name}</div>
              <div style={{ color: 'var(--c-textDark)', whiteSpace: 'pre-line' }}>{data.bio}</div>
              <div style={{ color: 'var(--c-primary)', marginTop: 4 }}>🔗 {data.url}</div>
            </div>
          </div>
        </div>

        {/* Story highlights */}
        <div style={{
          display: 'flex', gap: 16, marginTop: 22,
          overflowX: 'auto', paddingBottom: 4,
        }}>
          {[
            { label: '牧場紹介', img: 'about_farm01' },
            { label: '壮健牛',   img: 'banner_soukengyu' },
            { label: 'ちえのわ',  img: 'banner_chienowa' },
            { label: 'スタッフ',  img: 'staff' },
            { label: '季節便り',  img: 'main_ph04' },
            { label: '採用',      img: 'about_farm02' },
          ].map((h, i) => (
            <IGStoryRing key={i} label={h.label} img={h.img} useRemote={useRemoteImages}/>
          ))}
        </div>
      </div>

      {/* ── Tabs ─────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 48,
        borderTop: '1px solid var(--c-line)',
        fontFamily: FONTS.heading, fontSize: 11, letterSpacing: '0.18em',
      }}>
        {[
          { k: 'posts',  l: 'POSTS' },
          { k: 'reels',  l: 'REELS' },
          { k: 'tagged', l: 'TAGGED' },
        ].map(t => (
          <button key={t.k} onClick={() => setTab(t.k)} style={{
            padding: '16px 4px',
            background: 'transparent', border: 'none',
            borderTop: tab === t.k ? '1px solid var(--c-textDark)' : '1px solid transparent',
            marginTop: -1,
            color: tab === t.k ? 'var(--c-textDark)' : 'var(--c-textMute)',
            cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
            fontWeight: tab === t.k ? 600 : 400,
          }}>{t.l}</button>
        ))}
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3,
        background: 'var(--c-line)',
      }}>
        {(tab === 'reels' ? data.feed.filter(p => p.type === 'reel') : data.feed).map((p, i) => (
          <IGTile key={i} post={p} useRemote={useRemoteImages}/>
        ))}
        {tab === 'tagged' && (
          <div style={{
            gridColumn: '1 / -1', padding: '48px 16px', textAlign: 'center',
            background: 'var(--c-bgCream)',
            fontFamily: FONTS.body, fontSize: 13, color: 'var(--c-textMute)',
          }}>
            タグ付けされた投稿はまだありません
          </div>
        )}
      </div>

      {/* ── Footer: view on Instagram ────────────────────────────────── */}
      <div style={{
        padding: '18px 20px', textAlign: 'center',
        borderTop: '1px solid var(--c-line)', background: 'var(--c-cardIvory)',
      }}>
        <a style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: FONTS.heading, fontSize: 13, color: 'var(--c-textDark)',
          textDecoration: 'none', cursor: 'pointer',
        }}>
          <Icon kind="instagram" size={16}/>
          Instagramで続きを見る <Icon kind="arrow" size={14}/>
        </a>
      </div>
    </div>
  );
};

// ── COMPACT FEED: single post card (for use on home page) ─────────────
const InstagramPostCard = ({ post, useRemoteImages }) => {
  const [liked, setLiked] = React.useState(false);
  return (
    <article style={{
      background: 'var(--c-bgCream)',
      border: '1px solid var(--c-line)', borderRadius: 14,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Post header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px' }}>
        <IGAvatar size={32} ring={true}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: FONTS.body, fontSize: 12, color: 'var(--c-textDark)', fontWeight: 600 }}>
            {INSTAGRAM.handle} <Icon kind="verified" size={12}/>
          </div>
          <div style={{ fontFamily: FONTS.body, fontSize: 10, color: 'var(--c-textMute)' }}>
            北海道 別海町
          </div>
        </div>
        <div style={{ color: 'var(--c-textMute)', fontSize: 18, letterSpacing: 2 }}>⋯</div>
      </div>
      {/* Image */}
      <div style={{ position: 'relative', background: 'var(--c-cardIvory)' }}>
        <SmartImage src={IMAGES[post.img]} label={`post ${post.date}`} aspect="1 / 1" useRemote={useRemoteImages}/>
        <PostTypeBadge type={post.type}/>
      </div>
      {/* Actions */}
      <div style={{ padding: '10px 12px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => setLiked(!liked)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: liked ? '#ED4956' : 'var(--c-textDark)' }}>
          <Icon kind={liked ? 'heart' : 'heartLine'} size={22}/>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--c-textDark)' }}>
          <Icon kind="comment" size={22}/>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--c-textDark)' }}>
          <Icon kind="share" size={22}/>
        </button>
        <button style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--c-textDark)' }}>
          <Icon kind="bookmark" size={22}/>
        </button>
      </div>
      {/* Likes + caption */}
      <div style={{ padding: '8px 12px 14px' }}>
        <div style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 600, color: 'var(--c-textDark)', marginBottom: 4 }}>
          いいね！{fmtCount(post.likes + (liked ? 1 : 0))}件
        </div>
        <div style={{ fontFamily: FONTS.body, fontSize: 12, lineHeight: 1.55, color: 'var(--c-textDark)' }}>
          <strong style={{ fontWeight: 600, marginRight: 6 }}>{INSTAGRAM.handle}</strong>
          {post.caption}
        </div>
        <div style={{ fontFamily: FONTS.body, fontSize: 10, color: 'var(--c-textMute)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {post.date === '1d' ? '1日前' : post.date === '2d' ? '2日前' : post.date}
        </div>
      </div>
    </article>
  );
};

// ── HOME SECTION: 3 post cards in a row + CTA ─────────────────────────
const InstagramHomeStrip = ({ useRemoteImages }) => (
  <div style={{ maxWidth: 1100, margin: '0 auto' }}>
    {/* Handle header bar */}
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '12px 16px', marginBottom: 18,
      background: 'var(--c-bgCream)', border: '1px solid var(--c-line)', borderRadius: 12,
    }}>
      <IGAvatar size={44}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONTS.body, fontSize: 14, color: 'var(--c-textDark)', fontWeight: 600 }}>
          @{INSTAGRAM.handle} <Icon kind="verified" size={14}/>
        </div>
        <div style={{ fontFamily: FONTS.body, fontSize: 11, color: 'var(--c-textMute)' }}>
          {fmtCount(INSTAGRAM.followers)} フォロワー · {INSTAGRAM.posts} 投稿 · 毎日更新中
        </div>
      </div>
      <button style={{
        padding: '8px 18px', borderRadius: 999,
        background: 'var(--c-textDark)', color: 'var(--c-bgCream)',
        border: 'none', cursor: 'pointer',
        fontFamily: FONTS.heading, fontSize: 12, fontWeight: 600,
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        <Icon kind="instagram" size={14}/> フォロー
      </button>
    </div>
    {/* 3-card grid */}
    <div style={{
      display: 'grid', gap: 18,
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    }}>
      {INSTAGRAM.feed.slice(0, 3).map((p, i) => (
        <Reveal key={i} delay={i * 80}>
          <InstagramPostCard post={p} useRemoteImages={useRemoteImages}/>
        </Reveal>
      ))}
    </div>
  </div>
);

Object.assign(window, { InstagramFeed, InstagramHomeStrip, InstagramPostCard });
