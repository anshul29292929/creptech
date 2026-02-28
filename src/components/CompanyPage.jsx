import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Zap,
  Shield,
  Heart,
  Code2,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageSquare,
  RefreshCw,
  Layers,
  Users,
  Target,
  Star,
  Lock,
  Handshake,
} from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const values = [
  {
    icon: <Shield size={26} />,
    title: 'Radical Transparency',
    desc: 'Fixed-price quotes before any work starts. No scope creep surprises. You always know exactly what you are paying for and why.',
    accent: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
    border: 'border-primary-blue/20',
  },
  {
    icon: <Zap size={26} />,
    title: 'Speed Without Shortcuts',
    desc: 'We move fast using battle-tested systems and component libraries — but never at the cost of code quality, security, or scalability.',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: <Heart size={26} />,
    title: 'Client-First Always',
    desc: 'We respond within 4 business hours. Every client, regardless of budget, gets dedicated attention and direct access to the team.',
    accent: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/20',
  },
  {
    icon: <Code2 size={26} />,
    title: 'Engineering Excellence',
    desc: 'Every line of code is reviewed, tested, and optimised. We follow SOLID principles, semantic HTML, and modern accessibility standards.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: <Lock size={26} />,
    title: 'Zero Lock-In',
    desc: 'You own 100% of your code, assets, and data from day one. No proprietary platforms. No monthly fees to keep your own site alive.',
    accent: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: <Globe size={26} />,
    title: 'Remote-First Operations',
    desc: 'Our distributed team operates across time zones — giving you near-round-the-clock coverage without the overhead of a traditional agency.',
    accent: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We start with a free 30-minute call to understand your goals, audience, and constraints. No pitch — just listening.',
    duration: '30 min',
  },
  {
    step: '02',
    title: 'Proposal & Fixed Quote',
    desc: 'Within 24 hours you receive a detailed project scope, timeline, and fixed price. No hourly billing. Ever.',
    duration: '24 hrs',
  },
  {
    step: '03',
    title: 'Design Sprint',
    desc: 'We deliver high-fidelity mockups for your review. You give feedback. We iterate until every pixel is right.',
    duration: '3-5 days',
  },
  {
    step: '04',
    title: 'Development',
    desc: 'Clean, performant code with weekly progress check-ins. You have access to a staging URL from day one.',
    duration: '1-4 weeks',
  },
  {
    step: '05',
    title: 'QA & Launch',
    desc: 'Thorough cross-browser and mobile testing. SEO audit. Performance check. Then we hit launch together.',
    duration: '2-3 days',
  },
  {
    step: '06',
    title: 'Post-Launch Support',
    desc: 'Every project includes dedicated post-launch support. We are available for bugs, updates, and questions.',
    duration: 'Ongoing',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24 hrs', label: 'Max Response Time' },
  { value: '100%', label: 'Code Ownership Yours' },
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python / FastAPI', 'Go', 'PostgreSQL', 'Redis'] },
  { category: 'Infrastructure', items: ['Vercel', 'AWS', 'Hostinger', 'Cloudflare', 'Docker'] },
  { category: 'Tools & QA', items: ['Git / GitHub', 'Figma', 'Lighthouse', 'Playwright', 'Sentry'] },
];

const guarantees = [
  { icon: <Clock size={20} />, text: 'On-time delivery or we work for free until it is done' },
  { icon: <RefreshCw size={20} />, text: 'Unlimited design revisions before development lock-in' },
  { icon: <Handshake size={20} />, text: 'Fixed price — we absorb over-runs, not you' },
  { icon: <Star size={20} />, text: '30-day post-launch bug-fix warranty on every project' },
  { icon: <Lock size={20} />, text: 'Full code and asset ownership transfer on completion' },
  { icon: <MessageSquare size={20} />, text: 'Direct Slack / WhatsApp channel with your developer' },
];

/* ─── Fade-in wrapper ────────────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-deep-black text-white pt-16 overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary-blue/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-6 block">
              Who We Are
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">
              Built on{' '}
              <span className="text-primary-blue text-glow">Trust.</span>
              <br />
              Driven by{' '}
              <span className="text-primary-blue text-glow">Craft.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-text-dimmed leading-relaxed max-w-2xl mx-auto mb-12">
              CrepTech is a remote-first software agency delivering enterprise-grade digital
              products at prices that make sense for small and growing businesses.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary-blue text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(0,123,255,0.4)] hover:scale-105 transition-all flex items-center gap-2"
              >
                Start a Project <ArrowRight size={14} />
              </Link>
              <a
                href="mailto:service@creptech.online"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Mail size={14} /> service@creptech.online
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <div className="text-4xl font-black text-primary-blue mb-1">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-text-dimmed font-bold">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & MODE OF OPERATIONS ─────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6 uppercase">
                Nominal Pricing.{' '}
                <span className="text-primary-blue text-glow">Elite Quality.</span>
              </h2>
              <p className="text-text-dimmed text-lg leading-relaxed mb-6">
                We founded CrepTech with a simple conviction: the cost of a great website should
                not be a barrier for serious businesses. Too many talented founders and
                entrepreneurs were being priced out of quality engineering by bloated agencies
                charging ten times what the work is worth.
              </p>
              <p className="text-text-dimmed text-lg leading-relaxed">
                Our model is lean by design. No expensive offices, no account managers, no
                middlemen. Just senior engineers and designers working directly with you — and
                charging only for the work that creates value.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-4">
                {[
                  { icon: <Users size={18} />, title: 'Direct Team Access', desc: 'You work directly with the engineer or designer building your product. No account managers in the way.' },
                  { icon: <Globe size={18} />, title: 'Remote-First, Async-Friendly', desc: 'Our team operates across time zones. We use structured async communication so no timezone is left behind.' },
                  { icon: <Target size={18} />, title: 'Scope Before Code', desc: 'We spend significant time upfront clarifying requirements. Ambiguity is the enemy of great software.' },
                  { icon: <Layers size={18} />, title: 'Modular Delivery', desc: 'Work is delivered in reviewable milestones. You see progress weekly — not just at the end.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="text-primary-blue mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-text-dimmed leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                What We Stand For
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase">
                Our Core <span className="text-primary-blue text-glow">Principles.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className={`group rounded-3xl border p-8 transition-all duration-300 ${v.border} hover:bg-white/[0.03] bg-white/[0.01]`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mb-6 ${v.accent} group-hover:scale-110 transition-transform`}>
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-black mb-3">{v.title}</h3>
                  <p className="text-sm text-text-dimmed leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                How We <span className="text-primary-blue text-glow">Work.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 hidden sm:block" />

            <div className="space-y-8">
              {process.map((step, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}>
                    {/* Step bubble */}
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary-blue/10 border border-primary-blue/30 flex items-center justify-center md:mx-auto">
                      <span className="text-xs font-black text-primary-blue">{step.step}</span>
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors ${i % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'}`}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-black text-white text-lg">{step.title}</h3>
                        <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-text-dimmed leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Technology
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                Our <span className="text-primary-blue text-glow">Tech Stack.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-white/10 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary-blue mb-4">
                    {cat.category}
                  </h4>
                  <ul className="space-y-2">
                    {cat.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-sm text-text-dimmed">
                        <div className="w-1 h-1 rounded-full bg-primary-blue/60" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-primary-blue font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Our Promise
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                The CrepTech <span className="text-primary-blue text-glow">Guarantee.</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden divide-y divide-white/[0.04]">
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-5 px-8 py-6 hover:bg-white/[0.02] transition-colors">
                  <div className="text-emerald-400 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FOOTER ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-blue/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase">
              Ready to <span className="text-primary-blue text-glow">Build?</span>
            </h2>
            <p className="text-text-dimmed text-xl leading-relaxed mb-10 max-w-xl mx-auto">
              Let's have a zero-pressure conversation about your project. A fixed quote lands in
              your inbox within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-primary-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_0_50px_rgba(0,123,255,0.4)] hover:scale-105 transition-all flex items-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:service@creptech.online"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Mail size={16} /> Email Us Directly
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
