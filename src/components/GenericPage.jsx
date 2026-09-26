import { PAGES } from '../data/content.js';

/* Helper: render a single item (supports both old string and new {label,icon,desc} format) */
function Item({ item, accentBg, accentColor, stepNum }) {
  const label = typeof item === 'string' ? item : item.label;
  const icon  = typeof item === 'string' ? '✓'  : item.icon;
  const desc  = typeof item === 'string' ? null : item.desc;

  return (
    <div className={`group flex items-start gap-4 p-4 rounded-2xl border bg-white hover:shadow-md transition-all duration-200 ${desc ? 'hover:-translate-y-0.5' : ''}`}
      style={{ borderColor: '#e2e8f0' }}
    >
      {/* Step number or emoji icon */}
      <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-extrabold border ${accentBg || 'bg-purple-50 border-purple-200'} shadow-sm group-hover:scale-110 transition-transform`}>
        {stepNum !== undefined
          ? <span className={`text-sm font-extrabold ${accentColor || 'text-purple-700'}`}>{String(stepNum + 1).padStart(2, '0')}</span>
          : <span>{icon}</span>
        }
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-slate-900 leading-snug">{label}</p>
        {desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>}
      </div>

      {stepNum !== undefined && (
        <span className="shrink-0 text-slate-300 text-lg font-bold self-center">→</span>
      )}
    </div>
  );
}

export default function GenericPage({ page }) {
  const d = PAGES[page];
  if (!d) return null;

  // Detect if this is a "journey" page (single section with many steps)
  const isJourneyPage = d.sections?.length === 1 && d.sections[0].items?.length > 4;
  const hasStats  = !!d.stats;
  const hasHero   = !!d.heroDesc;
  const accentBg  = d.accentBg  || 'bg-purple-50 border-purple-200';
  const accentColor = d.accentColor || 'text-purple-700';
  const gradient  = d.gradient  || 'from-purple-600 to-indigo-700';

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #3b0764 100%)` }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.1] blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative w-full px-[10%] py-14 sm:py-20 text-white">
          <div className="max-w-3xl">
            {/* Tag badge */}
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border shadow-sm"
              style={{
                color: '#e9d5ff',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                borderColor: 'rgba(216, 180, 254, 0.45)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              {d.tag}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight" style={{ color: '#ffffff' }}>
              {d.title}
            </h1>

            {/* Description */}
            {hasHero && (
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
                style={{ color: '#e2e8f0' }}
              >
                {d.heroDesc}
              </p>
            )}
          </div>

          {/* Stats row */}
          {hasStats && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
              {d.stats.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl text-center backdrop-blur-md"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
                >
                  <p className="font-display font-extrabold text-2xl sm:text-3xl text-white" style={{ color: '#ffffff' }}>{s.value}</p>
                  <p className="text-xs mt-1 font-medium leading-tight" style={{ color: '#cbd5e1' }}>{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="w-full px-[10%] py-12 sm:py-16">

        {/* Journey / single-section page */}
        {isJourneyPage && (() => {
          const sec = d.sections[0];
          return (
            <div>
              {/* Section header */}
              <div className="mb-8 max-w-2xl">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-3 ${accentBg} ${accentColor}`}>
                  <span>{sec.icon}</span>
                  <span>{sec.h}</span>
                </div>
                {sec.desc && (
                  <p className="text-sm text-slate-600 leading-relaxed">{sec.desc}</p>
                )}
              </div>

              {/* Step-by-step grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {sec.items.map((item, j) => (
                  <Item key={j} item={item} accentBg={accentBg} accentColor={accentColor} stepNum={j} />
                ))}
              </div>

              {/* Trust footer */}
              <div className="mt-12 p-6 sm:p-8 rounded-3xl text-center text-white"
                style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#d8b4fe' }}>🛡️ MyCastNow Guarantee</p>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2" style={{ color: '#ffffff' }}>
                  100% Commission-Free. Always.
                </h3>
                <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: '#cbd5e1' }}>
                  Every step of your journey is backed by secure escrow payments, ID-verified connections, and 0% platform commission on your earnings.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>🛡️ ID Verified</span>
                  <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>🔒 Escrow Protected</span>
                  <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>💰 0% Commission</span>
                  <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>⚡ Direct Hire</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Multi-section page */}
        {!isJourneyPage && (
          <div className="space-y-10">
            {d.sections.map((sec, i) => (
              <div key={i}>
                {/* Section card */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  {/* Section header band */}
                  <div className={`px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3`}
                    style={{ background: 'linear-gradient(to right, #fafafa, #f8fafc)' }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border ${accentBg} shadow-sm`}>
                      {sec.icon || '📋'}
                    </div>
                    <div>
                      <h2 className={`font-display font-extrabold text-lg text-slate-900`}>{sec.h}</h2>
                      {sec.desc && <p className="text-xs text-slate-500 mt-0.5">{sec.desc}</p>}
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sec.items.map((item, j) => (
                      <Item key={j} item={item} accentBg={accentBg} accentColor={accentColor} />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom CTA for non-journey pages */}
            <div className="mt-6 p-6 sm:p-8 rounded-3xl text-center text-white"
              style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#d8b4fe' }}>Get Started</p>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-1" style={{ color: '#ffffff' }}>
                Ready to experience MyCastNow?
              </h3>
              <p className="text-sm max-w-md mx-auto mt-1" style={{ color: '#cbd5e1' }}>
                Join India's leading verified talent marketplace — free to sign up.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>🛡️ ID Verified</span>
                <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>🔒 Escrow Protected</span>
                <span className="px-4 py-2 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>💰 0% Commission</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
