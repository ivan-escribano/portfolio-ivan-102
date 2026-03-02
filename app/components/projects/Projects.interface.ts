import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: LucideIcon;
  linkLabel: string;
  linkUrl: string;
  linkType: 'github' | 'substack' | 'website';
}
