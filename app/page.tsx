import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TryDemo from "@/components/Try-Demo";
import Features from "@/components/Features";
import FAQSection from "@/components/FAQs";
import SlideText from "@/components/Slide-Text";
import VoiceCarousel from "@/components/voice-carousel";
import Tools from "@/components/Tools";
import EndlessUseCases from "@/components/endless-use-cases";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="demo-call">
        <TryDemo />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="slide-text">
        <SlideText />
      </section>
      <section id="EndlessUseCases">
        <EndlessUseCases />
      </section>
      <section id="VoiceCarousel">
        <VoiceCarousel />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
}
