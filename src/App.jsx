import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WebServicesGrid from './components/WebServicesGrid';
import WebPricingSection from './components/WebPricingSection';
import FAQSection from './components/FAQSection';
import BentoPortfolio from './components/BentoPortfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SDLCFlow from './components/SDLCFlow';
import ProjectShowcase from './components/ProjectShowcase';
import CompanyPage from './components/CompanyPage';
import ProcessPage from './components/ProcessPage';
import PricingPage from './components/PricingPage';
import CareersPage from './components/CareersPage';
import JournalPage from './components/JournalPage';
import LegalPage from './components/LegalPage';
import PrivacyTermsPage from './components/PrivacyTermsPage';
import ScrollToTop from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollToTopWidget from './components/ScrollToTopWidget';
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards';
import { LampContainer } from './components/ui/lamp';

const testimonials = [
  {
    quote: "CrepTech transformed our legacy system into a high-performance SaaS. Their engineering depth is unmatched.",
    name: "Sarah Chen",
    title: "CTO at NexusFlow"
  },
  {
    quote: "The value we got for the price was incredible. Elite results at nominal charges is not just a slogan.",
    name: "Marcus Thorne",
    title: "Founder of EcoSphere"
  },
  {
    quote: "Clean code, distributed systems expertise, and rapid delivery. Exactly what our series A startup needed.",
    name: "Elena Rodriguez",
    title: "VPE at QuantumLink"
  }
];

function Home() {
  return (
    <>
      <Hero />

      <section className="bg-deep-black">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Engineering <br /> at the Edge of <span className="text-white">Possibility.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-text-dimmed text-center max-w-xl mx-auto mt-6 text-lg"
          >
            We bridge the gap between complex engineering and elegant design.
            Delivering the "Nominal Pricing" promise without compromising on "Elite Quality."
          </motion.p>
        </LampContainer>
      </section>

      <div className="relative z-20 py-10 md:py-20 -mt-32 md:-mt-48">
        {/* Subtle background glow for the testimonials */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[200px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>

      {/* Web services we provide */}
      <WebServicesGrid />

      <SDLCFlow />

      {/* Website pricing plans */}
      <WebPricingSection />

      <FAQSection />
      <BentoPortfolio />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <main className="bg-deep-black text-white selection:bg-primary-blue selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<BentoPortfolio />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/project/:slug" element={<ProjectShowcase />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
        </Routes>
        <Footer />
        <ScrollToTopWidget />
      </main>
    </Router>
  );
}

export default App;
