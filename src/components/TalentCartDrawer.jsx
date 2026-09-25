import { useState } from 'react';

export default function TalentCartDrawer({ isOpen, onClose, cart, onRemove, onClear, go }) {
  const [submitted, setSubmitted] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');

  if (!isOpen) return null;

  const handleSendHiring = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-slideLeft border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">Talent Cart</h2>
              <p className="text-xs text-muted">{cart.length} creator{cart.length !== 1 ? 's' : ''} shortlisted</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          {cart.length === 0 ? (
            <div className="py-20 text-center">
              <span className="text-4xl block mb-3">🎭</span>
              <h3 className="font-display font-bold text-base text-slate-800">Your cart is empty</h3>
              <p className="text-xs text-muted mt-1 max-w-xs mx-auto">
                Browse our verified actors, models, dancers and voice artists, and click "+ Add to Cart" to shortlist them.
              </p>
              <button
                onClick={() => {
                  onClose();
                  go('discover');
                }}
                className="btn-primary mt-6 text-xs px-6 py-2.5"
              >
                Browse Discover Talent →
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 mt-4">
              {cart.map((talent) => (
                <div key={talent.id || talent.name} className="py-3 flex items-center gap-3">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-14 h-14 rounded-xl object-cover object-top border border-slate-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm text-slate-900 truncate">{talent.name}</p>
                    <p className="text-xs text-muted">{talent.role} · {talent.location}</p>
                    <p className="text-xs font-semibold text-purple-700 mt-0.5">{talent.pricingRate || 'Negotiable'}</p>
                  </div>
                  <button
                    onClick={() => onRemove(talent.id || talent.name)}
                    className="text-xs text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                    title="Remove from cart"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <div className="pt-3 flex justify-between items-center text-xs">
                <button
                  onClick={onClear}
                  className="text-rose-600 hover:underline font-medium"
                >
                  Clear all ({cart.length})
                </button>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                  Direct Hire Eligible
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout / Hire Form */}
        {cart.length > 0 && (
          <div className="pt-6 border-t border-slate-200">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                <span className="text-2xl block mb-1">✅</span>
                <p className="font-bold text-sm text-emerald-800">Hire Requests Dispatched!</p>
                <p className="text-xs text-emerald-700 mt-1">
                  Availability inquiries sent to {cart.length} creators. You'll receive their responses in your dashboard.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClear();
                    onClose();
                  }}
                  className="mt-3 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendHiring} className="space-y-3">
                <input
                  required
                  type="text"
                  placeholder="Project / Shoot Name (e.g. Summer Lookbook)"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 text-sm font-semibold shadow-md"
                >
                  Send Hire Requests to All ({cart.length}) →
                </button>
                <p className="text-[11px] text-center text-muted">
                  No advance payment required until terms are agreed upon.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
