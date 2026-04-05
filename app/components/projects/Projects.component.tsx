'use client';

import { ExternalLink, Github } from 'lucide-react';

// Actualizado
import useScrollReveal from '@/app/hooks/use-scroll-reveal';

import { PROJECTS_COPY, PROJECTS_DATA } from './projects.config';
import styles from './Projects.module.css';

import type { Project } from './Projects.interface';

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useScrollReveal();
  const Icon = project.icon;

  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.cardImage}>
        <div className={styles.cardImageBg} style={{ background: project.gradient }}>
          <Icon size={64} strokeWidth={1} className={styles.cardIcon} />
        </div>
        <div className={styles.cardOverlay}>
          <span className={styles.cardOverlayText}>{PROJECTS_COPY.overlayText}</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardNumber}>{project.number}</div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <a href={project.linkUrl} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            {project.linkType === 'github' && <Github size={14} />}
            {project.linkType === 'substack' && <SubstackIcon />}
            {project.linkType === 'website' && <ExternalLink size={14} />}
            {project.linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className={styles.projects}>
      <div ref={headerRef} className={`${styles.sectionHeader} reveal`}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{PROJECTS_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
