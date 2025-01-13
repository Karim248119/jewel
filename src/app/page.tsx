"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Nav";
import Aboutus from "./sections/Aboutus";
import Collections from "./sections/Collections";
import Awards from "./sections/Awards";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Collections />
      <Awards />
      <Reviews />
      <Footer />
    </div>
  );
}
