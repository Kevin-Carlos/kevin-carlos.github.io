import { RemixBrowser } from '@remix-run/react';
import { useCallback, useState, type ReactNode } from 'react';
import { hydrate } from 'react-dom';
import { ClientStyleContext, getCssText } from './stitches';

type ClientCacheProviderProps = {
  children: ReactNode;
};

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [sheet, setSheet] = useState(getCssText());

  const reset = useCallback(() => {
    setSheet(getCssText());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
