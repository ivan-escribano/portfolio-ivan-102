'use client';

import { useEffect, useRef } from 'react';
import styles from './Terminal.module.css';
import { TERMINAL_COPY } from './terminal.config';
import { useTerminal } from './use-terminal.hook';

const Terminal = () => {
  const { activeCmd, outputHtml, cursorVisible, isTyping, runCommand, handleInView } = useTerminal();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleInView();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleInView]);

  return (
    <div className={styles.window} ref={sectionRef}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <span className={styles.title}>{TERMINAL_COPY.title}</span>
        <span />
      </div>

      <div className={styles.body}>
        <div dangerouslySetInnerHTML={{ __html: outputHtml }} />
        <span className={`${styles.cursor} ${cursorVisible ? '' : styles.cursorHidden}`}>|</span>
      </div>

      <div className={styles.commands}>
        {TERMINAL_COPY.buttons.map((btn) => (
          <button
            key={btn.key}
            className={`${styles.cmdBtn} ${activeCmd === btn.key ? styles.cmdBtnActive : ''}`}
            disabled={isTyping.current}
            onClick={() => runCommand(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
