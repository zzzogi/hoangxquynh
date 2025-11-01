"use client";

import { JSX, useState } from "react";
import Image from "next/image";

interface Person {
  name: string;
  school: string;
  instagram: string;
  instagramHandle: string;
  image1: string; // Ảnh mặc định
  image2: string; // Ảnh khi hover
  description: string;
}

const couple: Person[] = [
  {
    name: "Nguyễn Hoàng",
    school: "Cựu sinh viên Học viện Ngân hàng",
    instagram: "https://instagram.com/_nghoang2110",
    instagramHandle: "@_nghoang2110",
    image1: "/images/hoang-1.jpg", // Thay bằng đường dẫn ảnh thật
    image2: "/images/hoang-2.jpg", // Thay bằng đường dẫn ảnh thật
    description:
      "Một người yêu cà phê, thích khám phá những địa điểm mới và luôn mang theo nụ cười tươi. Hoàng là người đã khởi xướng ý tưởng Simee và biến nó thành hiện thực.",
  },
  {
    name: "Quỳnh Phạm",
    school: "Tốt nghiệp Đại học Kinh tế Quốc dân",
    instagram: "https://instagram.com/_iamnotku",
    instagramHandle: "@_iamnotku",
    image1: "/images/quynh-1.jpg", // Thay bằng đường dẫn ảnh thật
    image2: "/images/quynh-2.jpg", // Thay bằng đường dẫn ảnh thật
    description:
      "Một tâm hồn nghệ sĩ với niềm đam mê ẩm thực và nhiếp ảnh. Quỳnh là người đã tạo nên không gian ấm cúng cho Simee với những chi tiết nhỏ đầy ý nghĩa.",
  },
];

export default function AboutUs(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-20 bg-light-beige relative overflow-hidden"
    >
      {/* Background Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <span className="absolute text-6xl top-10 left-10 animate-float">
          ☕
        </span>
        <span className="absolute text-5xl top-32 right-20 animate-float-delayed">
          ❤️
        </span>
        <span className="absolute text-4xl top-64 left-1/4 animate-float">
          ☕
        </span>
        <span className="absolute text-6xl bottom-32 right-1/4 animate-float-delayed">
          ❤️
        </span>
        <span className="absolute text-5xl bottom-64 left-20 animate-float">
          ☕
        </span>
        <span className="absolute text-4xl top-1/2 right-10 animate-float">
          ❤️
        </span>
        <span className="absolute text-5xl bottom-10 left-1/3 animate-float-delayed">
          ☕
        </span>
        <span className="absolute text-6xl top-20 right-1/3 animate-float">
          ❤️
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-dark-brown text-center mb-4">
          About Us
        </h2>
        <p className="text-center text-medium-gray text-lg mb-16">
          Chúng tôi là ai và câu chuyện của chúng tôi
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {couple.map((person, index) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div
                className="relative h-96 w-full overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image 1 - Default */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="relative w-full h-full bg-warm-cream">
                    {/* Placeholder - Thay bằng Image component khi có ảnh thật */}
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {index === 0 ? "👨" : "👩"}
                    </div>
                    <Image
                      src={person.image1}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Image 2 - Hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-full bg-warm-tan">
                    {/* Placeholder - Thay bằng Image component khi có ảnh thật */}
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {index === 0 ? "🤵" : "👰"}
                    </div>
                    <Image
                      src={person.image2}
                      alt={`${person.name} - hover`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <h3 className="text-2xl font-serif text-dark-brown mb-2">
                  {person.name}
                </h3>
                <p className="text-medium-gray text-sm mb-3">{person.school}</p>

                <p className="text-dark-brown leading-relaxed mb-4">
                  {person.description}
                </p>

                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm-tan hover:text-dark-brown transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {person.instagramHandle}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Love Story Text */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-warm-cream/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-md">
            <p className="text-lg text-dark-brown leading-relaxed text-center">
              Chúng tôi bắt đầu câu chuyện tình yêu từ ngày{" "}
              <span className="font-bold text-warm-tan">
                10 tháng 4 năm 2021
              </span>
              . Cùng nhau khám phá thế giới, xây dựng những kỷ niệm đẹp qua từng
              chuyến đi Singapore, Thái Lan, Hàn Quốc và hiện thực hóa ước mơ
              với quán cà phê{" "}
              <span className="font-bold text-warm-tan">Simee</span> của riêng
              mình trên đường Nguyễn Đình Chiểu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
