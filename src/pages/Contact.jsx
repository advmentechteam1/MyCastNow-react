import { useState } from 'react';

export default function Contact() {
  const [topic, setTopic] = useState('General Support');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full px-[10%] py-12 sm:py-16">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
          GET IN TOUCH
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Talk to the MyCastNow Team
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Have questions about casting calls, profile verification, or enterprise studio accounts? We are here to help.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-5 gap-8 items-start">
        {/* Contact Info Sidebar (2 Cols) */}
        <div className="md:col-span-2 space-y-4">
          <div className="card p-5 bg-white border-slate-200">
            <span className="text-xl block mb-1">📍</span>
            <h4 className="font-display font-bold text-sm text-slate-900">Mumbai Casting Desk</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Level 4, Crystal Plaza, New Link Road, Andheri West, Mumbai, MH 400053
            </p>
          </div>

          <div className="card p-5 bg-white border-slate-200">
            <span className="text-xl block mb-1">📍</span>
            <h4 className="font-display font-bold text-sm text-slate-900">Delhi NCR Fashion Bureau</h4>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Block A, Hauz Khas Enclave, New Delhi, DL 110016
            </p>
          </div>

          <div className="card p-5 bg-purple-50 border-purple-100 text-xs text-purple-950 space-y-1.5">
            <p className="font-bold">Direct Channels:</p>
            <p>📧 support@mycastnow.in</p>
            <p>💬 WhatsApp Helpline: +91 98200 12345</p>
            <p>🕒 Mon – Sat, 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        {/* Form (3 Cols) */}
        <div className="md:col-span-3 card p-6 sm:p-8 bg-white border-slate-200 shadow-lg">
          {sent ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fadeIn">
              <span className="text-3xl block mb-2">✉️</span>
              <h3 className="font-display font-bold text-lg text-emerald-800">Message Received!</h3>
              <p className="text-xs text-emerald-700 mt-1 max-w-sm mx-auto">
                Thank you, <strong>{name || 'there'}</strong>. A casting support representative will respond to <strong>{email}</strong> within 1–2 business hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">I Need Help With</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                >
                  <option value="General Support">General Support & Guidance</option>
                  <option value="Creator Verification">Creator Verification & Blue Badge</option>
                  <option value="Casting Call Assistance">Posting a Casting Call</option>
                  <option value="Escrow & Payments">Payment & Escrow Inquiries</option>
                  <option value="Agency Partnership">Production Studio / Agency Partnership</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rohan Mehra"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">How Can We Help?</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell us about your query, casting requirements or issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-2.5 text-sm font-semibold shadow-md">
                Send Message to Support Team →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
