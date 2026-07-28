import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    url: 'https://inspiria-5-0.vercel.app/images/gallery-6.jpg',
    title: 'Auditorium Keynote Session',
    tag: 'Inspiria Highlights'
  },
  {
    url: 'https://inspiria-5-0.vercel.app/images/about-tpc-group.jpg',
    title: 'TPC-PCE Organizing Team',
    tag: 'Leadership & Vision'
  },
  {
    url: 'https://inspiria-5-0.vercel.app/images/gallery-1.jpg',
    title: 'Student Interactive Workshops',
    tag: 'Hands-on Learning'
  },
  {
    url: 'https://inspiria-5-0.vercel.app/images/gallery-2.jpg',
    title: 'Panel Discussions & Q&A',
    tag: 'Corporate Insights'
  },
  {
    url: 'https://inspiria-5-0.vercel.app/images/gallery-3.jpg',
    title: 'Networking & Mentorship',
    tag: 'Alumni Ecosystem'
  },
  {
    url: 'https://inspiria-5-0.vercel.app/images/gallery-4.jpg',
    title: 'Placement Strategy Talks',
    tag: 'Career Growth'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 relative bg-[#070b1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-orbitron font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            EVENT GALLERY
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Moments From <span className="text-[#86efac]">Inspiria</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Capturing the energy, innovation, and learning from Pillai College of Engineering’s flagship symposium.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-emerald-400/60 shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-[#070b1a]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                <span className="text-[10px] font-orbitron font-bold tracking-widest text-[#86efac] uppercase mb-1">
                  {img.tag}
                </span>
                <h3 className="font-orbitron text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
