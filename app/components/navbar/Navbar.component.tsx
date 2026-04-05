'use client';

import { useState } from 'react';
import Image from 'next/image';

import cloudinaryLoader from '@/app/lib/cloudinary-loader';

import styles from './Navbar.module.css';
import { NAVBAR_COPY, NAV_LINKS } from './navbar.config';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <Image loader={cloudinaryLoader} className={styles.logoImage} src="/v1775337954/portfolio-v2/logo_xfpcy9.webp" width={34} height={34} alt={NAVBAR_COPY.logoAlt} />
            <span>{NAVBAR_COPY.brandName}</span>
          </a>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href={NAVBAR_COPY.ctaHref} className={styles.cta}>
            {NAVBAR_COPY.ctaLabel}
          </a>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineOpen : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineOpen : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineOpen : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`} onClick={closeMenu} />

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href={NAVBAR_COPY.ctaHref} className={styles.drawerCta} onClick={closeMenu}>
          {NAVBAR_COPY.ctaLabel}
        </a>
      </div>
    </>
  );
};

export default Navbar;
