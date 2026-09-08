export function PageHeading({
  title,
  kicker,
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <header className="page-heading">
      <h1 className="page-heading-title">{title}</h1>
      <span className="page-heading-rule" aria-hidden />
      {kicker ? <p className="page-heading-kicker">{kicker}</p> : null}
    </header>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return <h2 className="section-heading">{children}</h2>;
}
