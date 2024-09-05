import type {
  HeadersFunction,
  LoaderFunctionArgs,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Suspense, useState } from 'react';
import { Layout } from '~/common/layout';
import { Globe } from './globe/Globe.client';
import { Hero } from './hero/hero';

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
  const { motion } = useLoaderData<typeof loader>();

  const [active, setActive] = useState<[number, number]>([0, 0]);

  return (
    <Layout hideFooter>
      <Hero />

      <button
        onClick={() => {
          setActive([39.5299, 119.8143]);
        }}
      >
        Reno
      </button>
      <button
        onClick={() => {
          setActive([35.652832, 139.839478]);
        }}
      >
        Tokyo
      </button>
      <button
        onClick={() => {
          setActive([-34.920345, -57.969559]);
        }}
      >
        Buenos Aires
      </button>

      <div className='fixed right-[-0px]'>
        <div
          id='canvas-container'
          // className='rounded-full h-[800px] w-[800px] bg-theme-lteal dark:bg-theme-black shadow-xl relative'
          className='rounded-full h-[800px] w-[800px]'
        >
          {typeof document !== 'undefined' && (
            <Suspense fallback={null}>
              <Globe active={active} />
            </Suspense>
          )}
        </div>
      </div>
    </Layout>
  );
}
