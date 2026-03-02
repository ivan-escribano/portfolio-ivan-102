import styles from './Testimonials.module.css';
import { TESTIMONIALS_COPY, TESTIMONIALS_DATA } from './testimonials.config';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{TESTIMONIALS_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS_DATA.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <img src={testimonial.avatarUrl} alt={testimonial.name} className={styles.avatarImg} />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.role}>{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <a href={TESTIMONIALS_COPY.viewAllHref} className={styles.viewAllBtn} target="_blank" rel="noopener noreferrer">
          {TESTIMONIALS_COPY.viewAllLabel} →
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
