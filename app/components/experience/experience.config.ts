import { ExperienceEntry } from './Experience.interface';

export const EXPERIENCE_COPY = {
  sectionTitle: 'Experience.',
};

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: 'weup',
    period: 'Oct 2024 — Present',
    title: 'Software Engineer & AI Engineer',
    company: 'WeUp',
    location: 'Barcelona, Spain',
    bullets: [
      'Co-founded an AI-powered SaaS for marketing agencies to manage LinkedIn content',
      'Scaled to 500+ companies and 50K+ posts generated across Spain, LATAM and the US',
      'Built the entire AI content system — writing assistants, AI agents, multimedia generation — reducing content creation time by 75%',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AI', 'Docker', 'Azure'],
    isActive: true,
  },
  {
    id: 'junoverse',
    period: 'Nov 2022 — Nov 2024',
    title: 'Senior Software Engineer',
    company: 'Junoverse',
    location: 'Remote (Zurich, Switzerland)',
    bullets: [
      'Led full stack development as principal engineer at an AgeTech startup focused on elderly wellbeing',
      'Promoted to Senior within the first year',
      'Built applications that contributed to closing contracts with Malta Government and AXA insurance',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GCP', 'PostgreSQL', 'Jest', 'Cypress'],
    isActive: false,
  },
  {
    id: 'ntt-data',
    period: 'Jun 2019 — Jul 2020',
    title: 'Software Engineer',
    company: 'NTT DATA',
    location: 'Barcelona, Spain',
    bullets: [
      'Developed banking applications for CaixaBank and Banco Sabadell in high-security environments',
      'Core developer in the ImaginBank relaunch — entry point for ~50% of CaixaBank\'s new customers',
      'Scaled to 4M+ users and 6.7M monthly transactions',
    ],
    tags: ['Java', 'React', 'TypeScript', 'SQL', 'REST APIs'],
    isActive: false,
  },
];
