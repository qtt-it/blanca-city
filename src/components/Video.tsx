"use client";
import React, { useRef, useEffect, useState } from "react";

const AutoPlayYoutube = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/Hq7JXkv7U0Q?si=UzbSOfL2phtrkB-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  const videoId = "Hq7JXkv7U0Q";
  const baseUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1`;

  const [src, setSrc] = useState(baseUrl);

  // Observer để detect inView
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Khi inView mới thêm autoplay=1
  useEffect(() => {
    if (inView) {
      setSrc(`${baseUrl}&autoplay=1`);
    }
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto rounded-lg overflow-hidden shadow-lg"
    >
      <iframe
        // style={{ minHeight: "900px" }}
        ref={iframeRef}
        className="w-full h-full lg:min-h-[900px] md:aspect-[1920/1080] aspect-[1920/1080]"
        src={src}
        title="Blanca City Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AutoPlayYoutube;
