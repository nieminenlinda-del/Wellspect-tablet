import Link from "next/link";
import { PageHeading } from "@/components/chrome/PageHeading";
import { Disclaimer } from "@/components/chrome/Disclaimer";
import { journeys } from "@/content/catalog";
import { strings } from "@/content/strings";
import type { Article, JourneyId } from "@/content/types";

export function ArticleView({
  article,
  journeyId,
}: {
  article: Article;
  journeyId?: JourneyId;
}) {
  const journey = journeyId ? journeys[journeyId] : undefined;

  return (
    <article className="content-page mx-auto max-w-3xl">
      {article.kicker ? <p className="content-kicker mb-2">{article.kicker}</p> : null}
      <PageHeading title={article.title} />
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph} className="content-lede mt-4">
          {paragraph}
        </p>
      ))}
      {article.bullets ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-ws-ink sm:text-lg">
          {article.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {article.note ? <p className="mt-4 text-sm text-ws-muted">{article.note}</p> : null}

      {journey ? (
        <Link href={`/${journey.id}/`} className="back-pill">
          {strings.nav.backToJourney(journey.homeLabel)}
        </Link>
      ) : null}

      <div className="mt-8">
        <Disclaimer title={strings.disclaimer.notAdvice} />
      </div>
    </article>
  );
}
