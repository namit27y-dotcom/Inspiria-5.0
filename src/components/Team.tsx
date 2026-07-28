import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Users, Linkedin, Mail, Shield, Sparkles } from 'lucide-react';

export const Team: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredTeam = TEAM_MEMBERS.filter(
    (member) => activeCategory === 'All' || member.category === activeCategory
  );

  return (
    <section id="team" className="py-24 relative bg-[#050814] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-orbitron font-bold tracking-widest uppercase mb-3">
            <Users className="w-3.5 h-3.5" />
            ORGANIZING COMMITTEE
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet The Team Behind Inspiria
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Dedicated faculty patrons and student coordinators from Pillai College of Engineering (TPC-PCE).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Faculty', 'Core Head', 'Tech Team', 'Management'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-orbitron font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'ALL MEMBERS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => {
            // Get initials
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();

            return (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-[#0a0e1a] border border-slate-800/80 hover:border-emerald-500/50 p-6 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-orbitron font-extrabold text-base shadow-inner group-hover:scale-105 transition-transform">
                    {initials}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-orbitron font-bold text-emerald-400">
                    {member.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400">{member.role}</p>
                  <p className="text-xs text-slate-400 pt-1">{member.department}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">TPC-PCE 2026</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:studenttpc@mes.ac.in"
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
