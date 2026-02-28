import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Accordion } from './ui/accordion';

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Our pricing is transparent and scales with your needs. Starter websites begin at Rs.9,999, Business websites from Rs.24,999, and full E-commerce stores from Rs.49,999. Every project gets a fixed-price quote upfront - no surprises, no hidden charges. Custom enterprise projects are scoped individually; reach out and we will send a detailed estimate within 24 hours.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines depend on scope - a Starter site typically launches in 5-7 business days, a Business website in 2-3 weeks, and an E-commerce store in 4-6 weeks. We share a project roadmap before work begins so you always know exactly where things stand. Need it faster? Ask about our rush delivery option.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "All plans include unlimited revision rounds during the design phase. Once development begins, each plan includes a fixed number of change requests (3 for Starter, 7 for Business, unlimited for E-commerce). We work iteratively and transparently - most clients finalise their design in 2 rounds.",
  },
  {
    question: "Is hosting included in the price?",
    answer:
      "Hosting is not bundled into the one-time build cost, which keeps your pricing fair and flexible. We recommend and configure best-in-class hosting partners (e.g., Vercel, Hostinger, AWS) and guide you through setup. Typical hosting costs range from Rs.200-Rs.800/month depending on traffic and features. We can also manage hosting for you on a monthly retainer.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Yes - every website we build ships with on-page SEO foundations: semantic HTML structure, meta tags, Open Graph, sitemap.xml, robots.txt, page-speed optimisation, and Google Analytics integration. For ongoing SEO campaigns (keyword strategy, content calendars, link building), we offer a dedicated SEO Optimisation service starting at Rs.7,999/month.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-32 px-6 bg-deep-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-blue font-black tracking-[0.4em] uppercase mb-4 block text-xs"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase"
          >
            Frequently <span className="text-primary-blue text-glow">Asked.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dimmed text-xl max-w-lg mx-auto leading-relaxed"
          >
            Everything you need to know before we start building together.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-white/[0.06] bg-white/[0.02] px-6 md:px-10 overflow-hidden"
        >
          <Accordion items={faqs} />
        </motion.div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-text-dimmed">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-primary-blue text-xs font-black uppercase tracking-widest hover:bg-primary-blue hover:text-white transition-all"
          >
            <MessageCircle size={14} />
            Talk to Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
