import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-32 px-6 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="gradient-border p-[1px] rounded-[3rem]">
          <div className="bg-surface-dark rounded-[3rem] p-8 md:p-20 backdrop-blur-3xl">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="text-left">
                <span className="text-primary-blue font-bold tracking-[0.3em] uppercase mb-4 block">Get in Touch</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Let's <span className="text-primary-blue animate-pulse">Connect.</span></h2>
                <p className="text-text-dimmed mb-12 text-xl leading-relaxed">
                  Ready to scale your next project? Drop us a message and our lead architect will get back to you within 24 hours.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Email Us</h4>
                      <p className="text-text-dimmed">hello@creptech.agency</p>
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
              </div>

              <div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all"
                    />
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                      <option className="bg-surface-dark">Project Scale</option>
                      <option className="bg-surface-dark">Small Scale (MVP)</option>
                      <option className="bg-surface-dark">Medium Scale (SaaS)</option>
                      <option className="bg-surface-dark">Large Scale (Enterprise)</option>
                    </select>
                    <textarea 
                      rows="4" 
                      placeholder="Tell us about your project" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-text-dimmed focus:outline-none focus:border-primary-blue focus:bg-white/[0.05] transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-primary-blue text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,123,255,0.3)] hover:shadow-[0_20px_50px_rgba(0,123,255,0.4)] transition-all"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-blue/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default ContactForm;
