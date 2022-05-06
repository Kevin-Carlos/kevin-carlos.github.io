import { useContext } from 'react';
import { ThemeCtx, type Theme } from './ThemeContext';

export const useTheme: () => [
  mode: Theme,
  setMode: (m: Theme) => void
] = () => {
  const ctx = useContext(ThemeCtx);

  if (!ctx) {
    throw new Error('ThemeCtx must be used underneath a provider');
  }

  return [ctx.mode, ctx.setMode];
};
