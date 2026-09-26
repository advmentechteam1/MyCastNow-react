import { NAV } from '../data/content.js';

export default function Footer({ go }) {
  return (
    <footer className="border-t mt-10" style={{ borderColor: 'var(--border)' }}>
      <div className="w-full px-[10%] py-10 grid sm:grid-cols-3 gap-6 text-sm text-muted">
        <div>
          <p className="font-display font-extrabold text-lg text-[var(--text)] mb-2">
            MyCast<span className="grad-text">Now</span>
          </p>
          <p>Get Discovered. Get Cast.</p>
        </div>
        <div className="flex flex-col gap-2">
          {["forCreators", "forCompanies", "howItWorks", "pricing"].map((id) => {
            const label = NAV.find((n) => n[0] === id)[1];
            return (
              <button key={id} className="text-left" onClick={() => go(id)}>
                {label}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {["about", "faq", "contact", "legal"].map((id) => {
            const label = NAV.find((n) => n[0] === id)[1];
            return (
              <button key={id} className="text-left" onClick={() => go(id)}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-center text-xs pb-8 text-muted">© 2026 MyCastNow. All rights reserved.</p>
    </footer>
  );
}
