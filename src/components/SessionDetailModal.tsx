import React from 'react';
import { ScheduleEvent } from '../types';
import { X, Clock, MapPin, PhoneCall, Sparkles, User, Calendar, Share2, Bookmark } from 'lucide-react';

interface SessionDetailModalProps {
  event: ScheduleEvent | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const SessionDetailModal: React.FC<SessionDetailModalProps> = ({ event, onClose, onOpenRegister }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#090d1f] border border-slate-700/80 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Image / Gradient */}
        <div className="relative h-48 bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 overflow-hidden p-6 flex items-end">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 relative z-10">
            <img
              src={event.speaker.avatar}
              alt={event.speaker.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.tried) {
                  target.dataset.tried = 'true';
                  target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
                }
              }}
            />
            <div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {event.speaker.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[9px] font-orbitron font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-white">{event.speaker.name}</h3>
              <p className="text-xs text-slate-300">{event.speaker.role} • {event.speaker.company}</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">
          <div>
            <div className="flex items-center gap-3 text-xs text-emerald-400 font-semibold mb-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30">
                {event.day}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {event.time}
              </span>
            </div>

            <h2 className="font-orbitron text-2xl font-bold text-white leading-snug">
              {event.title}
            </h2>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-white">Venue:</span> {event.venue}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Session Overview & Agenda
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">{event.description}</p>
          </div>

          <div>
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Speaker Profile
            </h4>
            <p className="text-sm leading-relaxed text-slate-400 italic">{event.speaker.bio}</p>
          </div>

          {/* FOR QUERIES box */}
          {event.queriesContact && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] font-orbitron font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5 mb-2">
                <PhoneCall className="w-3 h-3" />
                FOR QUERIES REGARDING THIS SESSION
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400">{event.queriesContact.name1}:</span>{' '}
                  <a href={`tel:${event.queriesContact.phone1}`} className="text-emerald-400 font-mono font-bold hover:underline">
                    {event.queriesContact.phone1}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">{event.queriesContact.name2}:</span>{' '}
                  <a href={`tel:${event.queriesContact.phone2}`} className="text-emerald-400 font-mono font-bold hover:underline">
                    {event.queriesContact.phone2}
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="flex-1 py-3 rounded-xl font-orbitron font-bold text-xs tracking-widest uppercase bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all text-center"
            >
              Reserve Seat For This Session
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: event.title,
                    text: `Check out ${event.title} at Inspiria 5.0!`,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Session link copied to clipboard!');
                }
              }}
              className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Share session"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
