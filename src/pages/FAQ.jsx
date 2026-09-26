import { useState } from 'react';
import { FAQS_DATA } from '../data/content.js';

export default function FAQ({ go }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'General', 'For Creators', 'For Hirers', 'Payments', 'Casting Calls'];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch =
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full px-[5%] py-12 sm:py-16">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          HELP CENTER & FAQ
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Everything you need to know about auditions, verification, hire requests, and payments.
        </p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <span className="text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search questions (e.g. commission, verification, payment)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-xs text-slate-400 hover:text-slate-600">✕</button>
          )}
        </div>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors focus:outline-none ${
                selectedCat === cat
                  ? 'bg-purple-100 text-purple-700 border border-purple-300 font-semibold shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="mt-10 space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="card p-8 text-center bg-white">
            <p className="text-sm font-semibold text-slate-700">No matching questions found.</p>
            <p className="text-xs text-muted mt-1">Try another search term or contact our support team.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card bg-white border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-base text-slate-900 hover:text-purple-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-sans">
                      {faq.category}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <span className={`text-lg font-mono transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'}`}>
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Support Box */}
      <div className="mt-12 p-6 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-display font-bold text-base text-purple-950">Have a specific question not listed here?</h4>
          <p className="text-xs text-purple-800/80 mt-0.5">Our Mumbai & Delhi support desk is available Mon–Sat (10am–7pm IST).</p>
        </div>
        <button
          onClick={() => (go ? go('contact') : null)}
          className="btn-primary py-2 px-5 text-xs font-semibold whitespace-nowrap shadow-sm"
        >
          Contact Support Team →
        </button>
      </div>
    </div>
  );
}
