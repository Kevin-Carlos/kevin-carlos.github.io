import { useEffect, useLayoutEffect, useState } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined'
  ? useLayoutEffect
  : useEffect;

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useIsomorphicLayoutEffect(() => {
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
