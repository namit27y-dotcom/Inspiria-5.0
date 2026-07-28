import { ScheduleEvent, Testimonial, TeamMember, FAQItem } from '../types';

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 'evt-1',
    title: 'Keynote & Career Roadmap: Navigating AI, GenAI & Industry 5.0',
    day: 'Day 1',
    time: '2:00 PM – 4:00 PM',
    venue: 'Auditorium, Pillai College of Engineering, New Panvel',
    category: 'Keynote',
    speaker: {
      id: 'spk-1',
      name: 'Mr. Pramod Baviskar',
      role: 'AI Data Science Analyst',
      company: 'Accenture Strategy & Consulting',
      avatar: 'https://inspiria-5-0.vercel.app/images/speakers/Pramod%20Baviskar.jpg',
      tags: ['KEYNOTE SPEAKER', 'INDUSTRY EXPERT'],
      bio: 'Specializing in AI, GenAI and data-driven systems, his professional journey reflects the evolving demands of today\'s tech industry.'
    },
    description: 'Specializing in AI, GenAI and data-driven systems, his professional journey reflects the evolving demands of today\'s tech industry. An AI Data Science Analyst at Accenture Strategy & Consulting, Mr. Pramod Baviskar specializes in AI, GenAI and data-driven systems. His professional journey reflects the evolving demands of today\'s tech industry.',
    queriesContact: {
      name1: 'Atharv Gunjal',
      phone1: '8779261491',
      name2: 'Jidnyasa Chimane',
      phone2: '9769498575'
    }
  },
  {
    id: 'evt-2',
    title: 'Cracking Off-Campus High-Package Engineering Placements',
    day: 'Day 1',
    time: '10:30 AM - 12:30 PM',
    venue: 'Auditorium, Pillai College of Engineering, New Panvel',
    category: 'Placement',
    speaker: {
      id: 'spk-2',
      name: 'Rohan Kulkarni',
      role: 'Staff Software Engineer',
      company: 'Ex-Google / Uber',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      tags: ['ALUMNI STAR', 'PLACEMENT MENTOR'],
      bio: 'PCE Alumni who successfully cleared 7 Tier-1 technical offers off-campus. Specialist in System Design & Data Structures.'
    },
    description: 'In-depth breakdown of DSA preparation, resume ATS optimization, mock interview frameworks, and referral strategies for Tier-1 technology companies.',
    queriesContact: {
      name1: 'Atharv Gurav',
      phone1: '8779261498',
      name2: 'Jidnyasa Chitne',
      phone2: '9769495575'
    }
  },
  {
    id: 'evt-3',
    title: 'Hands-on Cloud Infrastructure & DevOps Pipeline Workshop',
    day: 'Day 2',
    time: '11:00 AM - 1:30 PM',
    venue: 'Seminar Hall 3, PCE New Panvel',
    category: 'Workshop',
    speaker: {
      id: 'spk-3',
      name: 'Priya Sharma',
      role: 'Senior Cloud Architect',
      company: 'AWS / Cloud Native India',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      tags: ['WORKSHOP LEAD', 'INDUSTRY EXPERT'],
      bio: 'Certified Kubernetes Administrator with expertise in microservice orchestration and cloud security.'
    },
    description: 'Practical live session covering Docker containers, CI/CD pipelines, Kubernetes deployments, and cloud computing best practices.',
    queriesContact: {
      name1: 'Atharv Gurav',
      phone1: '8779261498',
      name2: 'Jidnyasa Chitne',
      phone2: '9769495575'
    }
  },
  {
    id: 'evt-4',
    title: 'Panel Discussion: From Campus Projects to Venture Backed Startups',
    day: 'Day 2',
    time: '2:30 PM - 4:30 PM',
    venue: 'Auditorium, Pillai College of Engineering, New Panvel',
    category: 'Panel',
    speaker: {
      id: 'spk-4',
      name: 'Aditya Mehta & Founders Panel',
      role: 'Founder & Managing Director',
      company: 'InnoLabs Tech Hub',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      tags: ['PANEL LEAD', 'STARTUP FOUNDER'],
      bio: 'Serial entrepreneur and PCE alumni network leader who raised $5M+ in seed capital.'
    },
    description: 'Learn how student projects can evolve into funded tech startups. Discussion on product-market fit, securing grants, and navigating early investor pitches.',
    queriesContact: {
      name1: 'Atharv Gurav',
      phone1: '8779261498',
      name2: 'Jidnyasa Chitne',
      phone2: '9769495575'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'TANISH RAJWAR',
    branch: 'EGIT',
    quote: 'Inspiria 4.0 felt more like a tech conference than a college event. Everything, from speakers to execution, was top class.'
  },
  {
    id: 'test-2',
    name: 'SHRAWANI KUMBHAR',
    branch: 'BE/EXTC',
    quote: 'Inspiria gave me clarity, not just motivation. It showed me exactly how to bridge the gap between academics and the real corporate world.'
  },
  {
    id: 'test-3',
    name: 'YASH RAIKAR',
    branch: 'BSIT',
    quote: 'I came for the certificate, but stayed for the experience. Met real mentors and made connections that actually matter.'
  },
  {
    id: 'test-4',
    name: 'ANANYA DESHMUKH',
    branch: 'COMP',
    quote: 'The placement roadmaps and 1-on-1 alumni interactions during Inspiria directly helped me land my dream internship at a top MNC!'
  },
  {
    id: 'test-5',
    name: 'SAHIL SHINDE',
    branch: 'IT',
    quote: 'The energy at Pillai College of Engineering during Inspiria is unmatched. High-value keynotes, genuine corporate insights, and seamless management.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Sandeep Joshi',
    role: 'Principal & Patron',
    category: 'Faculty',
    department: 'Pillai College of Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'team-2',
    name: 'Prof. Prashant Tripathi',
    role: 'Head of TPC',
    category: 'Faculty',
    department: 'Training & Placement Cell',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'team-3',
    name: 'Atharv Gurav',
    role: 'Student Placement Head',
    category: 'Core Head',
    department: 'BE - IT',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'team-4',
    name: 'Jidnyasa Chitne',
    role: 'Overall Student Coordinator',
    category: 'Core Head',
    department: 'BE - Computer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'team-5',
    name: 'Rohan Pawar',
    role: 'Tech & Web Lead',
    category: 'Tech Team',
    department: 'TE - IT',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'team-6',
    name: 'Siddhi Patil',
    role: 'Corporate Relations Lead',
    category: 'Management',
    department: 'TE - EXTC',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can attend Inspiria 5.0?',
    answer: 'Inspiria 5.0 is open to all engineering, IT, and technical students across FE, SE, TE, and BE, as well as alumni and tech enthusiasts interested in career advancement.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Where is the venue for the summit?',
    answer: 'The event takes place live in the Auditorium and Seminar Halls at Pillai College of Engineering (PCE), Sector 16, New Panvel, Navi Mumbai.',
    category: 'Venue'
  },
  {
    id: 'faq-3',
    question: 'Is there any registration fee for PCE students?',
    answer: 'Inspiria 5.0 is hosted by TPC-PCE for the benefit of students. Registration is free for registered PCE students upon submitting the registration form.',
    category: 'Registration'
  },
  {
    id: 'faq-4',
    question: 'Will certificates be provided to attendees?',
    answer: 'Yes! Official e-certificates of participation will be awarded by the Training & Placement Cell (TPC-PCE) to attendees who check in and attend the keynote sessions.',
    category: 'Certificates'
  },
  {
    id: 'faq-5',
    question: 'Who can I contact for queries regarding schedule or registration?',
    answer: 'You can reach out to student coordinators Atharv Gurav (8779261498) or Jidnyasa Chitne (9769495575), or email studenttpc@mes.ac.in.',
    category: 'Contact'
  }
];
