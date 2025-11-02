"use client";

import { useState, useEffect, useRef, JSX } from "react";
import Image from "next/image";

interface Highlight {
  name: string;
  images: string[];
}

interface Destination {
  country: string;
  emoji: string;
  description: string;
  backgroundColor: string;
  gradientFrom: string;
  gradientTo: string;
  imagePath?: string;
  highlights: Highlight[];
}

const destinations: Destination[] = [
  {
    country: "Singapore",
    emoji: "🇸🇬",
    description:
      "Sư tử biển và Marina Bay - Nơi hiện đại hòa quyện với truyền thống",
    backgroundColor: "#ff6b6b",
    gradientFrom: "#ee5a6f",
    gradientTo: "#f29263",
    imagePath: "/images/singapore.jpg",
    highlights: [
      {
        name: "Marina Bay Sands",
        images: [
          "/images/sg-mbs-1.jpg",
          "/images/sg-mbs-2.jpg",
          "/images/sg-mbs-3.jpg",
        ],
      },
      {
        name: "Gardens by the Bay",
        images: ["/images/sg-garden-1.jpg", "/images/sg-garden-2.jpg"],
      },
      {
        name: "Sentosa Island",
        images: ["/images/sg-sentosa-1.jpg", "/images/sg-sentosa-2.jpg"],
      },
    ],
  },
  {
    country: "Thái Lan",
    emoji: "🇹🇭",
    description: "Đất nước chùa vàng - Văn hóa rực rỡ và ẩm thực tuyệt vời",
    backgroundColor: "#4ecdc4",
    gradientFrom: "#44a08d",
    gradientTo: "#093637",
    imagePath: "/images/thailand.jpg",
    highlights: [
      {
        name: "Grand Palace",
        images: [
          "/images/th-palace-1.jpg",
          "/images/th-palace-2.jpg",
          "/images/th-palace-3.jpg",
        ],
      },
      {
        name: "Floating Market",
        images: ["/images/th-market-1.jpg", "/images/th-market-2.jpg"],
      },
      {
        name: "Phi Phi Islands",
        images: ["/images/th-island-1.jpg", "/images/th-island-2.jpg"],
      },
    ],
  },
  {
    country: "Hàn Quốc",
    emoji: "🇰🇷",
    description: "Xứ sở kim chi - Nơi truyền thống gặp gỡ công nghệ",
    backgroundColor: "#a29bfe",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    imagePath: "/images/korea.jpg",
    highlights: [
      {
        name: "Gyeongbokgung Palace",
        images: ["/images/kr-palace-1.jpg", "/images/kr-palace-2.jpg"],
      },
      {
        name: "N Seoul Tower",
        images: [
          "/images/kr-tower-1.jpg",
          "/images/kr-tower-2.jpg",
          "/images/kr-tower-3.jpg",
        ],
      },
      {
        name: "Myeongdong",
        images: ["/images/kr-myeong-1.jpg", "/images/kr-myeong-2.jpg"],
      },
    ],
  },
];

export default function Travel(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredHighlight, setHoveredHighlight] = useState<{
    destIdx: number;
    highlightIdx: number;
    imageIdx: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight && containerTop + containerHeight > 0) {
        const start = -containerTop;
        const end = containerHeight - windowHeight;
        const progress = Math.max(0, Math.min(1, start / end));

        setScrollProgress(progress);

        const index = Math.floor(progress * 3);
        setCurrentIndex(Math.min(index, 2));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHighlightClick = (destIdx: number, highlightIdx: number) => {
    if (isMobile) {
      if (
        hoveredHighlight?.destIdx === destIdx &&
        hoveredHighlight?.highlightIdx === highlightIdx
      ) {
        // Cycle through images if already selected
        const highlight = destinations[destIdx].highlights[highlightIdx];
        const nextImageIdx =
          (hoveredHighlight.imageIdx + 1) % highlight.images.length;
        setHoveredHighlight({ destIdx, highlightIdx, imageIdx: nextImageIdx });
      } else {
        // Select this highlight
        setHoveredHighlight({ destIdx, highlightIdx, imageIdx: 0 });
      }
    }
  };

  return (
    <div id="travel" ref={containerRef} className="relative">
      {/* Title Section */}
      <div className="relative min-h-[35vh] flex items-center justify-center bg-gradient-to-b from-light-beige to-warm-cream">
        <div className="text-center px-6">
          <h2 className="text-5xl md:text-6xl font-serif text-dark-brown mb-4">
            Our Adventures
          </h2>
          <p className="text-xl text-medium-gray">
            Những chuyến đi đáng nhớ cùng nhau
          </p>
        </div>
      </div>

      {/* Absolute Vertical Path + Airplane */}
      <div
        className={`absolute top-[35vh] bottom-0 w-1 pointer-events-none z-40 transition-all duration-500`}
        style={{
          transform: isMobile ? "translateX(-50%)" : "translateX(-50%)",
          left: isMobile ? "2rem" : "50%",
        }}
      >
        {/* Background Dashed Line */}
        <div
          className="absolute left-1/2 top-0 w-0 h-full border-l-4 border-dashed border-white/40"
          style={{ transform: "translateX(-50%)" }}
        />

        {/* Animated Solid Line */}
        <div
          className="absolute left-1/2 top-0 w-0 border-l-4 border-white"
          style={{
            transform: "translateX(-50%)",
            height: `${scrollProgress * 100}%`,
            transition: "height 0.1s linear",
          }}
        />

        {/* Destination Dots */}
        {destinations.map((dest, idx) => {
          const positions = [16, 50, 84];
          return (
            <div
              key={idx}
              className="absolute left-1/2"
              style={{
                top: `${positions[idx]}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-500 ${
                  currentIndex >= idx
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-40"
                }`}
              >
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: dest.backgroundColor }}
                />
              </div>
              <div
                className={`absolute ${
                  isMobile ? "-left-16" : "-right-16"
                } top-1/2 -translate-y-1/2 text-4xl transition-all duration-500 ${
                  currentIndex === idx
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
              >
                {dest.emoji}
              </div>
            </div>
          );
        })}

        {/* Animated Airplane */}
        <div
          className="absolute left-1/2 text-5xl transition-all duration-200 ease-linear"
          style={{
            top: `${scrollProgress * 100}%`,
            transform: "translate(-50%, -50%) rotate(180deg)",
            filter: "drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.5))",
          }}
        >
          ✈️
        </div>
      </div>

      {/* 3 Full-height Sections */}
      {destinations.map((dest, idx) => (
        <section
          key={idx}
          className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000"
          style={{
            background: `linear-gradient(135deg, ${dest.gradientFrom}, ${dest.gradientTo})`,
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-20 left-20 text-8xl animate-float">
              {dest.emoji}
            </div>
            <div className="absolute bottom-20 right-20 text-8xl animate-float-delayed">
              {dest.emoji}
            </div>
            <div
              className="absolute top-1/2 right-1/3 text-6xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              {dest.emoji}
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 w-full">
            {/* Desktop Layout (2 columns) */}
            <div className="hidden md:grid md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              {/* Left Column: Info Card */}
              <div
                className={`transform transition-all duration-700 ${
                  currentIndex === idx
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl">
                  <div className="text-7xl mb-6 text-center">{dest.emoji}</div>
                  <h3 className="text-4xl font-serif text-dark-brown mb-4 text-center">
                    {dest.country}
                  </h3>
                  <p className="text-medium-gray mb-8 text-center leading-relaxed text-lg">
                    {dest.description}
                  </p>

                  <div className="space-y-3">
                    <p className="font-bold text-dark-brown mb-4 text-lg">
                      ✨ Highlights:
                    </p>
                    {dest.highlights.map((highlight, highlightIdx) => (
                      <div
                        key={highlightIdx}
                        onMouseEnter={() =>
                          setHoveredHighlight({
                            destIdx: idx,
                            highlightIdx,
                            imageIdx: 0,
                          })
                        }
                        onMouseLeave={() => setHoveredHighlight(null)}
                        className="flex items-center gap-3 text-medium-gray bg-warm-cream/30 p-3 rounded-lg hover:bg-warm-cream/50 transition-all duration-300 group cursor-pointer"
                      >
                        <span className="text-2xl group-hover:scale-125 transition-transform">
                          📍
                        </span>
                        <span className="text-lg group-hover:text-dark-brown transition-colors">
                          {highlight.name}
                        </span>
                        <span className="ml-auto text-sm text-warm-tan">
                          ({highlight.images.length})
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <span className="inline-block px-6 py-2 bg-warm-tan text-white rounded-full font-semibold">
                      Destination {idx + 1} of 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo Desktop */}
              <div
                className={`flex justify-center transform transition-all duration-700 ${
                  currentIndex === idx
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <PhotoCard
                  dest={dest}
                  idx={idx}
                  hoveredHighlight={hoveredHighlight}
                  isMobile={false}
                />
              </div>
            </div>

            {/* Mobile Layout (Stacked) */}
            <div className="md:hidden space-y-8">
              {/* Photo Mobile - Top */}
              <div
                className={`flex justify-center transform transition-all duration-700 ${
                  currentIndex === idx
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <PhotoCard
                  dest={dest}
                  idx={idx}
                  hoveredHighlight={hoveredHighlight}
                  isMobile={true}
                  onHighlightClick={handleHighlightClick}
                />
              </div>

              {/* Info Card Mobile - Bottom */}
              <div
                className={`transform transition-all duration-700 ${
                  currentIndex === idx
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="text-6xl mb-4 text-center">{dest.emoji}</div>
                  <h3 className="text-3xl font-serif text-dark-brown mb-3 text-center">
                    {dest.country}
                  </h3>
                  <p className="text-medium-gray mb-6 text-center leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-bold text-dark-brown mb-3 text-base">
                      ✨ Highlights:
                    </p>
                    {dest.highlights.map((highlight, highlightIdx) => (
                      <button
                        key={highlightIdx}
                        onClick={() => handleHighlightClick(idx, highlightIdx)}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg transition-all duration-300 text-left ${
                          hoveredHighlight?.destIdx === idx &&
                          hoveredHighlight?.highlightIdx === highlightIdx
                            ? "bg-warm-tan text-white"
                            : "text-medium-gray bg-warm-cream/30 hover:bg-warm-cream/50"
                        }`}
                      >
                        <span className="text-xl">📍</span>
                        <span className="text-sm flex-1">{highlight.name}</span>
                        <span className="text-xs">
                          ({highlight.images.length})
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-warm-tan text-white rounded-full text-sm font-semibold">
                      {idx + 1}/3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

// Photo Card Component
function PhotoCard({
  dest,
  idx,
  hoveredHighlight,
  isMobile,
  onHighlightClick,
}: {
  dest: Destination;
  idx: number;
  hoveredHighlight: any;
  isMobile: boolean;
  onHighlightClick?: (destIdx: number, highlightIdx: number) => void;
}) {
  return (
    <div
      className="relative"
      style={{
        filter: "drop-shadow(10px 15px 25px rgba(0, 0, 0, 0.3))",
      }}
    >
      <div className="bg-white p-4 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
        <div
          className={`relative ${
            isMobile
              ? "w-[280px] h-[350px]"
              : "w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
          } bg-warm-cream rounded-xl overflow-hidden group`}
          onClick={() =>
            isMobile &&
            onHighlightClick &&
            hoveredHighlight &&
            onHighlightClick(
              hoveredHighlight.destIdx,
              hoveredHighlight.highlightIdx
            )
          }
        >
          {/* Main Image */}
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <div
              className="absolute inset-0 flex items-center justify-center text-9xl transition-opacity duration-500"
              style={{
                opacity:
                  !hoveredHighlight || hoveredHighlight.destIdx !== idx ? 1 : 0,
              }}
            >
              {dest.emoji}
            </div>

            {/* Hover/Click image */}
            {hoveredHighlight && hoveredHighlight.destIdx === idx && (
              <div
                className="absolute inset-0 flex items-center justify-center text-9xl transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4">📸</div>
                  <p className="text-white text-lg font-serif">
                    {dest.highlights[hoveredHighlight.highlightIdx].name}
                  </p>
                  {isMobile && (
                    <p className="text-white text-xs mt-2 opacity-70">
                      ({hoveredHighlight.imageIdx + 1}/
                      {
                        dest.highlights[hoveredHighlight.highlightIdx].images
                          .length
                      }
                      )
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-center mt-4 font-serif text-dark-brown text-2xl">
          {dest.country} ✈️
        </p>
      </div>
    </div>
  );
}
