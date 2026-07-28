import React from 'react';
import { ArrowUp, Phone, Mail, Instagram, Facebook, Linkedin, Youtube, ExternalLink, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#040610] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* TPC-PCE Branding Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="inline-block p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-xl">
              <div className="font-orbitron text-2xl font-black text-emerald-400 tracking-wider flex items-center gap-1">
                <span className="text-white">TPC</span>
                <span className="text-emerald-400">-</span>
                <span className="text-emerald-400">PCE</span>
              </div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Pillai College of Engineering
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Training & Placement Cell, PCE New Panvel. Empowering future engineers through corporate connectivity and technical summits.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/40 pb-1 inline-block">
              Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-emerald-400 transition-colors">
                  Events & Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Team Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/40 pb-1 inline-block">
              Team
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#team" className="hover:text-emerald-400 transition-colors">
                  Organizing Committee
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-emerald-400 transition-colors">
                  Faculty Coordinators
                </a>
              </li>
              <li>
                <button onClick={onOpenRegister} className="text-emerald-400 hover:underline">
                  Student Volunteer Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Other Services Column */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/40 pb-1 inline-block">
              Other services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://linktr.ee"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  LinkTree <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pce.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  PCE Official <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Social-Media
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column - Exact details from video */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-500/40 pb-1 inline-block">
              Contact
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:02227456100" className="hover:text-emerald-400 font-mono">
                  022-27456100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:02227482400" className="hover:text-emerald-400 font-mono">
                  022-27482400
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:studenttpc@mes.ac.in" className="hover:text-cyan-400 font-mono break-all">
                  studenttpc@mes.ac.in
                </a>
              </li>
            </ul>

            {/* Social Media Icons matching video */}
            <div className="flex items-center gap-3 mt-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Inspiria 5.0 - Training & Placement Cell, Pillai College of Engineering (PCE). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-300">Terms of Event</a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button matching video bottom-right green circle */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};
