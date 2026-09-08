"use client";

import { PageHeading } from "@/components/chrome/PageHeading";
import { FallbackNote } from "@/components/i18n/LocaleBits";
import { useStrings } from "@/components/i18n/LocaleProvider";
import type { VideoItem } from "@/content/types";

export function VideoView({ video }: { video: VideoItem }) {
  const strings = useStrings();
  return (
    <div className="content-page mx-auto w-full max-w-3xl lg:max-w-5xl">
      <PageHeading title={video.title} />
      <FallbackNote />
      <div className="mt-5 overflow-hidden rounded-3xl border border-ws-line bg-ws-blue-deep text-white">
        {video.src ? (
          <video
            className="aspect-video w-full bg-black"
            controls
            playsInline
            autoPlay
            src={video.src}
          >
            {video.title}
          </video>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 text-3xl">
              ▶
            </div>
            <p className="font-display text-2xl font-light">{strings.video.placeholderTitle}</p>
            <p className="max-w-md text-sm text-white/80">{video.description}</p>
            <p className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wider">
              {strings.video.coming}
            </p>
          </div>
        )}
      </div>
      <p className="mt-5 text-ws-muted">{strings.video.placeholderBody}</p>
      {video.language ? (
        <p className="mt-2 text-sm font-semibold text-ws-blue">
          {strings.video.language}: {video.language}
        </p>
      ) : null}
    </div>
  );
}
