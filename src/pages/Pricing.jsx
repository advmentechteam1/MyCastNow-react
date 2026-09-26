import { useState } from 'react';
import { PRICING_TIERS } from '../data/content.js';

export default function Pricing({ go }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="w-full px-[5%] sm:px-[8%] lg:px-[10%] py-12 sm:py-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          TRANSPARENT MARKETPLACE PRICING
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Predictable plans for artists and casting teams
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Zero commissions on talent bookings. Keep 100% of what you earn. Upgrade for priority casting discovery and unlimited applications.
        </p>

        {/* Billing Switcher */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full transition-all ${
              !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 focus:outline-none ${
              isAnnual ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-900 text-[10px] font-bold">SAVE 25%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PRICING_TIERS.map((plan) => (
          <div
            key={plan.id}
            className={`card p-6 sm:p-8 flex flex-col justify-between relative bg-white transition-all duration-300 ${
              plan.popular
                ? 'border-2 border-purple-600 shadow-xl ring-4 ring-purple-100'
                : 'hover:shadow-lg'
            }`}
          >
            {plan.badge && (
              <span
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, #2563EB, #7C3AED)'
                    : '#0F172A',
                }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-white text-[11px] font-bold tracking-wide uppercase shadow-md whitespace-nowrap border border-white/20"
              >
                {plan.badge}
              </span>
            )}

            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">{plan.name}</h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">{plan.desc}</p>

              {/* Price */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <span className="font-display text-4xl font-extrabold text-slate-900">
                  {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-xs text-muted ml-2 font-medium">
                  {plan.id === 'free' ? 'forever free' : isAnnual ? '/ month (billed yearly)' : '/ month'}
                </span>
              </div>

              {/* Feature List */}
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Included Features:</p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all shadow-sm ${
                  plan.popular
                    ? 'btn-primary shadow-purple-500/25'
                    : 'btn-ghost hover:border-purple-300'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Plan Selected Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedPlan(null)}>
          <div className="card bg-white p-6 sm:p-8 max-w-md w-full shadow-2xl rounded-2xl text-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-4xl block mb-2">🎉</span>
            <h3 className="font-display font-bold text-xl text-slate-900">You selected {selectedPlan.name}!</h3>
            <p className="text-xs text-muted mt-2">
              Rate: <strong>{isAnnual ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice}</strong> {isAnnual ? '/mo (billed annually)' : '/mo'}.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-purple-50 text-purple-800 text-xs text-left space-y-1.5 border border-purple-100">
              <p className="font-bold">Next steps:</p>
              <p>1. Complete your creator or hirer registration.</p>
              <p>2. Verify your government ID for instant priority badge.</p>
              <p>3. Start applying or hiring with 0% commission.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setSelectedPlan(null)} className="btn-ghost flex-1 py-2 text-xs">
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  if (go) go('auth');
                }}
                className="btn-primary flex-1 py-2 text-xs font-semibold"
              >
                Proceed to Sign Up →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
