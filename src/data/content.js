export const NAV = [
  ["home", "Home"],
  ["discover", "Discover Talent"],
  ["profile", "Creator Profile"],
  ["casting", "Casting Calls"],
  ["castingDetails", "Casting Details"],
  ["forCreators", "For Creators"],
  ["forCompanies", "For Companies"],
  ["howItWorks", "How It Works"],
  ["pricing", "Pricing"],
  ["about", "About"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
  ["auth", "Login / Sign Up"],
  ["legal", "Legal"],
];

export const PAGES = {
  profile: {
    tag: "Creator Profile",
    title: "A profile built to get you hired",
    heroDesc: "Every MyCastNow profile is a professional digital portfolio — complete with media, verified badges, and direct booking tools.",
    heroEmoji: "🎭",
    gradient: "from-violet-600 to-purple-700",
    accentColor: "text-violet-700",
    accentBg: "bg-violet-50 border-violet-200",
    sections: [
      {
        h: "On every profile", icon: "👤",
        desc: "Everything a casting director needs to evaluate you at a glance.",
        items: [
          { label: "Profile photo & cover media", icon: "📸" },
          { label: "Display name + verification badge", icon: "✓" },
          { label: "Category & sub-category", icon: "🎯" },
          { label: "City / service area", icon: "📍" },
          { label: "Bio & personal story", icon: "✍️" },
          { label: "Age, gender, height, languages", icon: "📏" },
          { label: "Skills & specialty tags", icon: "🏷️" },
        ]
      },
      {
        h: "Proof of work", icon: "🏆",
        desc: "Show, don't just tell. Let your past work speak for itself.",
        items: [
          { label: "Portfolio gallery — images, videos, campaigns", icon: "🖼️" },
          { label: "Previous brands & projects", icon: "🏷️" },
          { label: "Ratings & verified reviews", icon: "⭐" },
        ]
      },
      {
        h: "Commercial info", icon: "💼",
        desc: "Make it easy for studios to book you directly.",
        items: [
          { label: "Pricing & day rates", icon: "💰" },
          { label: "Availability calendar", icon: "📅" },
          { label: "One-click Hire Now button", icon: "⚡" },
          { label: "Add to Talent Cart", icon: "🛒" },
          { label: "Share your profile link", icon: "🔗" },
          { label: "Report / Safety tools", icon: "🛡️" },
        ]
      },
    ],
  },
  castingDetails: {
    tag: "Casting Call Details",
    title: "Everything a creator needs before they apply",
    heroDesc: "Detailed, transparent casting calls posted by verified production studios and agencies — no hidden requirements.",
    heroEmoji: "🎬",
    gradient: "from-rose-600 to-pink-700",
    accentColor: "text-rose-700",
    accentBg: "bg-rose-50 border-rose-200",
    sections: [
      {
        h: "Details shown", icon: "📋",
        desc: "Transparent, complete information on every casting call.",
        items: [
          { label: "Title & category", icon: "🎯" },
          { label: "Full description of the role", icon: "📝" },
          { label: "Character requirements", icon: "🎭" },
          { label: "Location, date & shoot duration", icon: "📍" },
          { label: "Budget & compensation", icon: "💰" },
          { label: "Application questions / monologue", icon: "❓" },
          { label: "Application deadline", icon: "⏰" },
        ]
      },
      {
        h: "How to apply", icon: "🚀",
        desc: "Simple, streamlined application — no paperwork needed.",
        items: [
          { label: "One-click Apply Now CTA", icon: "⚡" },
          { label: "Upload video self-tape directly", icon: "🎥" },
          { label: "Track your application status", icon: "📊" },
        ]
      },
    ],
  },
  forCreators: {
    tag: "For Creators",
    title: "Build a profile. Get discovered. Get paid.",
    heroDesc: "MyCastNow is the transparent, commission-free platform for actors, models, dancers, and voice artists to find real paid work and grow their creative career.",
    heroEmoji: "🌟",
    gradient: "from-purple-600 to-indigo-700",
    accentColor: "text-purple-700",
    accentBg: "bg-purple-50 border-purple-200",
    stats: [
      { value: "0%", label: "Commission on earnings" },
      { value: "24h", label: "ID verification turnaround" },
      { value: "15K+", label: "Verified creator profiles" },
      { value: "₹25K+", label: "Avg. daily booking rate" },
    ],
    sections: [
      {
        h: "Your creator journey", icon: "🗺️",
        desc: "From sign-up to getting paid — every step is transparent and creator-first.",
        items: [
          { label: "Create a professional portfolio profile", icon: "📸", desc: "Headshots, showreel, physical specs & past credits — all in one place." },
          { label: "Upload your media portfolio", icon: "🎥", desc: "HD photos, video reels, audio samples — no paywalls for casting directors to view." },
          { label: "Set your pricing & availability", icon: "💰", desc: "You control your day rate. Keep 100% of what you charge — zero commission ever." },
          { label: "Discover casting calls that fit you", icon: "🔍", desc: "Browse daily paid roles in Bollywood, OTT, TVCs & fashion — filtered to your skills." },
          { label: "Apply to castings with one click", icon: "⚡", desc: "Submit your profile and video self-tape directly to verified casting directors." },
          { label: "Receive direct hiring requests", icon: "📩", desc: "Casting directors can send you personalised hire requests based on your profile." },
          { label: "Negotiate offers & terms", icon: "🤝", desc: "Chat directly with studios over verified in-app messaging — no middlemen." },
          { label: "Manage all your bookings", icon: "📅", desc: "Track shoot dates, contracts, and deliverables in your creator dashboard." },
          { label: "Get paid via secure escrow", icon: "🔒", desc: "Your compensation is held in escrow and instantly disbursed upon shoot completion." },
          { label: "Boost your profile visibility", icon: "🚀", desc: "Use profile boosts to appear at the top of casting director searches." },
        ]
      },
    ],
  },
  forCompanies: {
    tag: "For Studios & Hirers",
    title: "Find, hire and manage talent in one place",
    heroDesc: "MyCastNow gives production studios, brands, agencies, and independent directors a single verified talent database — with smart filters, Talent Cart, and escrow hiring.",
    heroEmoji: "🏢",
    gradient: "from-blue-600 to-indigo-700",
    accentColor: "text-blue-700",
    accentBg: "bg-blue-50 border-blue-200",
    stats: [
      { value: "80%", label: "Less scouting time" },
      { value: "48h", label: "Avg. casting call responses" },
      { value: "100%", label: "ID-verified profiles" },
      { value: "35+", label: "Applications per casting" },
    ],
    sections: [
      {
        h: "Your hiring journey", icon: "🗺️",
        desc: "From talent discovery to contract signing — all in one streamlined workflow.",
        items: [
          { label: "Discover talent with smart search & filters", icon: "🔍", desc: "Filter 15,000+ artists by role, city, age, height, dialect, and day rate in seconds." },
          { label: "View full creator portfolios", icon: "🖼️", desc: "HD photos, video showreels, and client credits — no paywalls, no gatekeepers." },
          { label: "Add creators to your Talent Cart", icon: "🛒", desc: "Shortlist candidates and share reels with directors and producers for team review." },
          { label: "Post targeted casting calls", icon: "📢", desc: "Specify role, budget, and audition requirements. Get verified video self-tapes in hours." },
          { label: "Send direct hire requests", icon: "📩", desc: "Skip the audition queue — send personalised hire requests to any verified creator." },
          { label: "Negotiate terms directly", icon: "🤝", desc: "Chat over verified in-app messaging. Agree on rates, usage rights, and shoot terms." },
          { label: "Make secure escrow payments", icon: "🔒", desc: "Deposit funds to MyCastNow Escrow — released only after shoot completion." },
          { label: "Manage projects & timelines", icon: "📊", desc: "Track active bookings, NDAs, deliverables, and invoices from one dashboard." },
          { label: "Review creators post-shoot", icon: "⭐", desc: "Leave verified ratings to help the community and build your own hirer reputation." },
        ]
      },
    ],
  },
  about: {
    tag: "About MyCastNow",
    title: "A professional home for creative talent",
    heroDesc: "MyCastNow is India's leading verified casting and talent discovery marketplace — built to eliminate scams, remove middlemen, and make the creative industry transparent.",
    heroEmoji: "🎯",
    gradient: "from-slate-700 to-slate-900",
    accentColor: "text-slate-700",
    accentBg: "bg-slate-50 border-slate-200",
    stats: [
      { value: "15K+", label: "Verified creators" },
      { value: "₹0", label: "Commission on bookings" },
      { value: "500+", label: "Studios & brands" },
      { value: "4.8★", label: "Platform rating" },
    ],
    sections: [
      {
        h: "What we are", icon: "💡",
        desc: "A fully verified, transparent marketplace connecting creative talent with opportunities.",
        items: [
          { label: "A creative talent marketplace", icon: "🎭", desc: "The only platform where actors, models, dancers & voice artists can list, apply, and get hired — all in one place." },
          { label: "For casting, discovery & direct hiring", icon: "🎬", desc: "Casting directors and studios find verified talent instantly — no agencies, no commissions." },
        ]
      },
      {
        h: "Who it's for", icon: "👥",
        desc: "Serving both sides of the creative industry ecosystem.",
        items: [
          { label: "Actors, models, dancers, voice artists & more", icon: "🌟", desc: "Any creative professional looking for real, paid work in film, OTT, fashion, and brand campaigns." },
          { label: "Brands, agencies & production teams", icon: "🏢", desc: "Any brand, production house, agency, or independent filmmaker looking to hire verified creative talent." },
        ]
      },
      {
        h: "How we operate", icon: "⚙️",
        desc: "Trust, transparency, and technology — our three pillars.",
        items: [
          { label: "Verification & trust built into every profile", icon: "🛡️", desc: "Every creator and studio passes Aadhaar/Govt ID verification before going live on the platform." },
          { label: "Subscriptions, wallet & boosting for growth", icon: "🚀", desc: "Flexible plans for creators and hirers. Boost profiles, post castings, and grow with data-driven insights." },
        ]
      },
    ],
  },
  faq: {
    tag: "FAQ",
    title: "Common questions",
    sections: [{ h: "Topics covered", icon: "❓", desc: "Answers to the most frequently asked questions.", items: [
      { label: "How MyCastNow works", icon: "💡" },
      { label: "Creator registration", icon: "📝" },
      { label: "Company registration", icon: "🏢" },
      { label: "Talent discovery", icon: "🔍" },
      { label: "Casting calls", icon: "🎬" },
      { label: "Hiring & negotiation", icon: "🤝" },
      { label: "Subscriptions & payments", icon: "💳" },
      { label: "Boosting profiles", icon: "🚀" },
      { label: "Verification", icon: "✓" },
      { label: "Support", icon: "🛡️" },
    ]}],
  },
  contact: {
    tag: "Contact / Support",
    title: "Talk to the MyCastNow team",
    sections: [{ h: "Ways to reach us", icon: "📬", desc: "We're here to help — reach us through any of these channels.", items: [
      { label: "General support form", icon: "📋" },
      { label: "Direct contact information", icon: "📞" },
      { label: "FAQ as a first stop", icon: "❓" },
      { label: "Response within 1–2 business days", icon: "⏰" },
    ]}],
  },
  legal: {
    tag: "Legal & Policies",
    title: "The fine print, made findable",
    heroDesc: "Transparent terms that protect both creators and hirers — written in plain language without confusing jargon.",
    heroEmoji: "📜",
    gradient: "from-gray-600 to-slate-800",
    accentColor: "text-gray-700",
    accentBg: "bg-gray-50 border-gray-200",
    sections: [
      {
        h: "Our policies", icon: "📋",
        desc: "Everything that governs your use of MyCastNow.",
        items: [
          { label: "Terms & Conditions", icon: "📄", desc: "The rules and guidelines governing your use of the MyCastNow platform." },
          { label: "Privacy Policy", icon: "🔐", desc: "How we collect, store, and protect your personal and professional data." },
          { label: "Refund / Cancellation Policy", icon: "💳", desc: "Your rights and options when it comes to subscription cancellations and payment disputes." },
          { label: "Community & content rules", icon: "🤝", desc: "The code of conduct ensuring MyCastNow remains a safe, scam-free professional space." },
        ]
      },
    ],
  },
};

export const TALENTS = [
  {
    id: "riya-kapoor",
    name: "Riya Kapoor",
    role: "Actor",
    location: "Mumbai",
    age: "26-35",
    skill: "Method acting",
    budget: "₹₹",
    pricingRate: "₹25,000 / day",
    availability: "Weekdays",
    rating: 4.8,
    reviewsCount: 34,
    verified: true,
    boosted: true,
    image: "/beautiful-woman-purple-sweater-skirt_1303-17487.avif",
    bio: "Passionate method actor with 5+ years of screen and theatre experience in Hindi & English productions. Featured in 2 indie films and numerous commercial brand campaigns.",
    languages: ["Hindi", "English", "Marathi"],
    height: "5'7\"",
    experience: "5+ Years (Feature Films, Web Series, TVCs)",
    pastBrands: ["Zara", "FabIndia", "Netflix Indie Showcase", "Tanishq"],
    specialties: ["Dramatic dialogue", "Screen presence", "Improvisation"]
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Model",
    location: "Delhi",
    age: "18-25",
    skill: "Ramp walk",
    budget: "₹₹₹",
    pricingRate: "₹35,000 / day",
    availability: "Flexible",
    rating: 4.2,
    reviewsCount: 21,
    verified: false,
    boosted: false,
    image: "/beige-modal-printed-kurta-set-for-men-sg322148-1.avif",
    bio: "High-fashion and ethnic runway model based in Delhi NCR. Walked for Lakmé Fashion Week and leading designer collections across India.",
    languages: ["Hindi", "English", "Punjabi"],
    height: "6'1\"",
    experience: "3+ Years (Runway, High Fashion, Lookbooks)",
    pastBrands: ["Manyavar", "Raymond", "GQ India", "Raw Mango"],
    specialties: ["Editorial posing", "Runway walk", "Traditional & western apparel"]
  },
  {
    id: "sana-iqbal",
    name: "Sana Iqbal",
    role: "Dancer",
    location: "Bengaluru",
    age: "18-25",
    skill: "Contemporary",
    budget: "₹",
    pricingRate: "₹12,000 / day",
    availability: "Weekends",
    rating: 4.9,
    reviewsCount: 47,
    verified: true,
    boosted: true,
    image: "/young-woman-sunglasses-hat-black-leather-jacket-posing-outdoor_231208-13405.avif",
    bio: "Professional contemporary and freestyle dancer with formal training in modern choreography and stage performances. Available for music videos and brand shoots.",
    languages: ["English", "Hindi", "Kannada"],
    height: "5'5\"",
    experience: "4+ Years (Stage Performances, Music Videos, Live Tours)",
    pastBrands: ["Sunburn Festival", "Puma India", "Spotify India"],
    specialties: ["Contemporary dance", "Freestyle", "Choreography coordination"]
  },
  {
    id: "karan-vora",
    name: "Karan Vora",
    role: "Voice Artist",
    location: "Remote",
    age: "36-45",
    skill: "Hindi/English VO",
    budget: "₹₹",
    pricingRate: "₹18,000 / project",
    availability: "Flexible",
    rating: 4.6,
    reviewsCount: 39,
    verified: true,
    boosted: false,
    image: "/d012378672a561949dffd1324955a3e6.jpg",
    bio: "Deep, resonant voiceover artist and audio narrator with a broadcast-grade home studio. Over 100+ commercials, audiobooks, and corporate narrations delivered.",
    languages: ["Hindi", "English (Indian/Neutral)", "Gujarati"],
    height: "5'10\"",
    experience: "8+ Years (Commercials, Audiobooks, Documentaries)",
    pastBrands: ["Audible", "Tata Motors", "Discovery Channel", "Amazon"],
    specialties: ["Character voicing", "Corporate narration", "Dubbing & sync"]
  },
  {
    id: "meera-nair",
    name: "Meera Nair",
    role: "Actor",
    location: "Mumbai",
    age: "26-35",
    skill: "Theatre & screen",
    budget: "₹₹₹",
    pricingRate: "₹30,000 / day",
    availability: "Weekdays",
    rating: 4.0,
    reviewsCount: 18,
    verified: false,
    boosted: false,
    image: "/75030ajma02253029.jpg",
    bio: "Versatile actor known for intense dramatic expressions, classical theatre training, and natural screen performances. Worked across Hindi, Malayalam and bilingual short films.",
    languages: ["Malayalam", "Hindi", "English", "Tamil"],
    height: "5'6\"",
    experience: "6+ Years (Theatre, Short Films, Digital Ads)",
    pastBrands: ["Kalyan Jewellers", "Zee5", "Prithvi Theatre Shows"],
    specialties: ["Classical theatrical monologues", "Emotional depth", "Dialect adaptability"]
  },
  {
    id: "devansh-rao",
    name: "Devansh Rao",
    role: "Model",
    location: "Delhi",
    age: "18-25",
    skill: "Editorial",
    budget: "₹₹",
    pricingRate: "₹20,000 / day",
    availability: "Weekends",
    rating: 4.4,
    reviewsCount: 26,
    verified: true,
    boosted: true,
    image: "/boys-casual-modal-shirt-comfort-fit-802607137-1ow6z292.webp",
    bio: "Youth lifestyle and commercial fashion model. Specializing in urban streetwear, fitness modeling, and social media digital campaigns.",
    languages: ["English", "Hindi"],
    height: "6'0\"",
    experience: "3+ Years (E-commerce, Print Adverts, Streetwear Campaigns)",
    pastBrands: ["Myntra", "H&M India", "Fastrack", "Ajio"],
    specialties: ["Commercial fitness", "Streetwear aesthetics", "Dynamic poses"]
  },
];

export const FILTER_DEFS = [
  { key: "role", label: "Category", options: ["Actor", "Model", "Dancer", "Voice Artist"] },
  { key: "location", label: "Location", options: ["Mumbai", "Delhi", "Bengaluru", "Remote"] },
  { key: "age", label: "Age / gender", options: ["18-25", "26-35", "36-45"] },
  { key: "skill", label: "Skills", options: ["Method acting", "Ramp walk", "Contemporary", "Hindi/English VO", "Theatre & screen", "Editorial"] },
  { key: "budget", label: "Budget", options: ["₹", "₹₹", "₹₹₹"] },
  { key: "availability", label: "Availability", options: ["Weekdays", "Weekends", "Flexible"] },
];

export const SORTS = {
  Relevance: (a, b) => 0,
  Newest: (a, b) => 0,
  Rating: (a, b) => b.rating - a.rating,
  Price: (a, b) => a.budget.length - b.budget.length,
  Availability: (a, b) => a.availability.localeCompare(b.availability),
};

export const STATS = [
  { value: "15,000+", label: "Verified Creators", sub: "Actors, models, dancers & VO" },
  { value: "850+", label: "Active Castings", sub: "Films, web series & brands" },
  { value: "₹6.8 Cr+", label: "Paid to Talent", sub: "Safe direct escrow payments" },
  { value: "98.4%", label: "Satisfaction Rate", sub: "From verified hirers" },
];

export const TRUSTED_BRANDS = [
  { name: "Netflix", tag: "OTT & Cinema", icon: "🎬", badge: "Global OTT" },
  { name: "Amazon Studios", tag: "Prime Originals", icon: "📦", badge: "Studio" },
  { name: "Dharma Productions", tag: "Feature Films", icon: "⭐", badge: "Bollywood" },
  { name: "Lakmé Fashion Week", tag: "Runway & High Fashion", icon: "✨", badge: "Couture" },
  { name: "Nykaa", tag: "Beauty & Ad Campaigns", icon: "💄", badge: "Beauty" },
  { name: "Spotify India", tag: "Music & Podcasts", icon: "🎧", badge: "Audio" },
  { name: "T-Series", tag: "Music Videos & Film", icon: "🎵", badge: "Music Label" },
  { name: "Excel Entertainment", tag: "Cinema & Series", icon: "📽️", badge: "Production" },
  { name: "Yash Raj Films", tag: "Blockbuster Movies", icon: "🍿", badge: "Cinema" },
  { name: "Disney+ Hotstar", tag: "Web Shows & Specials", icon: "🌟", badge: "Streaming" },
];

export const CASTINGS = [
  {
    id: "cast-1",
    title: "Lead Female Actor for Coming-of-Age Hindi Feature",
    company: "Dharma Productions & Sikhya",
    category: "Feature Film",
    location: "Mumbai",
    shootDates: "Nov 15 – Dec 20, 2026",
    budget: "₹1,20,000 – ₹1,80,000",
    deadline: "Oct 12, 2026",
    status: "Featured",
    applicantsCount: 42,
    requirements: "Age 20–28, fluent Hindi & conversational English. Expressive screen presence, emotional monologue capability.",
    description: "Casting the female protagonist for an upcoming theatrical romance drama directed by an acclaimed national award filmmaker. Shoot takes place across Mumbai and Dehradun.",
    roles: [
      { roleName: "Meera (Lead)", age: "21-26", details: "Spirited university student with strong emotional range." }
    ],
    tags: ["Lead Role", "Hindi Cinema", "Theatrical Release"]
  },
  {
    id: "cast-2",
    title: "High-Fashion Runway & Lookbook Models",
    company: "Lakmé Fashion Week x Raw Mango",
    category: "Fashion / Runway",
    location: "Delhi NCR",
    shootDates: "Oct 28 – Nov 2, 2026",
    budget: "₹25,000 / day (3 days)",
    deadline: "Oct 08, 2026",
    status: "Urgent",
    applicantsCount: 68,
    requirements: "Female & Male models. Height: F: 5'8\"+, M: 6'0\"+. Experience in runway ramp walks and high-fashion couture posing.",
    description: "Looking for 6 models for the festive autumn/winter runway showcase and official lookbook shoot. Fitting sessions included.",
    roles: [
      { roleName: "Runway Models (x6)", age: "18-28", details: "Confident runway walk, modern ethnic and contemporary couture." }
    ],
    tags: ["Runway", "Couture", "Delhi NCR"]
  },
  {
    id: "cast-3",
    title: "Voiceover Narrator for Historical Thriller Audiobook",
    company: "Audible Originals India",
    category: "Voiceover",
    location: "Remote",
    shootDates: "Immediate / Remote",
    budget: "₹35,000 total",
    deadline: "Oct 05, 2026",
    status: "Open",
    applicantsCount: 29,
    requirements: "Male or Female with baritone/warm storytelling voice. Broadcast quality home studio setup (Rode/Shure mic with quiet acoustic treatment).",
    description: "Narration of a 10-chapter historical espionage fiction based in 1970s South Asia. Requires crisp diction in Hindi with natural tone.",
    roles: [
      { roleName: "Narrator & Secondary Voices", age: "28-45", details: "Clean neutral Hindi with suspense pacing." }
    ],
    tags: ["Audiobook", "Remote", "Studio Required"]
  },
  {
    id: "cast-4",
    title: "Contemporary & Hip-Hop Dancers for Music Video",
    company: "T-Series Pop Anthem",
    category: "Music Video",
    location: "Bengaluru & Goa",
    shootDates: "Nov 5 – Nov 9, 2026",
    budget: "₹18,000 / day + Travel",
    deadline: "Oct 15, 2026",
    status: "Featured",
    applicantsCount: 54,
    requirements: "Trained dancers in Contemporary, Urban, or Hip-Hop. Quick choreography pickup and energetic camera presence.",
    description: "Large-scale music video featuring top indie artists. Choreographed by international team. Travel and stay fully sponsored in Goa.",
    roles: [
      { roleName: "Principal Dancers (x8)", age: "18-30", details: "Sharp synchronization, freestyle ability." }
    ],
    tags: ["Music Video", "Choreography", "Travel Provided"]
  },
  {
    id: "cast-5",
    title: "Supporting Antagonist for OTT Crime Series",
    company: "Excel Entertainment (Amazon Prime)",
    category: "Web Series",
    location: "Mumbai",
    shootDates: "Dec 1 – Dec 22, 2026",
    budget: "₹60,000 – ₹90,000",
    deadline: "Oct 20, 2026",
    status: "Open",
    applicantsCount: 31,
    requirements: "Male, Age 30–45. Intense eyes, rough screen texture, fluent in Hindi & UP/Bihari dialect nuances.",
    description: "Recurring character across 4 episodes of a flagship thriller series. Demands gritty natural dialogue delivery.",
    roles: [
      { roleName: "Inspector Vikram / Informant", age: "32-42", details: "Nuanced grey character." }
    ],
    tags: ["OTT Series", "Crime Thriller", "Amazon Prime"]
  },
  {
    id: "cast-6",
    title: "Commercial Digital Ad Actors (Family & Friends)",
    company: "Nykaa Man & Beauty Campaign",
    category: "Commercial Ad",
    location: "Mumbai",
    shootDates: "Oct 22, 2026 (1 Day)",
    budget: "₹30,000 / day",
    deadline: "Oct 10, 2026",
    status: "Open",
    applicantsCount: 88,
    requirements: "Bright smiles, relatable urban faces, comfortable with casual conversational acting for digital YouTube & Instagram ads.",
    description: "National digital campaign for festive skincare & grooming products. Single-day studio shoot with wardrobe provided.",
    roles: [
      { roleName: "Urban Professional", age: "24-32", details: "Clean look, lively expressive face." }
    ],
    tags: ["Digital TVC", "One Day Shoot", "Mumbai"]
  },
];

export const TESTIMONIALS = [
  {
    quote: "MyCastNow connected me with a national ad agency within 10 days of verifying my profile. The direct hire and transparent escrow payment are unmatched.",
    name: "Riya Kapoor",
    role: "Actor & Commercial Model",
    city: "Mumbai",
    avatar: "/beautiful-woman-purple-sweater-skirt_1303-17487.avif",
    rating: 5,
    tag: "Booked 4 Commercials"
  },
  {
    quote: "As a casting director, filtering by verified skills and direct rates saved our production team over 3 weeks of scouting time. Our go-to platform now.",
    name: "Vikramaditya Bose",
    role: "Senior Casting Director, Indie Films",
    city: "Mumbai",
    avatar: "/beige-modal-printed-kurta-set-for-men-sg322148-1.avif",
    rating: 5,
    tag: "Hired 18+ Creators"
  },
  {
    quote: "Being a voice artist from a tier-2 city, getting direct work from international and Mumbai audiobook studios without middlemen felt impossible before this.",
    name: "Karan Vora",
    role: "Voiceover Artist & Narrator",
    city: "Remote (Vadodara)",
    avatar: "/d012378672a561949dffd1324955a3e6.jpg",
    rating: 5,
    tag: "30+ Audiobooks Done"
  },
  {
    quote: "We scouted 6 dancers for our music video in 48 hours. Talent Cart feature made team approvals super fast and effortless.",
    name: "Ananya Deshmukh",
    role: "Production Head, Groove Records",
    city: "Bengaluru",
    avatar: "/young-woman-sunglasses-hat-black-leather-jacket-posing-outdoor_231208-13405.avif",
    rating: 5,
    tag: "Music Video Producer"
  }
];

export const PRICING_TIERS = [
  {
    id: "free",
    name: "Free Starter",
    desc: "For aspiring creators looking to build their first digital portfolio and test the waters.",
    monthlyPrice: "₹0",
    yearlyPrice: "₹0",
    period: "forever free",
    popular: false,
    cta: "Join as Free Talent",
    features: [
      "Verified Public Creator Profile",
      "Upload up to 5 portfolio photos & 1 reel",
      "Apply to up to 3 Open Casting Calls / month",
      "Direct messaging with Hirers upon invitation",
      "Standard discovery listing",
      "Community support"
    ]
  },
  {
    id: "pro",
    name: "Pro Creator",
    desc: "For serious actors, models and dancers who want priority discovery and unlimited casting applications.",
    monthlyPrice: "₹899",
    yearlyPrice: "₹699",
    period: "per month, billed annually",
    popular: true,
    cta: "Upgrade to Pro",
    badge: "Most Popular for Artists",
    features: [
      "Everything in Free Starter",
      "Blue 'Verified Talent' verification badge",
      "Unlimited Casting Call applications",
      "Featured placement in Discover Talent search",
      "2 Monthly Profile Boost credits (5x visibility)",
      "Direct Hire Request acceptance with 0% commission",
      "Downloadable smart PDF casting resume",
      "SMS & WhatsApp instant casting alerts",
      "Priority audition review from studios"
    ]
  },
  {
    id: "agency",
    name: "Casting & Production",
    desc: "For casting directors, production houses, agencies, and brands hiring talent at scale.",
    monthlyPrice: "₹3,499",
    yearlyPrice: "₹2,699",
    period: "per month, billed annually",
    popular: false,
    cta: "Start Hiring Pro",
    badge: "For Studios & Brands",
    features: [
      "Post unlimited verified Casting Calls",
      "Unlimited Talent Cart saves & direct hire requests",
      "Bulk auditions management dashboard",
      "Dedicated Casting Assistant support",
      "Custom casting agreements & secure escrow",
      "Direct WhatsApp contact with shortlisted talent",
      "Verified Hirer badge to attract top creators",
      "Multi-user team access (up to 5 members)"
    ]
  }
];

export const FAQS_DATA = [
  {
    category: "General",
    q: "How does MyCastNow work?",
    a: "MyCastNow is a modern direct casting and talent marketplace. Creators build a verified profile with portfolio media, day rates, and skills. Production houses, brands, and casting directors either post Casting Calls or directly discover talent through filters and send direct hire requests."
  },
  {
    category: "For Creators",
    q: "How do I get the Verified Badge on my profile?",
    a: "After creating your account, go to Profile Settings and submit a government ID (Aadhaar/PAN/Passport) along with an unedited 10-second selfie video verifying your identity. Our verification team approves profiles within 24 hours."
  },
  {
    category: "For Creators",
    q: "Does MyCastNow charge any commission on my earnings?",
    a: "No! Unlike traditional talent agencies that take 20%–40% of your earnings, MyCastNow operates on a transparent subscription model. What you negotiate and quote is 100% yours."
  },
  {
    category: "For Hirers",
    q: "How does the Talent Cart and Direct Hire work?",
    a: "Browse creators in Discover Talent, click '+ Add to Cart' on anyone who fits your project. You can review them all in your Talent Cart, estimate project costs, and send a unified Hire Request or negotiate rates in one click."
  },
  {
    category: "Payments",
    q: "How is payment security handled?",
    a: "When a hire request is confirmed, the client deposits the payment into our secure Escrow system. Once the shoot or project milestone is marked complete, funds are released immediately to the creator's bank account."
  },
  {
    category: "Casting Calls",
    q: "Can I apply to castings outside my current city?",
    a: "Yes! Many productions provide travel and accommodation for outstation talent, and voiceover/remote roles can be done from anywhere. Each casting call clearly mentions travel terms."
  }
];
