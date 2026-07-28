import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background light trails canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Curved Highway Light Trails animation matching reference design
    const trailCount = 65;
    const trails: Array<{
      progress: number;
      speed: number;
      laneOffset: number; // -1 to 1 across road width
      curveType: 'left' | 'center' | 'right';
      color: string;
      width: number;
      length: number;
    }> = [];

    const magentaPurple = ['#d946ef', '#ec4899', '#c084fc', '#e879f9', '#f43f5e'];
    const cyanBlue = ['#06b6d4', '#22d3ee', '#38bdf8', '#0284c7', '#3b82f6'];

    for (let i = 0; i < trailCount; i++) {
      const isLeftLane = Math.random() < 0.45;
      trails.push({
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.006,
        laneOffset: (Math.random() - 0.5) * 1.8,
        curveType: isLeftLane ? 'left' : Math.random() < 0.5 ? 'center' : 'right',
        color: isLeftLane
          ? magentaPurple[Math.floor(Math.random() * magentaPurple.length)]
          : cyanBlue[Math.floor(Math.random() * cyanBlue.length)],
        width: 1.5 + Math.random() * 3.5,
        length: 0.15 + Math.random() * 0.25,
      });
    }

    // Background twinkling stars
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.55,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      sparkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.fillStyle = 'rgba(5, 8, 20, 0.35)';
      ctx.fillRect(0, 0, width, height);

      // Draw background twinkling stars
      stars.forEach((s) => {
        s.alpha += Math.sin(Date.now() * s.sparkleSpeed) * 0.01;
        const currentAlpha = Math.max(0.1, Math.min(1, s.alpha));
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const vanishingX = width * 0.5;
      const vanishingY = height * 0.52;
      const bottomY = height;

      // Draw horizon & highway floor perspective guides
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.06)';
      ctx.lineWidth = 1;

      for (let x = -width; x <= width * 2; x += width / 12) {
        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(x, bottomY);
        ctx.stroke();
      }

      // Draw curved light trails streaming towards viewer
      trails.forEach((trail) => {
        ctx.save();
        ctx.lineWidth = trail.width;
        ctx.shadowBlur = 18;
        ctx.shadowColor = trail.color;

        // Calculate start and end points along quadratic Bezier curve
        const drawTrail = (p: number) => {
          // p from 0 (vanishing point) to 1 (screen bottom/side)
          const startP = Math.max(0, p - trail.length);
          const endP = Math.min(1, p);

          // Control points setup for dramatic outward curvature
          const getPos = (t: number) => {
            // scale depth non-linearly for 3D perspective acceleration
            const depth = Math.pow(t, 2.2);
            let startX = vanishingX;
            let endX = vanishingX + trail.laneOffset * width * 1.2;
            let ctrlX = vanishingX + trail.laneOffset * width * 0.6;

            if (trail.curveType === 'left') {
              endX = vanishingX - width * (0.3 + Math.abs(trail.laneOffset) * 0.8);
              ctrlX = vanishingX - width * 0.2;
            } else if (trail.curveType === 'right') {
              endX = vanishingX + width * (0.3 + Math.abs(trail.laneOffset) * 0.8);
              ctrlX = vanishingX + width * 0.2;
            }

            const currentY = vanishingY + depth * (bottomY - vanishingY);

            // Interpolate Bezier point
            const oneMinusT = 1 - t;
            const x =
              oneMinusT * oneMinusT * startX +
              2 * oneMinusT * t * ctrlX +
              t * t * endX;

            return { x, y: currentY };
          };

          const p1 = getPos(startP);
          const p2 = getPos(endP);

          const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          grad.addColorStop(0.5, trail.color);
          grad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = grad;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);

          // Render sample segments along curve
          const steps = 12;
          for (let step = 1; step <= steps; step++) {
            const stepT = startP + (step / steps) * (endP - startP);
            const pt = getPos(stepT);
            ctx.lineTo(pt.x, pt.y);
          }
          ctx.stroke();
        };

        drawTrail(trail.progress);
        ctx.restore();

        // Advance progress
        trail.progress += trail.speed;
        if (trail.progress > 1 + trail.length) {
          trail.progress = 0;
          trail.laneOffset = (Math.random() - 0.5) * 1.8;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050814]">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />

      {/* Radial Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center">
        {/* College & TPC Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300">
            Pillai College of Engineering <span className="text-emerald-400 mx-1">•</span> Training & Placement Cell
          </span>
        </div>

        {/* Subtitle Tagline */}
        <p className="font-orbitron text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase text-emerald-400 mb-4 glow-text-cyan">
          THE BLUEPRINT FOR YOUR FUTURE
        </p>

        {/* Giant Main Title "INSPIRIA 5.0" */}
        <div className="relative my-2 sm:my-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] select-none uppercase">
            INSPIRIA
          </h1>
          <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#a3e635] drop-shadow-[0_0_35px_rgba(163,230,53,0.7)] select-none">
            5.0
          </h1>
        </div>

        {/* Short Description */}
        <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
          The flagship technology summit and corporate career conference designed to inspire, equip, and empower the next generation of industry leaders.
        </p>

        {/* Event Quick Details Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-lg">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">Feb 28 & Mar 01, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-lg">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="font-medium">Auditorium, PCE New Panvel</span>
          </div>
        </div>

        {/* CTA Register Button */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="group relative px-12 py-4 rounded-full font-orbitron font-bold text-sm tracking-widest uppercase text-slate-950 bg-[#a3e635] hover:bg-[#86efac] transition-all duration-300 shadow-[0_0_30px_rgba(163,230,53,0.6)] hover:shadow-[0_0_45px_rgba(163,230,53,0.9)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              REGISTER
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <a
            href="#schedule"
            className="px-8 py-4 rounded-full font-orbitron font-bold text-xs tracking-widest uppercase text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all shadow-md"
          >
            Explore Schedule
          </a>
        </div>
      </div>

      {/* Stats Banner Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
          <div className="text-center p-3 border-r border-slate-800/60 last:border-0">
            <div className="font-orbitron text-2xl sm:text-3xl font-extrabold text-emerald-400">5000+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Students & Attendees</div>
          </div>
          <div className="text-center p-3 md:border-r border-slate-800/60 last:border-0">
            <div className="font-orbitron text-2xl sm:text-3xl font-extrabold text-cyan-400">25+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Keynote Speakers</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800/60 last:border-0">
            <div className="font-orbitron text-2xl sm:text-3xl font-extrabold text-emerald-400">15+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Interactive Sessions</div>
          </div>
          <div className="text-center p-3">
            <div className="font-orbitron text-2xl sm:text-3xl font-extrabold text-purple-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Career Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};
