import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simee from "@/components/Simee";
import Travel from "@/components/Travel";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Travel />
      <Simee />
      <Gallery />
      <Footer />
    </main>
  );
}
