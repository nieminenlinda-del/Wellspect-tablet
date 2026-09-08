import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Screen } from "@/components/Screen";
import { allRoutes, resolvePage } from "@/content/catalog";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return allRoutes()
    .filter((route) => route.slug.length > 0)
    .map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) return { title: "Wellspect" };
  switch (page.type) {
    case "info":
      return { title: "Information" };
    case "map":
      return { title: "Innehållskarta" };
    case "category":
      return { title: page.journey.homeLabel };
    case "hub":
      return { title: page.hub.title };
    case "guide":
      return { title: page.guide.title };
    case "video":
      return { title: page.video.title };
    case "article":
      return { title: page.article.title };
    default:
      return { title: "Wellspect" };
  }
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page || page.type === "home") notFound();
  return <Screen page={page} />;
}
