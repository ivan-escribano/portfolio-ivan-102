import styles from './TrustedBy.module.css';
import { TRUSTED_BY_COPY, TRUSTED_BY_COMPANIES } from './trusted-by.config';

const CompanyList = () => (
  <>
    {TRUSTED_BY_COMPANIES.map((company) => (
      <span key={company.name} className={styles.item}>
        <img src={company.logo} alt={company.name} className={styles.logo} />
      </span>
    ))}
  </>
);

const TrustedBy = () => {
  return (
    <section id="trusted" className={styles.trusted}>
      <p className={styles.label}>{TRUSTED_BY_COPY.label}</p>
      <div className={styles.wrapper}>
        <div className={styles.track}>
          <CompanyList />
          <CompanyList />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
