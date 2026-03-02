import { Linkedin, Mail, Github } from 'lucide-react';
import styles from './Contact.module.css';
import { CONTACT_COPY, CONTACT_BUTTONS, SOCIAL_LINKS } from './contact.config';

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MediumIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const BUTTON_ICONS = {
  linkedin: <Linkedin size={18} />,
  mail: <Mail size={18} />,
};

const SOCIAL_ICONS = {
  twitter: <TwitterIcon />,
  github: <Github size={16} />,
  medium: <MediumIcon />,
  linkedin: <Linkedin size={16} />,
};

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.label}>{CONTACT_COPY.label}</div>

        <h2 className={styles.title}>
          {CONTACT_COPY.titleLine1}
          <br />
          {CONTACT_COPY.titleLine2}
        </h2>

        <p className={styles.subtitle}>{CONTACT_COPY.subtitle}</p>

        <div className={styles.buttons}>
          {CONTACT_BUTTONS.map((btn) => (
            <a key={btn.label} href={btn.href} className={styles.btn} target="_blank" rel="noopener noreferrer">
              {BUTTON_ICONS[btn.icon]}
              {btn.label}
            </a>
          ))}
        </div>

        <div className={styles.divider}>
          <span>{CONTACT_COPY.divider}</span>
        </div>

        <div className={styles.social}>
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.socialIcon} title={link.label} target="_blank" rel="noopener noreferrer">
              {SOCIAL_ICONS[link.icon]}
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <span>{CONTACT_COPY.copyright}</span>
          <span className={styles.footerSep}>&middot;</span>
          <span>{CONTACT_COPY.builtWith}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
