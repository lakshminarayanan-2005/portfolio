export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mb-12">
      <p className="section-label text-accent text-xs uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-100">
        {title}
      </h2>
      {description && <p className="mt-4 text-ink-500 leading-relaxed">{description}</p>}
    </div>
  );
}
