import { useLayoutEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
    }

    mediaQuery.addEventListener('change', () => {
      setPrefersReducedMotion(mediaQuery.matches);
    });

    return () => mediaQuery.removeEventListener('change', () => null);
  }, []);

  return prefersReducedMotion;
};
