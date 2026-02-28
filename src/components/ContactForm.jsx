import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORM_ENDPOINT = '/api/contact.php';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', scale: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate successful form submission on local development server
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', scale: '', message: '' });
        console.log('Local dev environment detected: Form submission mocked successfully.');
      }, 1500);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          'Project Scale': form.scale || 'Not specified',
          Message: form.message,
          _subject: `New Project Inquiry from ${form.name} — CrepTech`,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', scale: '', message: '' });
      } else {
        console.error('Form submission failed with response:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 px-6 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="gradient-border p-[1px] rounded-[3rem]">
          <div className="bg-surface-dark rounded-[3rem] p-8 md:p-20 backdrop-blur-3xl">
            <div className="grid md:grid-cols-2 gap-20">

              {/* Left — Info */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-left"
              >
                <span className="text-primary-blue font-bold tracking-[0.3em] uppercase mb-4 block">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                  Let's <span className="text-primary-blue animate-pulse">Connect.</span>
                </h2>
                <p className="text-text-dimmed mb-12 text-xl leading-relaxed">
                  Ready to scale your next project? Drop us a message and our lead architect will get
                  back to you within 24 hours.
                </p>

                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Email Us</h4>
                      <a
                        href="mailto:service@creptech.online"
                        className="text-text-dimmed hover:text-primary-blue transition-colors"
                      >
                        service@creptech.online
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Location</h4>
                      <p className="text-text-dimmed">Remote / Global Tech Hub</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — Form */}
              <div>
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center gap-6 text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle size={40} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black">Message Received!</h3>
                    <p className="text-text-dimmed max-w-xs">
                      Our team will reach out within 24 hours. We're excited to hear about your project.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full border border-white/10 hover:border-primary-blue/50 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all"
                      />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all"
                      />
                      <select
                        name="scale"
                        value={form.scale}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-surface-dark text-text-dimmed">Reason for Contact</option>
                        <option value="General Enquiry" className="bg-surface-dark">General Enquiry</option>
                        <option value="Call Back Request" className="bg-surface-dark">Call Back Request</option>
                        <option value="Business Website Development" className="bg-surface-dark">Business Website Development</option>
                        <option value="E-commerce Website" className="bg-surface-dark">E-commerce Website</option>
                        <option value="Portfolio Website" className="bg-surface-dark">Portfolio Website</option>
                        <option value="Website Redesign" className="bg-surface-dark">Website Redesign</option>
                        <option value="SEO Optimization" className="bg-surface-dark">SEO Optimization</option>
                        <option value="Website Maintenance" className="bg-surface-dark">Website Maintenance</option>
                      </select>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Tell us about your project"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                      className="w-full py-5 bg-primary-blue text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,123,255,0.3)] hover:shadow-[0_20px_50px_rgba(0,123,255,0.4)] transition-all disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-blue/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default ContactForm;
