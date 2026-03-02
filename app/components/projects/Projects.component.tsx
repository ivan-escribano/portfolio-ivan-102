import { Github, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';
import { PROJECTS_COPY, PROJECTS_DATA } from './projects.config';

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{PROJECTS_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS_DATA.map((project) => {
          const Icon = project.icon;

          return (
            <div key={project.id} className={styles.card}>
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
        })}
      </div>
    </section>
  );
};

export default Projects;
