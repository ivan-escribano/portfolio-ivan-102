'use client';

// Creado
import { RefObject, useEffect, useRef } from 'react';

const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;
