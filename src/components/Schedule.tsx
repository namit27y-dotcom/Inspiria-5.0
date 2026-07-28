import React, { useState } from 'react';
import { SCHEDULE_EVENTS } from '../data/mockData';
import { ScheduleEvent } from '../types';
import { Clock, MapPin, PhoneCall, Search, Calendar, User, Sparkles, Share2, Bookmark } from 'lucide-react';
import pramodImg from '../assets/images/pramod_baviskar.jpg';

interface ScheduleProps {
  onSelectEvent: (event: ScheduleEvent) => void;
  onOpenRegister: () => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectEvent, onOpenRegister }) => {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredEvents = SCHEDULE_EVENTS.filter((evt) => {
    const matchesDay = selectedDay === 'All' || evt.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDay && matchesCategory && matchesSearch;
  });

  return (
    <section id="schedule" className="py-20 relative bg-[#070b1a] overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-orbitron font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            SCHEDULE & KEYNOTES
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Summit Schedule & Keynote Sessions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Explore power-packed sessions, expert keynotes, and placement roadmaps curated by Pillai College of Engineering.
          </p>
        </div>

        {/* Featured Keynote Showcase Card matching exact Inspiria design */}
        <div className="mb-14 relative rounded-3xl bg-[#090d1f]/90 border border-slate-700/60 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden backdrop-blur-xl group">
          {/* Futuristic grid overlay background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            {/* Left Column: Speaker Card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="font-orbitron text-2xl sm:text-3xl font-extrabold text-[#86efac] tracking-tight mb-1">
                Mr. Pramod Baviskar
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-300">
                AI Data Science Analyst at
              </p>
              <p className="text-xs sm:text-sm font-bold text-white mb-5">
                Accenture Strategy & Consulting
              </p>

              {/* Speaker Photo */}
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl mb-5 group-hover:border-emerald-400 transition-colors">
                <img
                  src={pramodImg}
                  alt="Mr. Pramod Baviskar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = '/images/speaker.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1f] via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>

              {/* Tags Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-orbitron font-bold tracking-widest text-slate-300 bg-slate-900/90 border border-slate-700 uppercase">
                  KEYNOTE SPEAKER
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-orbitron font-bold tracking-widest text-purple-300 bg-purple-950/60 border border-purple-800/60 uppercase">
                  INDUSTRY EXPERT
                </span>
              </div>
            </div>

            {/* Right Column: Blueprint & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 pt-2">
              <div>
                <h4 className="font-orbitron text-lg sm:text-xl font-extrabold text-[#86efac] tracking-[0.2em] uppercase mb-4">
                  THE BLUEPRINT FOR YOUR FUTURE
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  Specializing in AI, GenAI and data-driven systems, his professional journey reflects the evolving demands of today’s tech industry. An AI Data Science Analyst at Accenture Strategy & Consulting, Mr. Pramod Baviskar specializes in AI, GenAI and data-driven systems. His professional journey reflects the evolving demands of today’s tech industry.
                </p>
              </div>

              {/* Bottom 2 sub-boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Time & Location Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2:00 PM – 4:00 PM</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200 font-semibold">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Auditorium, Pillai College of Engineering, New Panvel</span>
                  </div>
                </div>

                {/* Queries Box */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div className="text-[11px] font-orbitron font-bold tracking-widest text-[#86efac] uppercase flex items-center gap-1.5 mb-2">
                    <PhoneCall className="w-3.5 h-3.5" />
                    FOR QUERIES
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-300">Atharv Gunjal</span>
                      <a href="tel:8779261491" className="font-mono text-emerald-400 font-bold hover:underline">
                        8779261491
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-300">Jidnyasa Chimane</span>
                      <a href="tel:9769498575" className="font-mono text-emerald-400 font-bold hover:underline">
                        9769498575
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {/* Day Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['All', 'Day 1', 'Day 2'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all ${
                  selectedDay === day
                    ? 'bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                {day === 'All' ? 'ALL DAYS' : day}
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['All', 'Keynote', 'Placement', 'Workshop', 'Panel'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800/40 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search speaker or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
            />
          </div>
        </div>

        {/* Schedule Cards List */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <p className="text-base font-semibold">No sessions match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedDay('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 hover:bg-emerald-500/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                onClick={() => onSelectEvent(evt)}
                className="group relative rounded-2xl bg-[#0b1122] border border-slate-800/80 hover:border-emerald-500/50 p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 cursor-pointer overflow-hidden"
              >
                {/* Neon top border line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Speaker Photo & Badges (Cols 1-3) */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative">
                      <img
                        src={evt.speaker.avatar}
                        alt={evt.speaker.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-emerald-400 transition-colors shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 p-1 rounded-lg bg-emerald-500 text-slate-950">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {evt.speaker.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-orbitron font-bold tracking-wider uppercase bg-slate-900 border border-slate-700 text-emerald-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Session Title & Info (Cols 4-8) */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-emerald-400 font-semibold">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30">
                        {evt.day}
                      </span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {evt.time}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {evt.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <User className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">{evt.speaker.name}</span>
                        <span className="text-slate-500">• {evt.speaker.role}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* FOR QUERIES Contact Box (Cols 9-12) - Matching Video */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full bg-slate-900/90 rounded-xl border border-slate-800 p-4 relative">
                    <div className="text-[10px] font-orbitron font-bold tracking-widest text-slate-400 uppercase flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <PhoneCall className="w-3 h-3" />
                        FOR QUERIES
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(e, evt.id)}
                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                        title="Bookmark session"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            bookmarkedIds.includes(evt.id) ? 'fill-emerald-400 text-emerald-400' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      {evt.queriesContact && (
                        <>
                          <div className="flex items-center justify-between text-slate-300">
                            <span className="font-medium text-slate-200">{evt.queriesContact.name1}</span>
                            <a
                              href={`tel:${evt.queriesContact.phone1}`}
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-emerald-400 hover:underline"
                            >
                              {evt.queriesContact.phone1}
                            </a>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span className="font-medium text-slate-200">{evt.queriesContact.name2}</span>
                            <a
                              href={`tel:${evt.queriesContact.phone2}`}
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-emerald-400 hover:underline"
                            >
                              {evt.queriesContact.phone2}
                            </a>
                          </div>
                        </>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenRegister();
                      }}
                      className="mt-4 w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-orbitron font-bold tracking-wider uppercase transition-colors text-center"
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
