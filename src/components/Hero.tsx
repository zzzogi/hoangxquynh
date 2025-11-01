"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero(): JSX.Element {
  const startDate = new Date("2021-04-10"); // Ngày bắt đầu yêu
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      // Tính toán chi tiết
      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Tính năm và tháng
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      return {
        years,
        months,
        days,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <div className="min-h-screen" />;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder - Thay bằng ảnh thật của Hoàng và Quỳnh */}
        <div className="relative w-full h-full bg-gradient-to-br from-warm-cream via-warm-tan to-dark-brown">
          <Image
            src="/images/hero-background.jpg"
            alt="Hoàng and Quỳnh"
            fill
            priority
            className="object-cover"
            quality={100}
          />

          {/* Temporary gradient background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzbWFsbEdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            >
              {i % 2 === 0 ? "❤️" : "✨"}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Main Title with Elegant Animation */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl leading-tight">
            Nguyễn Hoàng
            <span className="block text-4xl md:text-5xl lg:text-6xl text-warm-cream my-6">
              &
            </span>
            Quỳnh Phạm
          </h1>
          <div className="w-32 h-1 bg-warm-cream mx-auto rounded-full"></div>
        </div>

        {/* Love Counter */}
        <div
          className="mb-16 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-xl md:text-2xl text-warm-cream font-light mb-10">
            Our Love Journey
          </p>

          {/* Counter Display */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 max-w-5xl mx-auto mb-8">
            {/* Years */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.years).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Years
              </div>
            </div>

            {/* Months */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.months).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Months
              </div>
            </div>

            {/* Days */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-warm-cream uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>

          {/* Date Started */}
          <p className="text-white/80 text-base md:text-lg">
            Since{" "}
            <span className="font-bold text-warm-cream">April 10, 2021</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-warm-cream text-dark-brown rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <span className="relative z-10">Discover Our Story</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>

          <a
            href="#gallery"
            className="group inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-dark-brown transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            View Memories
          </a>
        </div>

        {/* Scroll Indicator - Positioned at the bottom with more space */}
        <div className="mt-16 md:mt-20 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm uppercase tracking-wider">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
