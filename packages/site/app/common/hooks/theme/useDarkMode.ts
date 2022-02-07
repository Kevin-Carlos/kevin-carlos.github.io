import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useDarkMode: () => [
  mode: Theme,
  setMode: (theme: Theme) => void
] = () => {
  const [mode, setM] = useState<'dark' | 'light'>('dark');

  const setMode = useCallback((theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');

      setM('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');

      setM('light');
    }
  }, []);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setM('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setM('light');
    }
  }, []);

  return [mode, setMode];
};
