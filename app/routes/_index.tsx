import type {
  HeadersFunction,
  LoaderFunctionArgs,
} from '@remix-run/cloudflare';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
import { Layout } from '~/common/layout';
import { MyGlobe } from './globe/Globe.client';
import { Hero } from './hero/hero';
import { helloInLanguages } from './hero/languages';

const randomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArray = <T extends unknown[]>(array: T): T => {
  const tmp = [...array] as T;

  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
  }

  return tmp;
};

type Loader = {
  motion: boolean;
};

const MOTION_HEADER = 'Sec-CH-Prefers-Reduced-Motion';

export const headers: HeadersFunction = () => ({
  'Accept-CH': MOTION_HEADER,
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const prefHeader = request.headers.get(MOTION_HEADER);

  return { motion: prefHeader !== 'reduce' } satisfies Loader;
};

export default function Index() {
  // TODO, I should do something with this.
  // const { motion } = useLoaderData<typeof loader>();

  const [helloIndex, setIndex] = useState(0);

  useEffect(() => {
    const asIndexes = helloInLanguages.map((_, idx) => idx);

    let shuffled = shuffleArray(asIndexes);

    const interval = setInterval(() => {
      let next = shuffled.shift();

      if (next === undefined) {
        shuffled = shuffleArray(asIndexes);
        next = shuffled.shift() || 0;
      }

      setIndex(next);
    }, 3_000);

    return () => clearInterval(interval);
  }, []);

  const coord = useMemo(() => {
    const coord = helloInLanguages[helloIndex].coord;

    if (!Array.isArray(coord)) {
      return coord;
    }

    // Otherwise pick a random coordinate from the array
    const randomCoord = randomInteger(0, coord.length - 1);

    return coord[randomCoord];
  }, [helloIndex]);

  return (
    <Layout hideFooter>
      <Hero helloIndex={helloIndex} />

      <div className='fixed right-[-200px]'>
        <div className='invisible md:visible relative rounded-full h-[800px] w-[800px] bg-theme-lteal dark:bg-theme-black shadow-xl'>
          <Suspense fallback={null}>
            <ClientOnly
              fallback={
                <div className='relative rounded-full h-[800px] w-[800px] bg-theme-lteal dark:bg-theme-black shadow-xl' />
              }
            >
              {() => {
                return <MyGlobe coord={coord} />;
              }}
            </ClientOnly>
          </Suspense>
        </div>
      </div>
    </Layout>
  );
}
