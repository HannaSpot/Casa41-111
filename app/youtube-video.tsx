"use client";

import { useState } from "react";

type YouTubeVideoProps = {
  videoId: string;
  title: string;
  poster: string;
  vertical?: boolean;
};

export default function YouTubeVideo({ videoId, title, poster, vertical = false }: YouTubeVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`youtubeLite${vertical ? " vertical" : ""}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Reproducir: ${title}`}>
          <img src={poster} alt="" loading="lazy" />
          <span className="youtubePlay" aria-hidden="true"><span /></span>
        </button>
      )}
    </div>
  );
}
