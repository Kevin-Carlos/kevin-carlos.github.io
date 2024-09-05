import { lazy, Suspense, useEffect, useState } from 'react';

const LazyGlobe = lazy(() =>
  import('./ActualGlobe.client').then((mod) => ({ default: mod._Globe }))
);

type GlobeProps = {
  coord: { lat: number; long: number };
};

export const MyGlobe = ({
  coord,
}: GlobeProps) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onHide = () => {
      setHide(window.innerWidth < 768 ? true : false);
    };

    window.addEventListener('resize', onHide, false);

    return () => {
      window.removeEventListener('resize', onHide, false);
    };
  }, []);

  // On smaller screen widths I don't want this to even render
  if (hide) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <LazyGlobe coord={coord} />
    </Suspense>
  );
};
