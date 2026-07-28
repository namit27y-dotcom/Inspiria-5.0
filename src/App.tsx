import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { SessionDetailModal } from './components/SessionDetailModal';
import { ScheduleEvent } from './types';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'schedule', 'testimonials', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Schedule & Keynotes */}
        <Schedule
          onSelectEvent={(evt) => setSelectedEvent(evt)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* About & TPC-PCE Vision */}
        <About />

        {/* Gallery */}
        <Gallery />

        {/* Organizing Committee & Team */}
        <Team />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer & Contact */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Session Detail Modal */}
      <SessionDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    </div>
  );
}
