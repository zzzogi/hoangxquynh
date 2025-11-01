import type { TravelDestination } from "@/types";
import { JSX } from "react";

const travels: TravelDestination[] = [
  {
    country: "Singapore",
    emoji: "🇸🇬",
    description: "Sư tử biển và Marina Bay",
  },
  {
    country: "Thái Lan",
    emoji: "🇹🇭",
    description: "Đất nước chùa vàng",
  },
  {
    country: "Hàn Quốc",
    emoji: "🇰🇷",
    description: "Xứ sở kim chi",
  },
];

export default function Travel(): JSX.Element {
  return (
    <section id="travel" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-dark-brown text-center mb-4">
          Our Adventures
        </h2>
        <p className="text-center text-medium-gray text-lg mb-16">
          Những chuyến đi đáng nhớ cùng nhau
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {travels.map((travel) => (
            <div
              key={travel.country}
              className="bg-light-beige p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{travel.emoji}</div>
              <h3 className="text-2xl font-serif text-dark-brown mb-2">
                {travel.country}
              </h3>
              <p className="text-medium-gray text-sm">{travel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
