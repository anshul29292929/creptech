import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTiers from './components/ServiceTiers';
import PricingPhilosophy from './components/PricingPhilosophy';
import BentoPortfolio from './components/BentoPortfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SDLCFlow from './components/SDLCFlow';
import ProjectShowcase from './components/ProjectShowcase';
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

      <div className="py-20">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
      <ServiceTiers />
      <SDLCFlow />
      <PricingPhilosophy />
      <BentoPortfolio />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="bg-deep-black text-white selection:bg-primary-blue selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceTiers />} />
          <Route path="/portfolio" element={<BentoPortfolio />} />
          <Route path="/prices" element={<PricingPhilosophy />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/project/:slug" element={<ProjectShowcase />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
