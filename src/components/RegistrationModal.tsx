import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Ticket, User, Mail, Phone, School, BookOpen, Download, QrCode } from 'lucide-react';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    college: 'Pillai College of Engineering (PCE), New Panvel',
    department: 'Computer Engineering',
    year: 'TE',
    prn: '',
    interests: ['Keynotes', 'Placements'],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passTicketId, setPassTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `INSP5-PCE-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#090d1f] border border-slate-700/80 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 bg-slate-900/80 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white">
                Register for Inspiria 5.0
              </h3>
              <p className="text-xs text-slate-400">TPC Pillai College of Engineering</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isSubmitted ? (
            /* Ticket Confirmation View */
            <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-orbitron text-2xl font-bold text-white">Registration Confirmed!</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  You are registered for <span className="text-emerald-400 font-bold">INSPIRIA 5.0</span>. Present your E-Pass at the PCE Auditorium entry.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1224] to-[#121c38] border border-emerald-500/40 shadow-2xl relative text-left overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                  <div>
                    <div className="font-orbitron text-xl font-extrabold text-emerald-400">INSPIRIA 5.0</div>
                    <div className="text-[10px] font-semibold text-slate-400">SUMMIT PASS • PCE NEW PANVEL</div>
                  </div>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-slate-900 text-cyan-300 border border-cyan-500/40">
                    {passTicketId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">ATTENDEE</span>
                    <span className="font-bold text-white text-sm">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">DEPARTMENT & YEAR</span>
                    <span className="font-semibold text-slate-200">{formData.department} ({formData.year})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">COLLEGE</span>
                    <span className="font-medium text-slate-300 truncate block">{formData.college}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">DATES</span>
                    <span className="font-medium text-emerald-300">FEB 28 & MAR 01, 2026</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-12 h-12 text-slate-200" />
                    <span className="text-[10px] text-slate-400">Scan at Auditorium Gate 1</span>
                  </div>
                  <button
                    onClick={() => alert(`Pass ${passTicketId} saved to downloads!`)}
                    className="px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-orbitron font-bold flex items-center gap-1.5 hover:bg-emerald-300"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Pass
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 text-xs font-orbitron font-bold hover:bg-slate-700"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Atharva Gurav"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. student@mes.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    PRN / Roll Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2023016400..."
                    value={formData.prn}
                    onChange={(e) => setFormData({ ...formData, prn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Department / Branch
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="EXTC Engineering">EXTC Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electronics & Computer">Electronics & Computer Science</option>
                    <option value="AI & Data Science">AI & Data Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Year of Study
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
                  >
                    <option value="FE">First Year (FE)</option>
                    <option value="SE">Second Year (SE)</option>
                    <option value="TE">Third Year (TE)</option>
                    <option value="BE">Final Year (BE)</option>
                    <option value="PG">Postgraduate (ME/MTech)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Interested Domains
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Keynote Sessions', 'Off-Campus Placements', 'AI & Data Science', 'Cloud & DevOps', 'Startup Pitching'].map(
                    (tag) => {
                      const isSelected = formData.interests.includes(tag);
                      return (
                        <button
                          type="button"
                          key={tag}
                          onClick={() => handleInterestToggle(tag)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                              : 'bg-slate-950 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-orbitron font-bold text-xs tracking-widest text-slate-950 uppercase bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all"
                >
                  Confirm & Generate Summit Pass
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
