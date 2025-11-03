"use client";

import { useState, useRef, useEffect, JSX } from "react";
import Image from "next/image";

interface Quote {
  text: string;
  image: string;
  author?: string;
}

const quotes: Quote[] = [
  {
    text: "I hope we will go through all the difficulties in the future so that we can celebrate many more anniversaries together. Always love, protect and be an important part of each other. I LOVE YOU",
    image: "/images/our-future-1.jpg",
    author: "Hoàng",
  },
  {
    text: "Một nụ cười có thể thay đổi 1 ngày\nMột cái ôm có thể thay đổi 1 tuần\nMột lời nói có thể thay đổi 1 cuộc sống",
    image: "/images/our-future-2.jpg",
  },
  {
    text: "I got plans for everything i did. But fell in love with u wasn't part of it",
    image: "/images/our-future-3.jpg",
    author: "Hoàng",
  },
  {
    text: "Bảo tàng trưng bày nghệ thuật\nTym anh là để trưng bày vạn vật về em 😉😘",
    image: "/images/our-future-4.jpg",
    author: "Hoàng",
  },
];

export default function OurFuture(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="future"
      className="relative py-20 bg-gradient-to-br from-warm-cream via-light-beige to-warm-tan overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 text-8xl animate-float">💕</div>
        <div className="absolute bottom-20 right-20 text-8xl animate-float-delayed">
          💫
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-6xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-7xl animate-float-delayed">
          💖
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-4">
            Our Future
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Hành trình phía trước với những ước mơ và kỷ niệm đẹp
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div
            className="relative bg-white p-4 md:p-6 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
            }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-brown group cursor-pointer">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
                src={"/video/our-future.mp4"}
              >
                <source src="/videos/our-future.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                  isPlaying
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100"
                }`}
                onClick={togglePlay}
              >
                <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                  {isPlaying ? (
                    // Pause Icon
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-dark-brown ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    // Play Icon
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-dark-brown ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Video Title Overlay */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl md:text-2xl font-serif">
                    Hoàng & Quỳnh - Our Journey Together
                  </h3>
                </div>
              )}
            </div>

            {/* Video Caption */}
            <div className="mt-4 text-center">
              <p className="text-dark-brown font-serif text-lg">
                Forever & Always 💕
              </p>
            </div>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-serif text-dark-brown text-center mb-12">
            Love Messages
          </h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:scale-[1.02] ${
                  index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                }`}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-64 md:h-80 bg-warm-cream overflow-hidden group">
                    {/* Placeholder - Replace with actual images */}
                    <div className="w-full h-full flex items-center justify-center text-8xl">
                      {index === 0
                        ? "💑"
                        : index === 1
                        ? "🤗"
                        : index === 2
                        ? "💝"
                        : "🎨"}
                    </div>
                    <Image
                      src={quote.image}
                      alt={`Quote ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Quote Content */}
                  <div className="p-6 md:p-8 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-warm-tan flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-dark-brown leading-relaxed text-base md:text-lg mb-4 whitespace-pre-line font-light italic">
                      "{quote.text}"
                    </blockquote>

                    {/* Author */}
                    {quote.author && (
                      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-warm-cream/50">
                        <div className="w-10 h-10 rounded-full bg-warm-tan flex items-center justify-center text-white font-bold">
                          {quote.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-dark-brown">
                            {quote.author}
                          </p>
                          <p className="text-xs text-medium-gray">
                            With all my love
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-6xl mb-6">💍</div>
            <h3 className="text-2xl md:text-3xl font-serif text-dark-brown mb-4">
              Together Forever
            </h3>
            <p className="text-medium-gray leading-relaxed text-lg">
              Dù tương lai có mang đến bao nhiêu thử thách, chúng ta sẽ luôn bên
              nhau, vượt qua mọi khó khăn và tạo nên những kỷ niệm đẹp không bao
              giờ phai.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-4xl">
              <span className="animate-float">❤️</span>
              <span
                className="animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                💕
              </span>
              <span className="animate-float" style={{ animationDelay: "1s" }}>
                💖
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
