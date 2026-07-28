export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  tags: string[];
  bio: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  day: 'Day 1' | 'Day 2';
  time: string;
  venue: string;
  category: 'Keynote' | 'Workshop' | 'Panel' | 'Placement';
  speaker: Speaker;
  description: string;
  queriesContact?: {
    name1: string;
    phone1: string;
    name2: string;
    phone2: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  branch: string;
  quote: string;
  avatar?: string;
  year?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Faculty' | 'Core Head' | 'Tech Team' | 'Management';
  department: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
  prn: string;
  interests: string[];
}
