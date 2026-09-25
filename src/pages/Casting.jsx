import { useState } from 'react';
import { CASTINGS } from '../data/content.js';
import CastingDetailModal from '../components/CastingDetailModal.jsx';

export default function Casting({ go }) {
  const [selectedCasting, setSelectedCasting] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const categories = ['All', 'Feature Film', 'Web Series', 'Fashion / Runway', 'Music Video', 'Voiceover', 'Commercial Ad'];
  const cities = ['All', 'Mumbai', 'Delhi NCR', 'Bengaluru', 'Remote'];

  const filteredCastings = CASTINGS.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.requirements.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || c.location.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;

    return matchesSearch && matchesCat && matchesCity && matchesStatus;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          OPEN AUDITIONS & CASTING CALLS
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Verified Casting Calls, Updated Daily
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
          Apply directly with your portfolio and showreel to accredited production houses, OTT platforms, and fashion agencies.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="card p-5 mt-8 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search by role title, production house or requirement..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-xs text-slate-400 hover:text-slate-600">✕</button>
            )}
          </div>

          {/* City Filter */}
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="sm:w-44 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none cursor-pointer"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city === 'All' ? 'All Locations' : city}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="sm:w-36 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Featured">Featured</option>
            <option value="Urgent">Urgent</option>
            <option value="Open">Open</option>
          </select>
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 text-xs" style={{scrollbarWidth:'none'}}>
          <span className="text-slate-600 font-semibold shrink-0 text-xs">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={selectedCategory === cat ? {background:'linear-gradient(135deg,#2563EB,#7C3AED)', color:'#fff', boxShadow:'0 2px 8px rgba(124,58,237,0.3)'} : {}}
              className={`px-3.5 py-1.5 rounded-full font-semibold transition-all duration-150 shrink-0 border ${
                selectedCategory === cat
                  ? 'border-transparent text-white'
                  : 'bg-white border-slate-200 hover:border-purple-300 hover:text-purple-700 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mt-6 text-sm">
        <p className="text-slate-600 font-medium">
          Showing <strong>{filteredCastings.length}</strong> casting opportunities
        </p>
        {(search || selectedCategory !== 'All' || selectedCity !== 'All' || selectedStatus !== 'All') && (
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
              setSelectedCity('All');
              setSelectedStatus('All');
            }}
            className="text-xs text-purple-600 font-semibold hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Castings Grid */}
      {filteredCastings.length === 0 ? (
        <div className="card p-12 text-center bg-white mt-6">
          <span className="text-3xl block mb-2">🎬</span>
          <p className="font-display font-bold text-lg text-slate-800">No casting calls match your search</p>
          <p className="text-xs text-muted mt-1">Try broadening your filters or clearing search terms.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
              setSelectedCity('All');
              setSelectedStatus('All');
            }}
            className="btn-primary mt-4 text-xs px-5 py-2"
          >
            Show All Castings
          </button>
        </div>
      ) : (
        <div className="grid gap-4 mt-6">
          {filteredCastings.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCasting(c)}
              className="card p-6 bg-white hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                    {c.category}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                    c.status === 'Urgent'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {c.status}
                  </span>
                  <span className="text-xs text-muted">
                    📍 {c.location}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">
                    {c.applicantsCount} artists applied
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">
                  {c.title}
                </h3>

                <p className="text-xs font-semibold text-slate-600 mt-1">
                  Posted by <span className="text-purple-700">{c.company}</span> · Shoot Dates: {c.shootDates}
                </p>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {c.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side Compensation & CTA */}
              <div className="md:text-right shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex md:flex-col justify-between items-center md:items-end gap-3">
                <div>
                  <span className="text-xs text-muted block md:text-right">Budget</span>
                  <span className="font-display font-extrabold text-base text-slate-900">{c.budget}</span>
                  <span className="text-[11px] text-rose-600 block md:text-right font-medium">Closes {c.deadline}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCasting(c);
                  }}
                  className="btn-primary text-xs px-5 py-2 font-semibold shadow-md whitespace-nowrap"
                >
                  View & Apply →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Casting Detail Modal */}
      {selectedCasting && (
        <CastingDetailModal
          casting={selectedCasting}
          onClose={() => setSelectedCasting(null)}
        />
      )}
    </div>
  );
}
