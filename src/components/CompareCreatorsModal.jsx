import { useEffect } from 'react';

export default function CompareCreatorsModal({ creators = [], onClose, onRemove, addToCart, cart = [] }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!creators || creators.length === 0) return null;

  const [c1, c2] = creators;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold transition-colors focus:outline-none"
          aria-label="Close comparison"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5">
            <span>⚖️</span>
            <span>CREATOR COMPARISON</span>
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
            Side-by-Side Talent Compare
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare day rates, acting/modeling skills, experience, and past brands to make the right casting decision.
          </p>
        </div>

        {/* Comparison Header Columns */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 border-b border-slate-200 pb-6">
          {/* Creator 1 */}
          {c1 && (
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-purple-50/40 border border-purple-100 relative group">
              <button
                onClick={() => onRemove(c1.id || c1.name)}
                title="Remove from compare"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-md">
                <img src={c1.image} alt={c1.name} className="w-full h-full object-cover object-top" />
                {c1.verified && (
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.2 rounded-full bg-purple-600 text-white text-[9px] font-bold">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">CREATOR 1</span>
                <h3 className="font-display font-bold text-lg text-slate-900 truncate">{c1.name}</h3>
                <p className="text-xs text-slate-600">{c1.role} · 📍 {c1.location}</p>
                <p className="font-bold text-sm text-slate-900 mt-1.5">{c1.pricingRate?.split('/')[0] || c1.budget} <span className="text-xs font-normal text-slate-500">/day</span></p>
                {addToCart && (
                  <button
                    onClick={() => addToCart(c1)}
                    className="mt-2.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-xs transition-colors"
                  >
                    {cart.some((c) => (c.id || c.name) === (c1.id || c1.name)) ? '✓ Shortlisted' : '+ Shortlist'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Creator 2 (or placeholder if only 1 selected) */}
          {c2 ? (
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 relative group">
              <button
                onClick={() => onRemove(c2.id || c2.name)}
                title="Remove from compare"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center shadow hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-md">
                <img src={c2.image} alt={c2.name} className="w-full h-full object-cover object-top" />
                {c2.verified && (
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.2 rounded-full bg-indigo-600 text-white text-[9px] font-bold">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">CREATOR 2</span>
                <h3 className="font-display font-bold text-lg text-slate-900 truncate">{c2.name}</h3>
                <p className="text-xs text-slate-600">{c2.role} · 📍 {c2.location}</p>
                <p className="font-bold text-sm text-slate-900 mt-1.5">{c2.pricingRate?.split('/')[0] || c2.budget} <span className="text-xs font-normal text-slate-500">/day</span></p>
                {addToCart && (
                  <button
                    onClick={() => addToCart(c2)}
                    className="mt-2.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
                  >
                    {cart.some((c) => (c.id || c.name) === (c2.id || c2.name)) ? '✓ Shortlisted' : '+ Shortlist'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center">
              <span className="text-3xl mb-2">👤</span>
              <p className="font-bold text-slate-700 text-sm">Select 2nd Creator</p>
              <p className="text-xs text-slate-500 mt-1">Click "⚖️ Compare" on any other creator card to view them side-by-side.</p>
            </div>
          )}
        </div>

        {/* Detailed Comparison Metrics */}
        {c1 && c2 && (
          <div className="mt-6 space-y-3 text-xs sm:text-sm">
            {/* Metric Row: Day Rate */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                💰 Day Rate
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="font-extrabold text-purple-700 text-base">{c1.pricingRate || c1.budget}</span>
                <span className="font-extrabold text-indigo-700 text-base">{c2.pricingRate || c2.budget}</span>
              </div>
            </div>

            {/* Metric Row: Rating & Reviews */}
            <div className="p-3 rounded-xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                ⭐ Rating & Reviews
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="font-semibold text-slate-800">★ {c1.rating} <span className="text-slate-400 font-normal">({c1.reviewsCount || 20}+ reviews)</span></span>
                <span className="font-semibold text-slate-800">★ {c2.rating} <span className="text-slate-400 font-normal">({c2.reviewsCount || 20}+ reviews)</span></span>
              </div>
            </div>

            {/* Metric Row: Availability */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                📅 Availability
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold inline-block mx-auto text-xs">{c1.availability || 'Flexible'}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold inline-block mx-auto text-xs">{c2.availability || 'Flexible'}</span>
              </div>
            </div>

            {/* Metric Row: Experience */}
            <div className="p-3 rounded-xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                ⏳ Experience
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="text-slate-700 font-medium">{c1.experience || '3+ Years on set'}</span>
                <span className="text-slate-700 font-medium">{c2.experience || '3+ Years on set'}</span>
              </div>
            </div>

            {/* Metric Row: Primary Skill */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                🎯 Key Skill
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold text-xs inline-block mx-auto">{c1.skill}</span>
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold text-xs inline-block mx-auto">{c2.skill}</span>
              </div>
            </div>

            {/* Metric Row: Physical Specs */}
            <div className="p-3 rounded-xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                📏 Age & Height
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="text-slate-700 font-medium">Age: {c1.age} · Height: {c1.height || '5\'8"'}</span>
                <span className="text-slate-700 font-medium">Age: {c2.age} · Height: {c2.height || '5\'10"'}</span>
              </div>
            </div>

            {/* Metric Row: Languages */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                🗣️ Languages
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <span className="text-slate-700 font-medium">{c1.languages?.join(', ') || 'Hindi, English'}</span>
                <span className="text-slate-700 font-medium">{c2.languages?.join(', ') || 'Hindi, English'}</span>
              </div>
            </div>

            {/* Metric Row: Past Brands */}
            <div className="p-3 rounded-xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:w-1/4">
                🏷️ Past Brands
              </span>
              <div className="grid grid-cols-2 gap-4 flex-1 text-center w-full">
                <div className="flex flex-wrap justify-center gap-1">
                  {(c1.pastBrands || ['Commercials', 'Campaigns']).map((b, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">{b}</span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  {(c2.pastBrands || ['Commercials', 'Campaigns']).map((b, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Tip: You can shortlist both candidates to compare auditions with your team in the Talent Cart.
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Done Comparing
          </button>
        </div>
      </div>
    </div>
  );
}
