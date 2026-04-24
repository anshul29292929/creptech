import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

import { LampContainer } from './components/ui/lamp';
import ClientsSection from './components/ClientsSection';



function Home() {
  return (
    <>
      <Helmet>
        <title>CrepTech | Elite Web Engineering & Digital Transformation</title>
        <meta name="description" content="Engineering at the edge of possibility. CrepTech delivers elite web development, e-commerce solutions, and digital strategy at nominal prices." />
        <link rel="canonical" href="https://creptech.online/" />
      </Helmet>
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

      {/* Clients Section — pulled up to close the LampContainer gap */}
      <div className="-mt-[28rem] md:-mt-[38rem] relative z-20">
        <ClientsSection />
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
