import { useState } from 'react';

export default function Auth({ setUser, go }) {
  const [tab, setTab] = useState('login');
  const [role, setRole] = useState('creator');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name || (role === 'creator' ? 'Riya Kapoor' : 'Dharma Casting Team'),
      email: email || 'user@mycastnow.com',
      role: role === 'creator' ? 'Creator' : 'Hirer'
    };
    if (setUser) setUser(newUser);
    setSubmitted(true);
    setTimeout(() => {
      if (go) go('home');
    }, 1000);
  };

  const handleQuickDemo = (demoRole) => {
    const demoUser =
      demoRole === 'creator'
        ? { name: 'Riya Kapoor', email: 'riya@mycastnow.com', role: 'Creator' }
        : { name: 'Dharma Casting Desk', email: 'casting@dharma.com', role: 'Hirer' };
    if (setUser) setUser(demoUser);
    setSubmitted(true);
    setTimeout(() => {
      if (go) go('home');
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto px-6 py-12 sm:py-16">
      {/* Auth Box */}
      <div className="card p-6 sm:p-8 bg-white shadow-xl border-slate-200">
        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-6">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              tab === 'login' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Log in
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              tab === 'signup' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Role Selector */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted mb-2 text-center">Select Your Account Type</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole('creator')}
              className={`p-3 rounded-xl border text-center transition-all ${
                role === 'creator'
                  ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className="text-xl block mb-0.5">🎭</span>
              <span className="text-xs">Creative Talent</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('company')}
              className={`p-3 rounded-xl border text-center transition-all ${
                role === 'company'
                  ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className="text-xl block mb-0.5">🎬</span>
              <span className="text-xs">Hirer / Studio</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
            <span className="text-3xl block mb-2">🎉</span>
            <h3 className="font-display font-bold text-lg text-emerald-800">Welcome to MyCastNow!</h3>
            <p className="text-xs text-emerald-700 mt-1">Logged in successfully. Redirecting you to home...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {tab === 'signup' && (
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Riya Kapoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Email or Mobile</label>
              <input
                required
                type="text"
                placeholder="name@example.com or +91 98765 43210"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-2.5 text-sm font-semibold shadow-md mt-2">
              {tab === 'login' ? 'Log In to MyCastNow' : 'Create Free Account'}
            </button>
          </form>
        )}

        {/* 1-Click Demo Login Box */}
        <div className="mt-6 pt-5 border-t border-slate-100 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">⚡ 1-Click Instant Demo Login</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuickDemo('creator')}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
            >
              Demo as Artist 🎭
            </button>
            <button
              onClick={() => handleQuickDemo('company')}
              className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
            >
              Demo as Studio 🎬
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
