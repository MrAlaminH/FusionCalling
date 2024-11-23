import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TryDemo from "@/components/Try-Demo";
import Features from "@/components/Features";
import FAQSection from "@/components/FAQs";
import SlideText from "@/components/Slide-Text";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="demo">
        <TryDemo />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="slide-text">
        <SlideText />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
}
