import { useState, useEffect } from 'react';

export default function CastingDetailModal({ casting, onClose }) {
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reelLink: '',
    note: ''
  });

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!casting) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-700">
            {casting.category}
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
            {casting.status || 'Active'}
          </span>
          <span className="text-xs text-muted">
            📍 {casting.location}
          </span>
        </div>

        <h2 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
          {casting.title}
        </h2>

        <p className="text-sm font-semibold text-purple-600 mt-1">
          Posted by {casting.company}
        </p>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-muted block mb-1">Budget / Compensation</span>
            <span className="font-bold text-slate-900 text-sm">{casting.budget}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-muted block mb-1">Shoot Dates</span>
            <span className="font-semibold text-slate-800">{casting.shootDates || 'TBD'}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
            <span className="text-muted block mb-1">Deadline</span>
            <span className="font-semibold text-rose-600">{casting.deadline}</span>
          </div>
        </div>

        {/* Description & Requirements */}
        <div className="space-y-4 text-sm text-slate-700 border-t border-slate-100 pt-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Project Synopsis</h4>
            <p className="leading-relaxed text-slate-600">{casting.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Role Requirements</h4>
            <p className="leading-relaxed text-slate-600">{casting.requirements}</p>
          </div>

          {casting.tags && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {casting.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Apply Section */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          {applied ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
              <span className="text-3xl block mb-2">🎉</span>
              <h3 className="font-display font-bold text-lg text-emerald-800">Application Submitted!</h3>
              <p className="text-sm text-emerald-700 mt-1 max-w-md mx-auto">
                Your profile & audition reel have been shared with <strong>{casting.company}</strong>. If shortlisted, they will contact you via WhatsApp or Email.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="font-display font-bold text-base text-slate-900">Apply for this Casting</h4>
              <p className="text-xs text-muted mb-2">Submit your contact info and showreel link. 100% free to apply.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp / Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <input
                required
                type="url"
                placeholder="Showreel / Portfolio Video Link (YouTube, Drive, Instagram)"
                value={formData.reelLink}
                onChange={(e) => setFormData({ ...formData, reelLink: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />

              <textarea
                placeholder="Short note to the casting team (e.g. your experience, dialect, availability)..."
                rows="2"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              ></textarea>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-ghost flex-1 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 py-2 text-sm font-semibold"
                >
                  Submit Application →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
