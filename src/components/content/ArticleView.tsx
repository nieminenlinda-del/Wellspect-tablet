import { Disclaimer } from "@/components/chrome/Disclaimer";
import type { Article } from "@/content/types";

export function ArticleView({ article }: { article: Article }) {
  return (
    <article className="mx-auto max-w-3xl space-y-4">
      {article.kicker ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ws-blue">
          {article.kicker}
        </p>
      ) : null}
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-ws-ink sm:text-lg">
          {paragraph}
        </p>
      ))}
      {article.bullets ? (
        <ul className="list-disc space-y-2 pl-5 text-base text-ws-ink sm:text-lg">
          {article.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {article.note ? <p className="text-sm text-ws-muted">{article.note}</p> : null}
      <Disclaimer />
    </article>
  );
}
