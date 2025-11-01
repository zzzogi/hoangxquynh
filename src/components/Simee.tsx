import { JSX } from "react";

export default function Simee(): JSX.Element {
  return (
    <section id="simee" className="py-20 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown text-center mb-4">
            Simee Café
          </h2>
          <p className="text-center text-medium-gray text-xl mb-12">
            Our Little Paradise on Nguyễn Đình Chiểu Street
          </p>

          <div className="bg-warm-cream p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">☕</span>
            </div>
            <p className="text-lg text-dark-brown leading-relaxed text-center mb-6">
              Simee không chỉ là một quán cà phê, đó là nơi chúng tôi cùng nhau
              xây dựng ước mơ, là không gian ấm áp mà chúng tôi muốn chia sẻ với
              mọi người. Mỗi tách cà phê là một câu chuyện, mỗi góc nhỏ đều mang
              dấu ấn tình yêu của chúng tôi.
            </p>
            <div className="text-center">
              <p className="text-medium-gray">📍 Đường Nguyễn Đình Chiểu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
