import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export const ThemeCtx = createContext<
  | {
      mode: Theme;
      setMode: (m: Theme) => void;
    }
  | undefined
>(undefined);
