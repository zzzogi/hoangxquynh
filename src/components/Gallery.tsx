"use client";

import { JSX, useState } from "react";

export default function Gallery(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<"photos" | "videos">("photos");

  // Placeholder cho đến khi có ảnh thật
  const photoCount: number = 12;

  return (
    <section id="gallery" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-dark-brown text-center mb-4">
          Memories
        </h2>
        <p className="text-center text-medium-gray text-lg mb-12">
          Những khoảnh khắc đẹp nhất của chúng tôi
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedTab("photos")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedTab === "photos"
                ? "bg-dark-brown text-light-beige"
                : "bg-light-beige text-dark-brown hover:bg-warm-tan hover:text-light-beige"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setSelectedTab("videos")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedTab === "videos"
                ? "bg-dark-brown text-light-beige"
                : "bg-light-beige text-dark-brown hover:bg-warm-tan hover:text-light-beige"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {Array.from({ length: photoCount }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-light-beige rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              {/* Thêm ảnh thật vào đây */}
              <div className="w-full h-full flex items-center justify-center text-medium-gray">
                <span className="text-4xl">📷</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
