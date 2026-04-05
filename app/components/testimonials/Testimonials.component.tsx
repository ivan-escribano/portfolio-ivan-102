'use client';

import Image from 'next/image';

import useScrollReveal from '@/app/hooks/use-scroll-reveal';
import cloudinaryLoader from '@/app/lib/cloudinary-loader';

import { TESTIMONIALS_COPY, TESTIMONIALS_DATA } from './testimonials.config';
import styles from './Testimonials.module.css';

const TestimonialCard = ({ testimonial }: { testimonial: (typeof TESTIMONIALS_DATA)[number] }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.quote}>&ldquo;</div>
      <p className={styles.text}>{testimonial.text}</p>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Image
            loader={cloudinaryLoader}
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={44}
            height={44}
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div ref={headerRef} className={`${styles.sectionHeader} reveal`}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{TESTIMONIALS_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className={styles.viewAll}>
        <a href={TESTIMONIALS_COPY.viewAllHref} className={styles.viewAllBtn} target="_blank" rel="noopener noreferrer">
          {TESTIMONIALS_COPY.viewAllLabel} &rarr;
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
