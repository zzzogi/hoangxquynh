"use client";

import { useState, useEffect, useRef, JSX } from "react";
import Image from "next/image";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

interface Review {
  name: string;
  rating: number;
  review: string;
  date: string;
}

// Counter Animation Component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: CounterProps): JSX.Element {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-3xl md:text-4xl text-warm-tan">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

// Parallax Sticker Component
function ParallaxSticker({
  emoji,
  initialTop,
  initialLeft,
  speed = 0.5,
  delay = 0,
  size = "text-5xl",
}: {
  emoji: string;
  initialTop: string;
  initialLeft: string;
  speed?: number;
  delay?: number;
  size?: string;
}): JSX.Element {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={`absolute ${size} animate-float`}
      style={{
        top: initialTop,
        left: initialLeft,
        transform: `translateY(${offsetY}px)`,
        animationDelay: `${delay}s`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {emoji}
    </div>
  );
}

// Sample reviews data
const reviews: Review[] = [
  {
    name: "RamboRambo",
    rating: 5,
    review:
      "M rất ít đánh giá quán cafe nào nhưng m đã qua quán 3 lần, không gian vừa phải ánh sáng tự nhiên hợp làm việc, rất yên tĩnh. Đồ uống m hay gọi bạc sỉu hoặc matcha latte đều ok, giá rẻ với những quán mặt phố như vậy! Ngày lễ m đặt bàn xem pháo hoa các b cũng takecare tốt! Sẽ quay lại!",
    date: "5 tháng trước",
  },
  {
    name: "Nguyễn Vy",
    rating: 5,
    review:
      "Quán nhỏ nhưng nhiều chỗ ngồi thoải mái, thoáng đãng, thích hợp để đi nói chuyện hoặc cũng để chạy deadline, thay vì các quán chỉ thiết kế bàn cho người làm việc. Nhà wc quán sạch sẽ, 100 điểm vì điều này. Nhân viên quán thân thiện, chuyên nghiệp. Đồ uống ngon và vừa miệng, giá cả vừa phải, hợp lý, sẽ quay lại quán nhiều nhiều.",
    date: "9 tháng trước",
  },
  {
    name: "Alina Oro",
    rating: 5,
    review:
      "Nice looking place. Not big anough for a group of friends but might be good for couples or a small group of friends. Nearby us nice park with a beautiful lake. Coffee is average I would prefer to buy somewhere else. Other drinks might be better.",
    date: "A year ago",
  },
];

// Marquee images data
const marqueeImages = [
  { src: "/images/simee-2hands.png", alt: "Two Hands Toasting" },
  { src: "/images/simee-dish.png", alt: "Drinks and Dessert" },
  { src: "/images/simee-cake.png", alt: "Simee Cake" },
  { src: "/images/simee-cup.png", alt: "Hand Holding Cup" },
  { src: "/images/simee-latte.png", alt: "Latte Art" },
  { src: "/images/simee-drink-tray.png", alt: "Drink on Tray" },
  { src: "/images/simee-hand-cup.png", alt: "Hand with Coffee" },
];

export default function Simee(): JSX.Element {
  const openingDate = new Date("2022-10-03");
  const today = new Date();
  const daysSinceOpening = Math.floor(
    (today.getTime() - openingDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <section
      id="simee"
      className="py-20 bg-gradient-to-br from-warm-cream via-light-beige to-warm-cream relative overflow-hidden"
    >
      {/* Background Decorative Stickers with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <ParallaxSticker
          emoji="☕"
          initialTop="10%"
          initialLeft="10%"
          speed={0.8}
          delay={0}
          size="text-6xl"
        />
        <ParallaxSticker
          emoji="❤️"
          initialTop="15%"
          initialLeft="85%"
          speed={0.9}
          delay={1}
          size="text-5xl"
        />
        <ParallaxSticker
          emoji="🌟"
          initialTop="70%"
          initialLeft="15%"
          speed={0.85}
          delay={1.5}
          size="text-5xl"
        />
        <ParallaxSticker
          emoji="☕"
          initialTop="35%"
          initialLeft="20%"
          speed={0.5}
          delay={2}
          size="text-4xl"
        />
        <ParallaxSticker
          emoji="💝"
          initialTop="8%"
          initialLeft="65%"
          speed={0.6}
          delay={0.8}
          size="text-6xl"
        />
        <ParallaxSticker
          emoji="🤎"
          initialTop="40%"
          initialLeft="18%"
          speed={0.55}
          delay={1.8}
          size="text-4xl"
        />
        <ParallaxSticker
          emoji="☕"
          initialTop="60%"
          initialLeft="80%"
          speed={0.6}
          delay={0.5}
          size="text-6xl"
        />
        <ParallaxSticker
          emoji="✨"
          initialTop="25%"
          initialLeft="25%"
          speed={0.3}
          delay={0.3}
          size="text-4xl"
        />
        <ParallaxSticker
          emoji="❤️"
          initialTop="45%"
          initialLeft="90%"
          speed={0.35}
          delay={2.5}
          size="text-4xl"
        />
        <ParallaxSticker
          emoji="☕"
          initialTop="85%"
          initialLeft="35%"
          speed={0.3}
          delay={3}
          size="text-5xl"
        />
        <ParallaxSticker
          emoji="🧋"
          initialTop="20%"
          initialLeft="50%"
          speed={0.25}
          delay={0.3}
          size="text-3xl"
        />
        <ParallaxSticker
          emoji="🍰"
          initialTop="75%"
          initialLeft="50%"
          speed={0.28}
          delay={1.2}
          size="text-4xl"
        />
        <ParallaxSticker
          emoji="🥐"
          initialTop="90%"
          initialLeft="22%"
          speed={0.32}
          delay={2.8}
          size="text-3xl"
        />
        <ParallaxSticker
          emoji="🌸"
          initialTop="12%"
          initialLeft="75%"
          speed={0.3}
          delay={0.6}
          size="text-4xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-4">
            Simee Café
          </h2>
          <p className="text-2xl text-warm-tan font-light italic mb-2">
            Chạm là "Si", uống là "Mê"
          </p>
          <p className="text-medium-gray text-lg">
            Our Little Paradise on Nguyễn Đình Chiểu Street
          </p>
        </div>

        {/* Main Photos: Store + Couple */}
        <div className="relative max-w-6xl mx-auto mb-24 min-h-[400px]">
          {/* Main Store Image - Center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] md:w-[550px] z-20 group">
            <div
              className="relative transform hover:scale-105 hover:rotate-1 transition-all duration-300"
              style={{
                filter: "drop-shadow(8px 12px 20px rgba(0, 0, 0, 0.25))",
              }}
            >
              <Image
                src="/images/simee-store.png"
                alt="Simee Café Store"
                width={550}
                height={413}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Hoàng & Quỳnh Photo - Bigger, next to store */}
          <div className="absolute top-24 md:top-32 right-8 md:right-32 w-[150px] md:w-[180px] z-30 group">
            <div
              className="relative transform  hover:rotate-[-3deg] hover:scale-110 transition-all duration-300"
              style={{
                filter: "drop-shadow(8px 12px 22px rgba(0, 0, 0, 0.35))",
              }}
            >
              <Image
                src="/images/simee-couple.png"
                alt="Hoàng & Quỳnh at Simee"
                width={380}
                height={380}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Infinite Marquee Carousel */}
        <div className="mb-20 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of images */}
              {marqueeImages.map((image, index) => (
                <div
                  key={`img-1-${index}`}
                  className="marquee-item"
                  style={{
                    transform: `rotate(${
                      (index % 2 === 0 ? 1 : -1) * (Math.random() * 8 + 2)
                    }deg)`,
                  }}
                >
                  <div
                    className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
                    style={{
                      filter: "drop-shadow(6px 10px 18px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {marqueeImages.map((image, index) => (
                <div
                  key={`img-2-${index}`}
                  className="marquee-item"
                  style={{
                    transform: `rotate(${
                      (index % 2 === 0 ? 1 : -1) * (Math.random() * 8 + 2)
                    }deg)`,
                  }}
                >
                  <div
                    className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
                    style={{
                      filter: "drop-shadow(6px 10px 18px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-3">⭐</div>
            <AnimatedCounter end={4} duration={2000} suffix=".3/5" />
            <p className="text-medium-gray text-sm mt-2 uppercase tracking-wider">
              Google Rating
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-3">👥</div>
            <AnimatedCounter end={5000} duration={2000} suffix="+" />
            <p className="text-medium-gray text-sm mt-2 uppercase tracking-wider">
              FB Followers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-3">☕</div>
            <AnimatedCounter end={17000} duration={2000} suffix="+" />
            <p className="text-medium-gray text-sm mt-2 uppercase tracking-wider">
              Customers Served
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-3">📅</div>
            <AnimatedCounter
              end={daysSinceOpening}
              duration={2000}
              suffix="+"
            />
            <p className="text-medium-gray text-sm mt-2 uppercase tracking-wider">
              Days Operating
            </p>
          </div>
        </div>

        {/* Contact Information & Map */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-dark-brown mb-6">
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-semibold text-dark-brown">Địa chỉ</p>
                  <p className="text-medium-gray">
                    51 Nguyễn Đình Chiểu, Phường Lê Đại Hành,
                    <br />
                    Quận Hai Bà Trưng, Hà Nội
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <p className="font-semibold text-dark-brown">Giờ mở cửa</p>
                  <p className="text-medium-gray">8:00 - 23:00 (Hàng ngày)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-dark-brown">Điện thoại</p>
                  <a
                    href="tel:0911738025"
                    className="text-warm-tan hover:underline"
                  >
                    091 173 80 25
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold text-dark-brown">Email</p>
                  <a
                    href="mailto:simee.coffee@gmail.com"
                    className="text-warm-tan hover:underline"
                  >
                    simee.coffee@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">👍</div>
                <div>
                  <p className="font-semibold text-dark-brown">Facebook</p>
                  <a
                    href="https://www.facebook.com/simeecoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-tan hover:underline"
                  >
                    @simeecoffee
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.2226087465674!2d105.84630209999999!3d21.0123435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab65dffd9dd1%3A0x4cfad850003d51cf!2sSimee%20Coffee!5e1!3m2!1svi!2s!4v1762016161669!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-dark-brown text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-dark-brown mb-4 leading-relaxed">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-warm-cream/30">
                  <div className="w-10 h-10 rounded-full bg-warm-tan flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-brown">
                      {review.name}
                    </p>
                    <p className="text-sm text-medium-gray">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/search/simee+coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-warm-tan text-white rounded-full  hover:bg-dark-brown transition-all duration-300 hover:scale-105"
            >
              <span>View All Reviews on Google</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: marquee 40s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-content {
            gap: 1rem;
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
