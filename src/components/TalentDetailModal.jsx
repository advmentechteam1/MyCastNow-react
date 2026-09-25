import { useEffect, useState } from 'react';

const ROLE_STYLES = {
  Actor:          { badge: 'bg-violet-600', light: 'bg-violet-50 text-violet-700 border-violet-200' },
  Model:          { badge: 'bg-rose-600',   light: 'bg-rose-50 text-rose-700 border-rose-200' },
  Dancer:         { badge: 'bg-amber-500',  light: 'bg-amber-50 text-amber-700 border-amber-200' },
  'Voice Artist': { badge: 'bg-cyan-600',   light: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
};

function StatPill({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
      <span className="text-lg mb-0.5">{icon}</span>
      <span className="font-extrabold text-sm text-slate-900">{value}</span>
      <span className="text-[10px] text-slate-500 font-medium mt-0.5">{label}</span>
    </div>
  );
}

export default function TalentDetailModal({ talent, onClose, onHire }) {
  const [shortlisted, setShortlisted] = useState(false);
  const [hireSent, setHireSent]       = useState(false);
  const [activeTab, setActiveTab]     = useState('overview');

  useEffect(() => {
    function handleKeyDown(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!talent) return null;

  const rs = ROLE_STYLES[talent.role] || { badge: 'bg-purple-600', light: 'bg-purple-50 text-purple-700 border-purple-200' };

  const tabs = [
    { id: 'overview',  label: 'Overview' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'rates',     label: 'Rates & Booking' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.2s ease' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[94vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{ border: '1px solid rgba(0,0,0,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Close Button ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold transition-colors focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* ── Scrollable Content ── */}
        <div className="overflow-y-auto flex-1">

          {/* ─── Hero Photo + Name ─── */}
          <div className="relative">
            {/* Full-width hero image */}
            <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-slate-900">
              <img
                src={talent.image}
                alt={talent.name}
                className="w-full h-full object-cover object-top opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              {/* Badges on photo */}
              <div className="absolute top-4 left-5 flex flex-col gap-2">
                {talent.verified && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-purple-700 shadow-md border border-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
                    ID Verified
                  </span>
                )}
                {talent.boosted && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-white shadow-md">
                    ★ Boosted Profile
                  </span>
                )}
              </div>

              {/* Name overlay on photo */}
              <div className="absolute bottom-5 left-5 right-14 sm:right-10">
                <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border mb-2 ${rs.light}`}>
                  {talent.role}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {talent.name}
                </h2>
                <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                  <span>📍 {talent.location}</span>
                  <span className="text-slate-600">·</span>
                  <span>Age {talent.age}</span>
                  {talent.height && (
                    <>
                      <span className="text-slate-600">·</span>
                      <span>{talent.height}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Thumbnail avatar + rating */}
            <div className="px-5 sm:px-8 -mt-10 flex items-end justify-between relative z-20">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-slate-100 shrink-0">
                <img src={talent.image} alt={talent.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-amber-500">
                  ★ {talent.rating.toFixed(1)}
                  <span className="text-slate-400 font-normal text-xs">({talent.reviewsCount || 25} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Quick Stats ─── */}
          <div className="px-5 sm:px-8 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatPill icon="💰" label="Day Rate"      value={talent.pricingRate?.split('/')[0] || talent.budget} />
            <StatPill icon="📅" label="Availability"  value={talent.availability} />
            <StatPill icon="⏳" label="Experience"    value={talent.experience?.split(' ')[0] + ' ' + talent.experience?.split(' ')[1] || '3+ Yrs'} />
            <StatPill icon="🗣️" label="Languages"    value={talent.languages?.length ? `${talent.languages.length} lang.` : '—'} />
          </div>

          {/* ─── Tabs ─── */}
          <div className="px-5 sm:px-8 mt-6">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 gap-0.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                    activeTab === tab.id
                      ? 'bg-white text-purple-700 shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Tab Content ─── */}
          <div className="px-5 sm:px-8 mt-5 pb-6">

            {/* ── Overview Tab ── */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                {/* Bio */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">About</h3>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100">
                    {talent.bio}
                  </p>
                </div>

                {/* Languages + Height */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">🗣️ Languages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {(talent.languages || ['Hindi', 'English']).map((l, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">📐 Physical Details</p>
                    <p className="text-sm font-bold text-slate-900">Height: {talent.height || 'N/A'}</p>
                    <p className="text-xs text-slate-600 mt-1">Age Range: {talent.age}</p>
                  </div>
                </div>

                {/* Specialties */}
                {talent.specialties && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">✨ Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {talent.specialties.map((spec, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full border font-semibold ${rs.light}`}>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Past Brands */}
                {talent.pastBrands && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">🏷️ Past Brands & Clients</h3>
                    <div className="flex flex-wrap gap-2">
                      {talent.pastBrands.map((b, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold shadow-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {talent.experience && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-1">⏳ Experience</p>
                    <p className="text-sm font-bold text-slate-900">{talent.experience}</p>
                  </div>
                )}
              </div>
            )}

            {/* ── Portfolio Tab ── */}
            {activeTab === 'portfolio' && (
              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative group">
                      <img
                        src={talent.image}
                        alt={`Portfolio ${i}`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                        style={{ filter: i === 2 ? 'saturate(0.7)' : i === 3 ? 'contrast(1.1)' : 'none' }}
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                        <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white text-center">
                  <span className="text-3xl block mb-2">🎬</span>
                  <p className="font-bold text-slate-800 text-sm">Showreel Available</p>
                  <p className="text-xs text-slate-500 mt-1">Contact this creator directly to request their full showreel video.</p>
                  <button className="btn-primary mt-4 text-xs py-2 px-5">
                    Request Showreel →
                  </button>
                </div>

                {/* Skills & Specialties */}
                {talent.specialties && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Skills & Specializations</h3>
                    <div className="space-y-2">
                      {talent.specialties.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                          <span className="text-sm text-slate-800 font-semibold">{spec}</span>
                          <div className="ml-auto flex gap-1">
                            {[...Array(5)].map((_, j) => (
                              <span key={j} className={`w-2 h-2 rounded-full ${j < 4 ? 'bg-purple-500' : 'bg-slate-200'}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Rates & Booking Tab ── */}
            {activeTab === 'rates' && (
              <div className="space-y-4">
                {/* Rate Card */}
                <div
                  className="p-6 rounded-2xl text-white relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #3b0764 100%)' }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                    style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-purple-300 mb-1">Day Rate</p>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                    {talent.pricingRate?.split('/')[0] || talent.budget}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    {talent.pricingRate?.includes('/') ? `Per ${talent.pricingRate.split('/')[1]?.trim()}` : 'Per booking'}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-slate-400 mb-0.5">Availability</p>
                      <p className="font-bold text-white">{talent.availability}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-0.5">Commission</p>
                      <p className="font-bold text-emerald-400">0% — Keep 100%</p>
                    </div>
                  </div>
                </div>

                {/* What's included */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-sm text-slate-900 mb-3">What's included in a booking:</h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {[
                      'Direct messaging and brief discussion',
                      'Signed digital agreement / NDA',
                      'Secure escrow payment protection',
                      'HD portfolio delivery (if required)',
                      'Verified rating & review post-shoot',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Escrow note */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                  <span className="text-lg shrink-0">🔒</span>
                  <div>
                    <p className="font-bold mb-0.5">Escrow Protected</p>
                    <p>Your payment is held securely in MyCastNow Escrow and released only after shoot completion — protecting both parties.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Sticky Footer CTA ── */}
        <div className="shrink-0 border-t border-slate-100 bg-white px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-slate-900 truncate">{talent.name}</p>
            <p className="text-xs text-slate-500">{talent.role} · {talent.location}</p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShortlisted((s) => !s)}
              className={`py-2.5 px-4 rounded-full text-sm font-semibold border transition-all flex-1 sm:flex-none whitespace-nowrap ${
                shortlisted
                  ? 'bg-purple-50 border-purple-300 text-purple-700'
                  : 'bg-white border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700'
              }`}
            >
              {shortlisted ? '✓ Shortlisted' : '+ Shortlist'}
            </button>
            <button
              onClick={() => {
                setHireSent(true);
                if (onHire) onHire(talent);
              }}
              className={`flex-1 sm:flex-none py-2.5 px-5 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-md ${
                hireSent
                  ? 'bg-emerald-600 text-white shadow-emerald-500/25'
                  : 'btn-primary'
              }`}
            >
              {hireSent ? '✓ Request Sent!' : `Hire ${talent.name.split(' ')[0]} →`}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
