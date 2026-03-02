import styles from './Hero.module.css';
import { HERO_COPY } from './hero.config';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.background} />

      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <span className={styles.line}>{HERO_COPY.headlineLine1}</span>
          <span className={`${styles.line} ${styles.accent}`}>{HERO_COPY.headlineLine2}</span>
        </h1>

        <p className={styles.subtitle}>
          <strong>{HERO_COPY.subtitleStrong}</strong> {HERO_COPY.subtitleLine1}
          <br />
          {HERO_COPY.subtitleLine2}
        </p>
      </div>
    </section>
  );
};

export default Hero;
