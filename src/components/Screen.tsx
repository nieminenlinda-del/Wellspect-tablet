import { AppChrome } from "@/components/chrome/AppChrome";
import { ContentGrid } from "@/components/category/ContentGrid";
import { ArticleView } from "@/components/content/ArticleView";
import { ContentMapView } from "@/components/content/ContentMapView";
import { InfoPage } from "@/components/content/InfoPage";
import { GuideViewer } from "@/components/guide/GuideViewer";
import { HomeScreen } from "@/components/home/HomeScreen";
import { ProductHubView } from "@/components/product/ProductHubView";
import { VideoView } from "@/components/product/VideoView";
import type { ContentPage } from "@/content/types";

export function Screen({ page }: { page: ContentPage }) {
  if (page.type === "home") {
    return <HomeScreen />;
  }

  return (
    <AppChrome page={page}>
      {page.type === "info" ? <InfoPage /> : null}
      {page.type === "map" ? <ContentMapView /> : null}
      {page.type === "category" ? <ContentGrid journey={page.journey} /> : null}
      {page.type === "hub" ? <ProductHubView hub={page.hub} /> : null}
      {page.type === "guide" ? <GuideViewer guide={page.guide} /> : null}
      {page.type === "video" ? <VideoView video={page.video} /> : null}
      {page.type === "article" ? <ArticleView article={page.article} /> : null}
    </AppChrome>
  );
}
