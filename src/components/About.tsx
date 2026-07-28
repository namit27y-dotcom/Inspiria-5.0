import React from 'react';
import { Target, Lightbulb, TrendingUp, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#070b1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-orbitron font-bold tracking-widest uppercase">
              <Target className="w-3.5 h-3.5" />
              ABOUT INSPIRIA 5.0 & TPC-PCE
            </div>

            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bridging Academics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Corporate Excellence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Inspiria 5.0 is the flagship technology and career summit organized by the Training & Placement Cell (TPC) at Pillai College of Engineering, New Panvel.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Designed as a launchpad for future engineers, Inspiria bridges classroom learning with real-world corporate standards. From high-impact keynotes by industry executives to hands-on tech workshops and off-campus offer roadmaps, Inspiria empowers students with clarity, confidence, and connections.
            </p>

            {/* Bullet Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'Direct interaction with VP Engineers & Founders',
                'Tailored resume reviews & placement strategy',
                'Hands-on AI, Cloud & System Design workshops',
                'Strong network of 500+ PCE Alumni mentors',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column with TPC Group Image & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-900 shadow-2xl group">
              <img
                src="/images/about-tpc-group.jpg"
                alt="Training & Placement Cell Group"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-orbitron font-bold text-emerald-400 uppercase tracking-widest block">
                    TPC-PCE Team
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Pillai College of Engineering
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold backdrop-blur-md">
                  Inspiria 5.0
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-orbitron text-sm font-bold text-white mb-1">Keynote Talks</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Insights from tech leaders & founders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-orbitron text-sm font-bold text-white mb-1">Career Growth</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Off-campus strategies & interview prep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
