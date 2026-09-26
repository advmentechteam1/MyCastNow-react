export default function Section({ eyebrow, title, sub, children }) {
  return (
    <section className="w-full px-[5%] sm:px-[8%] lg:px-[10%] py-16">
      {eyebrow && <p className="text-sm font-semibold tracking-wide text-gold">{eyebrow}</p>}
      {title && <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 max-w-2xl">{title}</h2>}
      {sub && <p className="mt-3 max-w-xl text-muted">{sub}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
