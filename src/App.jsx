import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import About from "./section/About";
import Stats from "./section/Stats";
import Dishes from "./section/Dishes";
import Features from "./section/Features";
import BookingProcess from "./section/Bookingprocess";
import Timing from "./section/Timing"
import Testimonials from "./section/Testimonials";
import FAQs from "./section/FAQs";
import CTA  from "./section/CTA";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";
const App = () => {
  return (
    <>
    <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default App;