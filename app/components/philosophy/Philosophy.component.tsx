'use client';

import { useRef, useState } from 'react';
import styles from './Philosophy.module.css';
import { PHILOSOPHY_COPY } from './philosophy.config';

const Philosophy = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="philosophy" className={styles.philosophy}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionAccent} />
        <h2 className={styles.sectionTitle}>{PHILOSOPHY_COPY.sectionTitle}</h2>
      </div>

      <div className={styles.window}>
        <div className={styles.bar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.barTitle}>{PHILOSOPHY_COPY.terminalTitle}</span>
          <span />
        </div>

        <div className={styles.body}>
          <div className={styles.videoWrapper} onClick={togglePlay}>
            <video
              ref={videoRef}
              src={PHILOSOPHY_COPY.videoUrl}
              className={styles.video}
              playsInline
              preload="metadata"
            />
            {!isPlaying && (
              <div className={styles.playOverlay}>
                <div className={styles.playBtn}>▶</div>
              </div>
            )}
          </div>

          <div className={styles.output}>
            <div className={styles.promptLine}>
              <span className={styles.prompt}>&gt; </span>
              <span className={styles.command}>{PHILOSOPHY_COPY.command}</span>
            </div>
            <p className={styles.quote}>{PHILOSOPHY_COPY.quote}</p>
            <p className={styles.author}>{PHILOSOPHY_COPY.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
