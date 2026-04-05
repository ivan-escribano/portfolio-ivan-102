'use client';

// Actualizado
import useScrollReveal from '@/app/hooks/use-scroll-reveal';

import { EXPERIENCE_COPY, EXPERIENCE_DATA } from './experience.config';
import styles from './Experience.module.css';

const ExperienceItem = ({ entry }: { entry: (typeof EXPERIENCE_DATA)[number] }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.item} reveal`}>
      <div className={styles.left}>
        <span className={styles.year}>{entry.period}</span>
      </div>
      <div className={`${styles.dot} ${entry.isActive ? styles.dotActive : ''}`} />
      <div className={styles.right}>
        <span className={styles.yearMobile}>{entry.period}</span>
        <div className={styles.header}>
          <h3 className={styles.title}>{entry.title}</h3>
          <div className={styles.meta}>
            <span className={styles.company}>{entry.company}</span>
            <span className={styles.sep}>&middot;</span>
            <span className={styles.location}>{entry.location}</span>
          </div>
        </div>
        <ul className={styles.bullets}>
          {entry.bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
        <div className={styles.tags}>
          {entry.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className={styles.experience}>
      <div ref={headerRef} className={`${styles.sectionHeader} reveal`}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{EXPERIENCE_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine}>
          <div className={styles.timelineLineFill} />
        </div>

        {EXPERIENCE_DATA.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
