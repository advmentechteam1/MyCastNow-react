import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Section from '../components/Section.jsx';
import { TALENTS, CASTINGS, TESTIMONIALS, STATS, TRUSTED_BRANDS } from '../data/content.js';
import TalentDetailModal from '../components/TalentDetailModal.jsx';
import CastingDetailModal from '../components/CastingDetailModal.jsx';
import CompareCreatorsModal from '../components/CompareCreatorsModal.jsx';

export default function Home({ go, addToCart, cart = [] }) {
  const heroRef = useRef(null);
  const talentSliderRef = useRef(null);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [selectedCasting, setSelectedCasting] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [journeyTab, setJourneyTab] = useState('creator');
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompareTalent = (talent) => {
    setCompareList((prev) => {
      const exists = prev.some((c) => (c.id || c.name) === (talent.id || talent.name));
      if (exists) {
        return prev.filter((c) => (c.id || c.name) !== (talent.id || talent.name));
      }
      if (prev.length >= 2) {
        const next = [prev[1], talent];
        setShowCompareModal(true);
        return next;
      }
      const next = [...prev, talent];
      if (next.length === 2) {
        setShowCompareModal(true);
      }
      return next;
    });
  };

  const removeCompareTalent = (id) => {
    setCompareList((prev) => prev.filter((c) => (c.id || c.name) !== id));
  };

  const scrollTalent = (dir) => {
    if (talentSliderRef.current) {
      const scrollAmount = 320;
      talentSliderRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.reveal'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    go('discover');
  };

  const creatorSteps = [
    { num: '01', title: 'Create Verified Profile', desc: 'Add your professional photos, headshots, showreel, and get ID-verified in 24 hours.' },
    { num: '02', title: 'Set Day Rates & Skills', desc: 'You control your pricing, availability, and showcase past brands with 0% commission.' },
    { num: '03', title: 'Apply to Top Castings', desc: 'Browse curated roles from Bollywood films, OTT web series, and TVCs daily.' },
    { num: '04', title: 'Direct Hire & Escrow Payout', desc: 'Receive direct booking requests from casting directors with protected escrow payments.' },
  ];

  const companySteps = [
    { num: '01', title: 'Discover & Filter Talent', desc: 'Search thousands of verified actors, models, and dancers by city, skills, and rates.' },
    { num: '02', title: 'Shortlist with Talent Cart', desc: 'Add potential candidates to your Talent Cart for easy team review and approval.' },
    { num: '03', title: 'Post Verified Casting Calls', desc: 'Reach thousands of qualified artists with specific audition requirements.' },
    { num: '04', title: 'One-Click Hire & Contract', desc: 'Send direct offers, agree on terms, and manage projects safely through escrow.' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden border-b bg-gradient-to-b from-white via-slate-50/40 to-slate-100/50" style={{ borderColor: 'var(--border)' }}>
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-18 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              {/* Eyebrow Badge */}
              <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                <span>INDIA'S PREMIER DIRECT TALENT & CASTING NETWORK</span>
              </div>

              {/* Heading */}
              <h1 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                Where <span className="grad-text">creative talent</span> meets real casting work
              </h1>

              {/* Subtitle */}
              <p className="reveal mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Connect directly with verified actors, runway models, contemporary dancers, and voiceover artists. 
                Zero middleman commissions, direct WhatsApp connects, and secure escrow contracts.
              </p>

              {/* Interactive Search Bar */}
              <form onSubmit={handleHeroSearch} className="reveal mt-6 sm:mt-7 card p-2 sm:p-2.5 flex flex-col sm:flex-row gap-2 bg-white shadow-xl border-slate-200/80 max-w-xl">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400">🔍</span>
                  <input
                    type="text"
                    placeholder="Search actor, model, voiceover..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                <div className="sm:w-36 flex items-center gap-1.5 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400">📍</span>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="">All Cities</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary py-2.5 px-5 text-sm font-semibold whitespace-nowrap shadow-md">
                  Find Talent
                </button>
              </form>

              {/* Quick Category Chips */}
              <div className="reveal mt-4 flex items-center gap-2 flex-wrap text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Popular:</span>
                {[
                  { label: '🎭 Actors', val: 'Actor' },
                  { label: '👗 Models', val: 'Model' },
                  { label: '💃 Dancers', val: 'Dancer' },
                  { label: '🎙️ Voice Artists', val: 'Voice Artist' },
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => go('discover')}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-600 transition-colors shadow-2xs font-medium"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="reveal mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                <button className="btn-primary" onClick={() => go('auth')}>
                  Join as Creative Talent
                </button>
                <button className="btn-ghost" onClick={() => go('casting')}>
                  Explore Casting Calls ({CASTINGS.length})
                </button>
              </div>
            </div>

            {/* Right Video Showcase (5 Cols) */}
            <div className="reveal lg:col-span-5 flex justify-center mt-6 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
                <video
                  src="/download.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/5] object-cover object-center"
                />

                {/* Video Overlay Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Featured Showreel</span>
                </div>

                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-md">
                  4K Ultra HD
                </div>

                {/* Bottom Glassmorphic Overlay Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-sm">Professional Portfolio Reel</span>
                      <span className="text-xs text-purple-400 font-semibold">✓ Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">High-fashion, runway & cinema acting</p>
                  </div>
                  <button
                    onClick={() => go('discover')}
                    className="px-3 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors shadow-sm shrink-0"
                  >
                    View Talent
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Banner */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 card bg-white shadow-lg border-slate-200/80">
          {STATS.map((s, i) => (
            <div key={i} className="text-center sm:text-left px-2">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {s.value}
              </p>
              <p className="text-sm font-bold text-purple-700 mt-1">{s.label}</p>
              <p className="text-xs text-muted mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Studios / Brands Banner */}
      <section className="relative overflow-hidden py-10 my-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>VERIFIED CASTING PARTNERS</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
            Trusted by India’s Leading Studios, OTTs & Fashion Houses
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-lg mx-auto">
            Top casting directors, independent filmmakers, and creative agencies discover and book talent here.
          </p>
        </div>

        {/* Infinite Animated Marquee with Side Fades */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Right Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-4 sm:gap-6">
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, i) => {
              const name = typeof brand === 'string' ? brand : brand.name;
              const tag = typeof brand === 'string' ? 'Partner Studio' : brand.tag;
              const icon = typeof brand === 'string' ? '🎬' : brand.icon;
              const badge = typeof brand === 'string' ? 'Verified' : brand.badge;

              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-300 shrink-0 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-purple-100/70 transition-all shrink-0">
                    {icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-sm sm:text-base text-slate-800 group-hover:text-purple-700 transition-colors">
                        {name}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/80">
                        {badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 sm:py-14 relative">
        {/* Header without top buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-[11px] font-bold tracking-widest text-purple-700 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span>VERIFIED TALENT SHOWCASE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Featured creative artists
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              Browse verified portfolios ready for direct bookings. Click any card for details, or use ⚖️ Compare to view two creators side-by-side.
            </p>
          </div>

          {compareList.length > 0 && (
            <button
              onClick={() => setShowCompareModal(true)}
              className="self-start sm:self-end px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-300 text-xs font-bold hover:bg-purple-100 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>⚖️</span>
              <span>Comparing ({compareList.length}/2)</span>
            </button>
          )}
        </div>

        {/* Carousel Slider with Floating Left & Right Arrow Buttons */}
        <div className="relative group/slider">
          {/* Floating Left Navigation Arrow Button */}
          <button
            type="button"
            onClick={() => scrollTalent('left')}
            aria-label="Previous creators"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:text-purple-700 hover:border-purple-300 hover:bg-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <span className="text-2xl font-bold leading-none select-none">‹</span>
          </button>

          {/* Floating Right Navigation Arrow Button */}
          <button
            type="button"
            onClick={() => scrollTalent('right')}
            aria-label="Next creators"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:text-purple-700 hover:border-purple-300 hover:bg-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <span className="text-2xl font-bold leading-none select-none">›</span>
          </button>

          {/* Slider Cards Container */}
          <div
            ref={talentSliderRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-3 px-1 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TALENTS.map((t) => {
              const inCart = cart.some((c) => (c.id || c.name) === (t.id || t.name));
              const isComparing = compareList.some((c) => (c.id || c.name) === (t.id || t.name));

              return (
                <div
                  key={t.id || t.name}
                  onClick={() => setSelectedTalent(t)}
                  className={`w-60 sm:w-64 shrink-0 card p-3 relative group cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300 bg-white rounded-2xl flex flex-col justify-between ${
                    isComparing
                      ? 'border-2 border-purple-600 ring-4 ring-purple-100 bg-purple-50/20'
                      : 'border border-slate-200/90'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-3 bg-slate-100 shadow-inner">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex justify-between items-center pointer-events-none">
                      {t.verified ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-purple-700 shadow-sm border border-purple-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          Verified
                        </span>
                      ) : <span />}
                      {t.boosted && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white shadow-sm flex items-center gap-1">
                          ★ Boosted
                        </span>
                      )}
                    </div>

                    {/* Quick Preview Reel Hover Chip */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-purple-700 font-bold text-[11px] shadow-md border border-purple-200/80">
                        <span>👁️</span>
                        <span>View Portfolio Reel</span>
                      </span>
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div>
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors truncate">
                          {t.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                          {t.role} · 📍 {t.location}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-amber-500 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200/70 shrink-0">
                        ★ {t.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Pricing & Availability Tags */}
                    <div className="mt-2.5 flex items-center justify-between gap-1 text-[11px]">
                      <span className="font-extrabold text-slate-800 text-xs">
                        {t.pricingRate?.split('/')[0] || t.budget}
                        <span className="text-[10px] font-normal text-slate-500"> /day</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                        {t.availability}
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium truncate inline-block max-w-full">
                        ✨ {t.skill}
                      </span>
                    </div>
                  </div>

                  {/* Card Action Footer with Compare Button */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs">
                    {/* Compare Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompareTalent(t);
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all duration-200 flex items-center justify-center gap-1 focus:outline-none ${
                        isComparing
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 hover:border-purple-300'
                      }`}
                    >
                      <span>⚖️</span>
                      <span>{isComparing ? 'Comparing' : 'Compare'}</span>
                    </button>

                    {/* Shortlist Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(t);
                      }}
                      className={`py-1.5 px-2.5 rounded-xl text-[11px] font-semibold transition-all duration-200 focus:outline-none shrink-0 ${
                        inCart
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 active:scale-95'
                      }`}
                    >
                      {inCart ? '✓ Added' : '+ Shortlist'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-8 text-center">
          <button className="btn-primary px-7 py-2.5 text-xs font-semibold shadow-md" onClick={() => go('discover')}>
            Explore All Creators in Discover →
          </button>
        </div>

        {/* Floating Compare Drawer Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-950/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 animate-fadeIn max-w-[92vw]">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚖️</span>
              <div>
                <p className="text-xs font-bold text-white">
                  {compareList.length === 1
                    ? `1 Creator Selected (${compareList[0].name})`
                    : `2 Creators Ready to Compare`}
                </p>
                <p className="text-[11px] text-slate-300">
                  {compareList.length === 1
                    ? 'Pick 1 more creator to view side-by-side comparison.'
                    : `${compareList[0].name} vs ${compareList[1].name}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCompareModal(true)}
                className="btn-primary py-1.5 px-4 text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-transform"
              >
                Compare Side-by-Side 🚀
              </button>
              <button
                onClick={() => setCompareList([])}
                className="text-slate-400 hover:text-white text-xs px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Open Casting Calls Section */}
      <Section
        eyebrow="OPPORTUNITIES"
        title="Active casting calls"
        sub="Real paid roles posted by verified production studios and agencies. Click to apply directly with your showreel."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASTINGS.slice(0, 6).map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCasting(c)}
              className="card p-5 relative group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/60">
                    {c.category}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                    c.status === 'Urgent'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {c.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 mt-2">
                  {c.title}
                </h3>

                <p className="text-xs text-muted font-medium mt-1">
                  🏢 {c.company} · 📍 {c.location}
                </p>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-muted block">Budget</span>
                  <span className="text-xs font-bold text-slate-900">{c.budget}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCasting(c);
                  }}
                  className="px-3.5 py-1.5 rounded-full btn-primary text-xs font-semibold"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="btn-ghost" onClick={() => go('casting')}>
            View All Open Casting Calls →
          </button>
        </div>
      </Section>

      {/* Interactive How It Works Section */}
      <Section
        eyebrow="THE JOURNEY"
        title="How MyCastNow works"
        sub="Two tailored pathways designed for transparency, fast booking, and protected payouts."
      >
        {/* Journey Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setJourneyTab('creator')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                journeyTab === 'creator'
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Creative Talent 🎭
            </button>
            <button
              onClick={() => setJourneyTab('company')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                journeyTab === 'company'
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Studios & Hirers 🎬
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(journeyTab === 'creator' ? creatorSteps : companySteps).map((step, idx) => (
            <div key={idx} className="card p-6 bg-white hover:border-purple-300 transition-colors">
              <span className="font-display text-3xl font-extrabold text-purple-600/30 block mb-3">
                {step.num}
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="btn-ghost" onClick={() => go('howItWorks')}>
            Read Detailed Guide & FAQs →
          </button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        eyebrow="PROVEN SUCCESS"
        title="Loved by artists and casting directors"
        sub="Real stories from creators who landed work and companies who found their perfect talent."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card p-5 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover object-top border border-purple-200"
                />
                <div className="min-w-0">
                  <p className="font-bold text-xs text-slate-900 truncate">{t.name}</p>
                  <p className="text-[11px] text-muted truncate">{t.role}</p>
                  <span className="inline-block text-[10px] font-semibold text-purple-600 bg-purple-50 px-1.5 rounded mt-0.5">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust & Safety Guarantees */}
      <section className="max-w-6xl mx-auto px-6">
        <div
          className="p-8 sm:p-12 rounded-3xl shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #3b0764 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#fbbf24' }}>
              TRUST &amp; SAFETY GUARANTEED
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 leading-tight" style={{ color: '#fff' }}>
              A transparent, safe casting ecosystem
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
              We eliminate casting couch scams, unverified auditions, and payment delays through strict ID verification and secure escrow milestones.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-6 pt-6 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <div>
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#fff' }}>100% ID Verified</h4>
              <p style={{ color: '#94a3b8' }}>Every creator and production house passes Aadhaar/Govt ID verification.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💳</div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#fff' }}>Escrow Protected</h4>
              <p style={{ color: '#94a3b8' }}>Hirer deposits are held safely in escrow and released on shoot completion.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#fff' }}>0% Earnings Commission</h4>
              <p style={{ color: '#94a3b8' }}>Creators keep 100% of their negotiated compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          Ready to step into the spotlight?
        </h2>
        <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
          Join thousands of verified actors, models, and dancers getting booked for top national campaigns.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="btn-primary px-8 py-3 text-sm font-semibold shadow-lg" onClick={() => go('auth')}>
            Sign Up Free as Talent
          </button>
          <button className="btn-ghost px-8 py-3 text-sm font-semibold" onClick={() => go('pricing')}>
            Explore Hirer & Pro Plans
          </button>
        </div>
      </section>

      {/* Talent Detail Modal */}
      {selectedTalent && (
        <TalentDetailModal
          talent={selectedTalent}
          onClose={() => setSelectedTalent(null)}
          onHire={() => {
            setSelectedTalent(null);
            go('auth');
          }}
        />
      )}

      {/* Casting Detail Modal */}
      {selectedCasting && (
        <CastingDetailModal
          casting={selectedCasting}
          onClose={() => setSelectedCasting(null)}
        />
      )}

      {/* Compare Creators Modal */}
      {showCompareModal && (
        <CompareCreatorsModal
          creators={compareList}
          onClose={() => setShowCompareModal(false)}
          onRemove={removeCompareTalent}
          addToCart={addToCart}
          cart={cart}
        />
      )}
    </div>
  );
}
