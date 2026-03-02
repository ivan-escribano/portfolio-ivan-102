import styles from './About.module.css';
import { ABOUT_COPY } from './about.config';
import Terminal from './sub-components/terminal/Terminal.component';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionAccent} />
            <h2 className={styles.sectionTitle}>{ABOUT_COPY.sectionTitle}</h2>
          </div>
          <p className={styles.intro}>{ABOUT_COPY.intro}</p>
          <p className={styles.hint}>{ABOUT_COPY.hint}</p>
        </div>

        <div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default About;
