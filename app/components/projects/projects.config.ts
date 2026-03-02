import { BookOpen, FileSearch, Globe, LayoutDashboard, Newspaper } from 'lucide-react';

import { Project } from './Projects.interface';

export const PROJECTS_COPY = {
  sectionTitle: 'Projects.',
  overlayText: 'View Project →',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'weup',
    number: '01',
    title: 'WeUp',
    description: 'AI-powered SaaS for LinkedIn content management. 500+ companies, 50K+ posts generated across Spain, LATAM and the US.',
    tags: ['React', 'Next.js', 'Python', 'AI', 'Docker', 'Azure'],
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0d1f3c 50%, #0a0a1a 100%)',
    icon: LayoutDashboard,
    linkLabel: 'View Project',
    linkUrl: 'https://weup.ai',
    linkType: 'website',
  },
  {
    id: 'mcp-football',
    number: '02',
    title: 'MCP Football Eleven',
    description: 'Natural language football player search across European leagues. 3,000+ players, real-time stats and scouting analysis.',
    tags: ['Python', 'Azure SQL', 'Docker', 'MCP', 'Pandas'],
    gradient: 'linear-gradient(135deg, #0a0a0f 0%, #0d1a2b 50%, #0a0a0f 100%)',
    icon: Globe,
    linkLabel: 'View on GitHub',
    linkUrl: 'https://github.com/ivan-escribano/mcp-fotball-eleven',
    linkType: 'github',
  },
  {
    id: 'cv-screener',
    number: '03',
    title: 'CV Screener AI',
    description: 'AI tool that screens and ranks CVs automatically. Saving HR teams hours of manual review every week.',
    tags: ['LLMs', 'Python', 'Next.js'],
    gradient: 'linear-gradient(135deg, #0f0a0a 0%, #2b0d0d 50%, #0f0a0a 100%)',
    icon: FileSearch,
    linkLabel: 'View on GitHub',
    linkUrl: 'https://github.com/ivan-escribano/cv-screener-ai',
    linkType: 'github',
  },
  {
    id: 'prompt-engineering',
    number: '04',
    title: 'Prompt Engineering 2026',
    description: 'Complete guide to mastering prompt engineering techniques, patterns and real-world examples for building with LLMs.',
    tags: ['Writing', 'Substack', 'AI'],
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0d1f3c 50%, #0a0a1a 100%)',
    icon: Newspaper,
    linkLabel: 'Read on Substack',
    linkUrl:
      'https://open.substack.com/pub/ivanescribano/p/mastering-prompt-engineering-complete?r=381cbd&utm_campaign=post&utm_medium=web',
    linkType: 'substack',
  },
  {
    id: 'ai-agents-cheatsheet',
    number: '05',
    title: 'Cheat Codes for AI Agents',
    description: 'The cheat codes I use when building with AI agents practical patterns, shortcuts and lessons from production systems.',
    tags: ['Writing', 'Substack', 'AI Agents'],
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d2b1a 50%, #0a0f0a 100%)',
    icon: BookOpen,
    linkLabel: 'Read on Substack',
    linkUrl: 'https://open.substack.com/pub/ivanescribano/p/the-cheat-codes-i-use-when-building?r=381cbd&utm_campaign=post&utm_medium=web',
    linkType: 'substack',
  },
];
