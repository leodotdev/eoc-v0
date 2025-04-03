import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeLiteProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  className?: string;
  onReady?: () => void;
  playbackRate?: number;
}

export function YouTubeLite({
  videoId,
  title = "YouTube video",
  autoplay = false,
  className = "",
  onReady,
  playbackRate = 1,
}: YouTubeLiteProps) {
  const [isConsented, setIsConsented] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    if (isConsented && !isLoaded) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube-nocookie.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Initialize player when API is ready
      window.onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player(`youtube-${videoId}`, {
          videoId,
          playerVars: {
            autoplay: autoplay ? 1 : 0,
            controls: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              setIsLoaded(true);
              if (playbackRate !== 1) {
                event.target.setPlaybackRate(playbackRate);
              }
              onReady?.();
            },
          },
        });
      };
    }
  }, [isConsented, videoId, autoplay, onReady, playbackRate, isLoaded]);

  if (!isConsented) {
    return (
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-lg ${className}`}
        role="button"
        onClick={() => setIsConsented(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsConsented(true)}
        tabIndex={0}
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <button
              className="rounded-full bg-red-600 p-4 transition-transform hover:scale-110"
              aria-label="Load YouTube video"
            >
              <Play className="h-8 w-8 text-white" />
            </button>
            <p className="mt-4 text-sm text-white">
              Click to load video. This will enable YouTube cookies.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-lg ${className}`}
    >
      <div id={`youtube-${videoId}`} className="h-full w-full" />
    </div>
  );
}
