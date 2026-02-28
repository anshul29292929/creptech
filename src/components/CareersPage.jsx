import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORM_ENDPOINT = '/api/contact.php';

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', portfolio: '', message: '' });
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
        setForm({ name: '', email: '', role: '', portfolio: '', message: '' });
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
          'Project Scale': form.role || 'Career Application',
          Company: form.portfolio,
          Message: form.message,
          _subject: `New Job Application from ${form.name} — CrepTech Careers`,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', role: '', portfolio: '', message: '' });
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
    <div className="pt-24 min-h-screen bg-deep-black pb-32">
      <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          Join <span className="text-primary-blue text-glow">CrepTech.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-dimmed leading-relaxed mb-6"
        >
          We are always looking for elite engineers, designers, and visionaries. Build the future of software with us.
        </motion.p>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 px-6">
        <div className="gradient-border p-[1px] rounded-[3rem]">
          <div className="bg-surface-dark rounded-[3rem] p-8 md:p-16 backdrop-blur-3xl">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-6 text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black">Application Received!</h3>
                <p className="text-text-dimmed max-w-md mx-auto">
                  Thanks for applying. We usually review new applications weekly and will reach out if there's a strong fit.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full border border-white/10 hover:border-primary-blue/50 transition-all"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all"
                  />
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    placeholder="Desired Role (e.g. Frontend Engineer)"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all"
                  />
                  <input
                    type="text"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleChange}
                    placeholder="Portfolio URL / GitHub"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all"
                  />
                  <div className="md:col-span-2">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Why CrepTech? Tell us about your impact."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue transition-all resize-none"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again later.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full py-5 bg-primary-blue text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,123,255,0.3)] hover:shadow-[0_20px_50px_rgba(0,123,255,0.4)] transition-all disabled:opacity-70 mt-4"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
