import { useState } from 'react';

export default function HowItWorks({ go }) {
  const [activeTab, setActiveTab] = useState('creator');
  const [daysPerMonth, setDaysPerMonth] = useState(4);
  const [ratePerDay, setRatePerDay] = useState(25000);

  const estimatedMonthly = daysPerMonth * ratePerDay;
  const annualEarning = estimatedMonthly * 12;

  const creatorSteps = [
    {
      num: '01',
      title: 'Build a Smart Casting Portfolio',
      desc: 'Create your digital profile in under 5 minutes. Upload professional headshots, full-body editorial shots, showreels, and vocal samples. Add languages, physical specs, and past client credits.',
      tip: 'Pro tip: Profiles with 3+ high-res photos get 4x more direct booking invitations.'
    },
    {
      num: '02',
      title: 'Get 100% ID Verified & Boosted',
      desc: 'Submit your ID and a 10-second verification video. Our team approves your blue badge within 24 hours. The badge establishes immediate trust with casting directors and studios.',
      tip: 'Safety guaranteed: Your private ID documents are never shared publicly.'
    },
    {
      num: '03',
      title: 'Apply to Castings or Get Direct Hire Requests',
      desc: 'Browse daily paid casting calls from Bollywood films, web series, and TVCs. Or simply set your calendar availability and let studios send direct hire requests to your inbox.',
      tip: 'Zero middleman: Chat directly with casting teams over verified messaging.'
    },
    {
      num: '04',
      title: 'Protected Escrow & Instant Payouts',
      desc: 'Before your shoot starts, the client deposits full compensation into MyCastNow Escrow. Upon project completion, funds are instantly disbursed to your verified bank account.',
      tip: 'Zero commission: What you quote is 100% what you take home.'
    }
  ];

  const companySteps = [
    {
      num: '01',
      title: 'Search & Filter Pre-Vetted Talent',
      desc: 'Filter our database of 15,000+ artists by role, city, age range, height, dialect, and daily rate. View full high-definition video showreels without paywalls.',
      tip: 'Speed: Save over 80% of traditional scouting and audition time.'
    },
    {
      num: '02',
      title: 'Collaborate with Talent Cart',
      desc: 'Shortlist potential actors and models into your project Talent Cart. Share candidate reels directly with directors, clients, and producers for immediate group feedback.',
      tip: 'Organize by scene, campaign, or character requirements.'
    },
    {
      num: '03',
      title: 'Post Targeted Casting Calls',
      desc: 'Need specific character requirements? Post a detailed Casting Call specifying budget, shoot dates, and audition monologues. Receive video self-tapes in hours.',
      tip: 'Reach: Average casting call receives 35+ verified applications within 48 hours.'
    },
    {
      num: '04',
      title: 'One-Click Contracts & Milestone Escrow',
      desc: 'Standard digital casting agreements, NDAs, and secure escrow deposits safeguard your production budget until shoot delivery.',
      tip: 'Compliance: Full GST invoices and documented usage rights provided.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          HOW IT WORKS
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          One transparent marketplace, two seamless journeys
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Whether you are an aspiring actor looking for your big break or a producer casting an entire web series, MyCastNow makes it effortless.
        </p>

        {/* Tab Toggle */}
        <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
          <button
            onClick={() => setActiveTab('creator')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
              activeTab === 'creator'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            I Want to Get Cast (Creators) 🎭
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
              activeTab === 'company'
                ? 'bg-white text-purple-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            I Want to Hire Talent (Studios) 🎬
          </button>
        </div>
      </div>

      {/* Steps List */}
      <div className="mt-12 space-y-6">
        {(activeTab === 'creator' ? creatorSteps : companySteps).map((s) => (
          <div
            key={s.num}
            className="card p-6 sm:p-8 bg-white flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center font-display font-extrabold text-2xl text-purple-700 shrink-0">
              {s.num}
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                <span>💡</span>
                <span>{s.tip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Creator Earnings Calculator */}
      {activeTab === 'creator' && (
        <div className="mt-14 card p-6 sm:p-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-200 shadow-md">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">EARNINGS CALCULATOR</span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">Estimate your potential creator income</h3>
            <p className="text-xs text-slate-600 mt-1">Calculate how much you take home with 0% agency commissions.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span>Shoots / Bookings Per Month:</span>
                  <span className="text-purple-700 font-bold text-sm">{daysPerMonth} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span>Your Average Day Rate:</span>
                  <span className="text-purple-700 font-bold text-sm">₹{ratePerDay.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={ratePerDay}
                  onChange={(e) => setRatePerDay(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-lg text-center space-y-3">
              <p className="text-xs font-semibold text-muted">Estimated Monthly Take-Home</p>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-purple-700">
                ₹{estimatedMonthly.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1 px-3 rounded-full inline-block">
                ≈ ₹{annualEarning.toLocaleString('en-IN')} / year (Keep 100%)
              </p>
              <button
                onClick={() => go('auth')}
                className="btn-primary w-full mt-3 py-2.5 text-xs font-semibold"
              >
                Create Creator Profile Now →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Box */}
      <div className="mt-14 card p-8 sm:p-10 bg-slate-900 text-white rounded-3xl text-center space-y-4 shadow-xl">
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl">Ready to experience transparent casting?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Join India's leading artists and casting directors. Create your verified profile in 5 minutes.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button onClick={() => go('auth')} className="btn-primary px-6 py-2.5 text-xs font-semibold">
            Get Started Free
          </button>
          <button onClick={() => go('discover')} className="btn-ghost text-white border-white/20 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold">
            Browse Talent Directory
          </button>
        </div>
      </div>
    </div>
  );
}
