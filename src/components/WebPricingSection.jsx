import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Send, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

const FORM_ENDPOINT = '/api/contact.php';

const plans = [
  {
    id: 'kickstart',
    name: 'Kickstart',
    tagline: 'Single-page launch for budding businesses',
    price: '\u20b92,999',
    dollarPrice: '$39',
    priceNote: 'one-time',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/60',
    bgGlow: 'bg-amber-500/5',
    glowColor: 'bg-amber-500/20',
    btnBg: 'bg-amber-500 hover:bg-amber-400',
    badge: 'Best Entry Point',
    features: [
      '1 fully responsive single-page site',
      'Up to 5 sections (Hero, About, Services, Testimonials, Contact)',
      'Mobile & tablet optimised',
      'Basic contact section (mailto link)',
      'Social media links integration',
      'Basic on-page SEO (meta, OG tags)',
      '7-day turnaround',
      '7 days post-launch support',
    ],
    popular: false,
  },
  {
    id: 'starter',
    name: 'Starter Website',
    tagline: 'Perfect for individuals & small businesses',
    price: '\u20b99,999',
    dollarPrice: '$119',
    priceNote: 'one-time',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/60',
    bgGlow: 'bg-emerald-500/5',
    glowColor: 'bg-emerald-500/20',
    btnBg: 'bg-emerald-500 hover:bg-emerald-400',
    features: [
      'Up to 5 responsive pages',
      'Mobile-first dynamic design',
      'Contact form with direct email delivery',
      'Google Analytics & Search Console setup',
      'Standard on-page SEO optimization',
      'Premium animations & interactions',
      '100% Code & Asset Ownership',
      '1 month free critical technical support',
      'Direct developer communication channel',
    ],
    popular: false,
  },
  {
    id: 'business',
    name: 'Business Website',
    tagline: 'For growing businesses & professional brands',
    price: '\u20b924,999',
    dollarPrice: '$299',
    priceNote: 'one-time',
    accentColor: 'text-primary-blue',
    borderColor: 'border-primary-blue/40',
    hoverBorder: 'hover:border-primary-blue/70',
    bgGlow: 'bg-primary-blue/10',
    glowColor: 'bg-primary-blue/30',
    btnBg: 'bg-primary-blue hover:bg-blue-500',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'CMS integration',
      'Advanced SEO optimization',
      'Blog / News section',
      '3 months free support',
      'Performance optimization',
      'Social media integration',
    ],
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Website',
    tagline: 'Full-featured online store for serious sellers',
    price: '\u20b934,999',
    dollarPrice: '$419',
    priceNote: 'one-time',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/30',
    hoverBorder: 'hover:border-violet-500/60',
    bgGlow: 'bg-violet-500/5',
    glowColor: 'bg-violet-500/20',
    btnBg: 'bg-violet-500 hover:bg-violet-400',
    features: [
      'Unlimited product listings',
      'Secure payment gateway',
      'Inventory management',
      'Order tracking system',
      'Discount & coupon engine',
      'Admin dashboard',
      '6 months free support',
      'Mobile app-ready API',
    ],
    popular: false,
  },
];


function PlanModal({ plan, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate successful form submission on local development server
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', company: '', message: '' });
        console.log('Local dev environment detected: Form submission mocked successfully.');
      }, 1500);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          Company: form.company || 'Not provided',
          'Selected Plan': plan.name,
          'Plan Price': plan.price,
          Message: form.message || 'No additional message.',
          _subject: `New Enquiry: ${plan.name} from ${form.name} — CrepTech`,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
      } else {
        console.error('Pricing page form submission failed with response:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Pricing page form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
        className="w-full max-w-lg bg-[#0d0d18] border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-8 border-b border-white/5">
          <div>
            <span className={`text-xs font-black uppercase tracking-widest ${plan.accentColor} mb-1 block`}>
              Selected Plan
            </span>
            <h3 className="text-2xl font-black text-white">{plan.name}</h3>
            <p className="text-text-dimmed text-sm mt-1">{plan.tagline}</p>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-black ${plan.accentColor}`}>
              {plan.price} <span className="opacity-50 font-medium text-2xl">/ {plan.dollarPrice}</span>
            </div>
            <div className="text-[10px] text-text-dimmed uppercase tracking-widest">{plan.priceNote}</div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-5 text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle size={32} className="text-emerald-500" />
              </div>
              <h4 className="text-xl font-black">Enquiry Received!</h4>
              <p className="text-text-dimmed text-sm max-w-xs">
                Our team will contact you within 24 hours regarding your{' '}
                <span className={`font-bold ${plan.accentColor}`}>{plan.name}</span> enquiry.
              </p>
              <button
                onClick={onClose}
                className="text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full border border-white/10 hover:border-white/30 transition-all mt-2"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all text-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all text-sm"
                />
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all text-sm"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                placeholder="Tell us about your project (optional)"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all resize-none text-sm"
              />

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={14} />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-4 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60 ${plan.btnBg}`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Submit Enquiry
                  </>
                )}
              </button>
              <p className="text-center text-[10px] text-text-dimmed">
                We'll reply within 24 hours · No commitment required
              </p>
            </form>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all text-white"
        >
          <X size={14} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function WebPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const carouselRef = useRef(null);

  // Auto-rotating mobile carousel
  useEffect(() => {
    // Only engage on mobile (<640px)
    const handleAutoScroll = () => {
      if (window.innerWidth >= 640 || !carouselRef.current) return;
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (!carouselRef.current) return;
        currentIndex = (currentIndex + 1) % plans.length;
        const cardWidth = carouselRef.current.children[0].offsetWidth + 24; // Card width + gap-6(24px)
        carouselRef.current.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth',
        });
      }, 3000); // Swipe every 3 seconds

      return () => clearInterval(interval);
    };

    const cleanup = handleAutoScroll();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      <section id="pricing" className="py-32 px-6 bg-deep-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary-blue/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-primary-blue font-black tracking-[0.4em] uppercase mb-4 block text-xs">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase">
              Simple, <span className="text-primary-blue text-glow">Honest</span> Pricing.
            </h2>
            <p className="text-text-dimmed text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              No hidden fees. No guesswork. Pick a plan that fits your vision and let's build
              something extraordinary.
            </p>
          </motion.div>

          {/* Pricing Cards — Mobile Carousel -> Tablet/Desktop Grid */}
          <div
            ref={carouselRef}
            className="flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:snap-none"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`min-w-[85vw] sm:min-w-0 shrink-0 snap-center relative rounded-3xl border p-6 sm:p-8 flex flex-col transition-all duration-300 ${plan.borderColor} ${plan.hoverBorder} ${plan.bgGlow} ${
                  plan.popular ? 'ring-1 ring-primary-blue/40 shadow-[0_0_40px_rgba(0,123,255,0.08)]' : ''
                }`}
              >
                {/* Badge — entry plan */}
                {plan.badge && !plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-max max-w-[90%]">
                    <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-[#0a0a14] border shadow-lg truncate ${plan.borderColor} ${plan.accentColor}`}>
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Most Popular badge — business plan */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-blue text-white text-[10px] font-black uppercase tracking-widest shadow-[0_4px_20px_rgba(0,123,255,0.4)]">
                      <Sparkles size={10} /> Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-5 sm:mb-8">
                  <h3 className={`text-xl font-black mb-1 ${plan.accentColor}`}>{plan.name}</h3>
                  <p className="text-text-dimmed text-xs sm:text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-sm sm:text-lg text-text-dimmed font-bold">Starting from</span>
                  </div>
                  <div className={`text-3xl sm:text-4xl xl:text-4xl font-black mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0 ${plan.accentColor}`}>
                    <span className="whitespace-nowrap">{plan.price}</span>
                    <span className={`text-xl sm:text-2xl xl:text-2xl opacity-40 font-medium whitespace-nowrap`}>/ {plan.dollarPrice}</span>
                  </div>
                  <div className="text-[10px] text-text-dimmed uppercase tracking-widest mt-1">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-10 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded-full ${plan.bgGlow} flex items-center justify-center shrink-0`}>
                        <Check size={10} className={plan.accentColor} />
                      </div>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 sm:py-4 rounded-xl font-black text-xs sm:text-sm text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${plan.btnBg}`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-text-dimmed text-sm mt-12">
            Need something custom?{' '}
            <a
              href="mailto:service@creptech.online"
              className="text-primary-blue hover:underline font-bold"
            >
              Contact us
            </a>{' '}
            and we'll build a tailored quote for you.
          </p>
        </div>
      </section>

      {/* Plan Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
