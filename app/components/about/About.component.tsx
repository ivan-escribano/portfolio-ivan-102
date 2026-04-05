'use client';

// Actualizado
import useScrollReveal from '@/app/hooks/use-scroll-reveal';

import { ABOUT_COPY } from './about.config';
import styles from './About.module.css';
import Terminal from './sub-components/terminal/Terminal.component';

const About = () => {
  const headerRef = useScrollReveal();
  const introRef = useScrollReveal();
  const terminalRef = useScrollReveal();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div ref={headerRef} className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>{ABOUT_COPY.sectionTitle}</h2>
          </div>
          <div ref={introRef} className="reveal">
            <p className={styles.intro}>{ABOUT_COPY.intro}</p>
            <p className={styles.hint}>{ABOUT_COPY.hint}</p>
          </div>
        </div>

        <div ref={terminalRef} className="reveal">
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default About;
