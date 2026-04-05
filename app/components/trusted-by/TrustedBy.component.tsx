'use client';

import Image from 'next/image';

import useScrollReveal from '@/app/hooks/use-scroll-reveal';
import cloudinaryLoader from '@/app/lib/cloudinary-loader';

import { TRUSTED_BY_COMPANIES, TRUSTED_BY_COPY } from './trusted-by.config';
import styles from './TrustedBy.module.css';

const CompanyList = () => (
  <>
    {TRUSTED_BY_COMPANIES.map((company) => (
      <span key={company.name} className={styles.item}>
        <Image
          loader={cloudinaryLoader}
          src={company.logo}
          alt={company.name}
          width={200}
          height={100}
          className={styles.logo}
        />
      </span>
    ))}
  </>
);

const TrustedBy = () => {
  const labelRef = useScrollReveal();
  const trackRef = useScrollReveal();

  return (
    <section id="trusted" className={styles.trusted}>
      <p ref={labelRef} className={`${styles.label} reveal`}>
        {TRUSTED_BY_COPY.label}
      </p>
      <div ref={trackRef} className={`${styles.wrapper} reveal`}>
        <div className={styles.track}>
          <CompanyList />
          <CompanyList />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
