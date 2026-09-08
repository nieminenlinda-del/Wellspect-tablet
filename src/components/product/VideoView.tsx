import { strings } from "@/content/strings";
import type { VideoItem } from "@/content/types";

export function VideoView({ video }: { video: VideoItem }) {
  return (
    <div className="mx-auto max-w-[var(--video-max)]">
      <div className="overflow-hidden rounded-3xl border-2 border-ws-blue bg-ws-blue-deep text-white">
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
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/80 text-3xl">
              ▶
            </div>
            <p className="font-display text-2xl">{strings.video.placeholderTitle}</p>
            <p className="max-w-md text-sm text-white/80">{video.description}</p>
            <p className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wider">
              {strings.video.coming}
            </p>
          </div>
        )}
      </div>
      <div className="mt-5 space-y-2">
        <h2 className="font-display text-2xl text-ws-blue-deep">{video.title}</h2>
        <p className="text-ws-muted">{strings.video.placeholderBody}</p>
        {video.language ? (
          <p className="text-sm font-semibold text-ws-blue">
            {strings.video.language}: {video.language}
          </p>
        ) : null}
      </div>
    </div>
  );
}
