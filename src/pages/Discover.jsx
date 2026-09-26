import { useState, useEffect } from 'react';
import { TALENTS, FILTER_DEFS, SORTS } from '../data/content.js';
import TalentDetailModal from '../components/TalentDetailModal.jsx';

function FilterChip({ def, value, isOpen, onToggle, onChange }) {
  return (
    <div className="relative filter-chip-container">
      <button
        type="button"
        className={`chip flex items-center gap-1.5 transition-all ${value ? 'active' : ''} ${isOpen ? 'border-purple-600 ring-2 ring-purple-100 text-purple-700' : ''}`}
        onClick={onToggle}
      >
        <span>{value ? `${def.label}: ${value}` : def.label}</span>
        {value ? (
          <span
            className="ml-1 w-4 h-4 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-[10px] font-bold"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
            title="Clear filter"
          >
            ✕
          </span>
        ) : (
          <span className={`text-[10px] text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-600' : ''}`}>
            ▾
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 min-w-[200px] w-max max-w-xs bg-white rounded-xl shadow-2xl border border-slate-200 p-1.5 flex flex-col gap-0.5 animate-fadeIn">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            {def.label}
          </div>
          {def.options.map((opt) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-colors flex items-center justify-between whitespace-nowrap ${
                  isSelected
                    ? 'bg-purple-50 text-purple-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 font-medium'
                }`}
                onClick={() => {
                  onChange(isSelected ? null : opt);
                  onToggle();
                }}
              >
                <span>{opt}</span>
                {isSelected && <span className="text-purple-600 font-bold text-xs">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Talent Card ─────────────────────────────────────────── */
function TalentCard({ t, inCart, addToCart, onView }) {
  const roleColors = {
    Actor:          { bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200' },
    Model:          { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200' },
    Dancer:         { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200' },
    'Voice Artist': { bg: 'bg-cyan-50',    text: 'text-cyan-700',    border: 'border-cyan-200' },
  };
  const rc = roleColors[t.role] || { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' };

  return (
    <div
      onClick={() => onView(t)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-purple-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={t.image}
          alt={t.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10 pointer-events-none">
          <div className="flex flex-col gap-1.5">
            {t.verified && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-purple-700 border border-purple-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
                Verified
              </span>
            )}
            {t.boosted && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white shadow-sm">
                ★ Boosted
              </span>
            )}
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rc.bg} ${rc.text} ${rc.border} backdrop-blur-md bg-opacity-95`}>
            {t.role}
          </span>
        </div>

        {/* Rating badge on photo */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 pointer-events-none">
          <span className="text-amber-400 text-xs">★</span>
          <span className="text-white text-xs font-bold">{t.rating.toFixed(1)}</span>
          <span className="text-slate-400 text-[10px]">({t.reviewsCount || 20})</span>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-purple-700 font-bold text-xs shadow-xl border border-purple-200">
            <span>👁️</span>
            <span>View Full Profile</span>
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name & Location */}
        <div>
          <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-purple-700 transition-colors leading-tight">
            {t.name}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
            <span>📍</span>
            <span>{t.location}</span>
            <span className="text-slate-300 mx-0.5">·</span>
            <span>{t.age}</span>
          </p>
        </div>

        {/* Skill tag */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100 font-semibold">
            ✨ {t.skill}
          </span>
          {t.languages?.slice(0, 2).map((l, i) => (
            <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
              {l}
            </span>
          ))}
        </div>

        {/* Rate & Availability */}
        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] text-slate-400 font-medium block">Day Rate</span>
            <span className="font-extrabold text-slate-900 text-sm">{t.pricingRate?.split('/')[0] || t.budget}</span>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
            t.availability === 'Flexible'
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            📅 {t.availability}
          </span>
        </div>

        {/* CTA Row */}
        <div className="mt-auto pt-2 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onView(t); }}
            className="flex-1 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors shadow-sm shadow-purple-500/25 flex items-center justify-center gap-1"
          >
            <span>View Profile →</span>
          </button>
          {addToCart && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); addToCart(t); }}
              className={`py-1.5 px-2.5 rounded-xl text-[11px] font-semibold transition-all border flex-shrink-0 ${
                inCart
                  ? 'bg-slate-900 text-white border-transparent shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-purple-300 hover:text-purple-700'
              }`}
              title={inCart ? 'Shortlisted' : 'Add to Shortlist'}
            >
              {inCart ? '✓' : '+'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ───────────────────────────────────────────── */
export default function Discover({ addToCart, cart = [] }) {
  const [filters, setFilters]           = useState({});
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sort, setSort]                 = useState('Relevance');
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.filter-chip-container')) setOpenDropdown(null);
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpenDropdown(null);
    }
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [openDropdown]);

  const setFilter   = (key, val) => setFilters((f) => ({ ...f, [key]: val }));
  const activeCount = Object.values(filters).filter(Boolean).length + (verifiedOnly ? 1 : 0);

  let list = TALENTS.filter((t) =>
    Object.entries(filters).every(([k, v]) => !v || t[k] === v) && (!verifiedOnly || t.verified)
  );
  list = [...list].sort(SORTS[sort]);
  if (sort === 'Newest') list.reverse();

  const stats = [
    { label: 'Verified Creators', value: TALENTS.filter(t => t.verified).length + '+' },
    { label: 'Categories', value: [...new Set(TALENTS.map(t => t.role))].length },
    { label: 'Cities', value: [...new Set(TALENTS.map(t => t.location))].length },
    { label: 'Avg Rating', value: (TALENTS.reduce((s, t) => s + t.rating, 0) / TALENTS.length).toFixed(1) + '★' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden py-12 sm:py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #3b0764 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-widest text-purple-300 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Verified Talent Directory
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Find the right creator, <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #a78bfa, #60a5fa)' }}>fast</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Browse {TALENTS.length}+ verified actors, models, dancers & voiceover artists.
            Click any profile to view full portfolio, rates, and book directly.
          </p>

          {/* Mini Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10 text-center">
                <p className="font-display font-extrabold text-xl text-white">{s.value}</p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter & Sort Section ── */}
      <div className="w-full px-[5%] sm:px-[8%] lg:px-[10%] py-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
          {/* Filter Row */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span>🔍</span> Filters
            </p>
            {activeCount > 0 && (
              <button
                className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1"
                onClick={() => { setFilters({}); setVerifiedOnly(false); setOpenDropdown(null); }}
              >
                ✕ Clear all ({activeCount})
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTER_DEFS.map((def) => (
              <FilterChip
                key={def.key}
                def={def}
                value={filters[def.key]}
                isOpen={openDropdown === def.key}
                onToggle={() => setOpenDropdown(openDropdown === def.key ? null : def.key)}
                onChange={(v) => setFilter(def.key, v)}
              />
            ))}
            <button
              type="button"
              className={'chip ' + (verifiedOnly ? 'active' : '')}
              onClick={() => setVerifiedOnly((v) => !v)}
            >
              {verifiedOnly ? '✓ Verified only' : 'Verified only'}
            </button>
          </div>

          {/* Sort Row */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-500 mr-1">Sort:</span>
            {Object.keys(SORTS).map((s) => (
              <button
                key={s}
                className={'chip ' + (sort === s ? 'active' : '')}
                onClick={() => setSort(s)}
              >
                {s}
              </button>
            ))}
            <span className="ml-auto text-xs text-slate-500 font-medium">
              {list.length} creator{list.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>

        {/* ── Results Grid ── */}
        {list.length === 0 ? (
          <div className="mt-10 text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-5xl mb-4">🔎</div>
            <p className="font-display font-bold text-xl text-slate-800">No creators match these filters</p>
            <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto">Try clearing some filter criteria to see more profiles.</p>
            <button
              className="btn-primary mt-6 text-sm"
              onClick={() => { setFilters({}); setVerifiedOnly(false); }}
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {list.map((t) => {
                const inCart = cart?.some((c) => (c.id || c.name) === (t.id || t.name));
                return (
                  <TalentCard
                    key={t.id || t.name}
                    t={t}
                    inCart={inCart}
                    addToCart={addToCart}
                    onView={setSelectedTalent}
                  />
                );
              })}
            </div>

            {/* Load-more CTA placeholder */}
            <div className="mt-10 text-center">
              <p className="text-xs text-slate-500 mb-3">
                Showing all <strong>{list.length}</strong> creators matching your search
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold">
                ✓ All results loaded
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Talent Detail Modal ── */}
      {selectedTalent && (
        <TalentDetailModal
          talent={selectedTalent}
          onClose={() => setSelectedTalent(null)}
        />
      )}
    </div>
  );
}
