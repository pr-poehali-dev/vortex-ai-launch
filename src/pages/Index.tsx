import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import BeforeAfter from "@/components/landing/BeforeAfter";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import MainOffer from "@/components/landing/MainOffer";
import Trust from "@/components/landing/Trust";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <MainOffer />
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;
