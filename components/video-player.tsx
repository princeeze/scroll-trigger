// components/VideoPlayer.tsx
import { useEffect, useRef } from "react";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const initPlayer = async () => {
      const videojs = (await import("video.js")).default;

      if (!playerRef.current) {
        const videoNode = videoRef.current;

        if (videoNode) {
          playerRef.current = videojs(videoNode, {
            controls: false,
            autoplay: true,
            preload: "auto",
            muted: true,
            fluid: false,
            responsive: true,
            poster: "/poster.png",
            bigPlayButton: false,
            loadingSpinner: true,
            loop: true,
            fill: true,
            sources: [
              {
                src: src,
                type: "application/dash+xml", // For DASH streams
              },
            ],
          });
        }
      }
    };

    initPlayer();

    // Cleanup function to dispose of Video.js player
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src]);

  return (
    <div className="h-full w-full">
      <video
        ref={videoRef}
        className="video-js vjs-fill"
        style={{ objectFit: "contain" }}
        data-setup="{}"
      />
    </div>
  );
}
