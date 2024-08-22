import type { HeadersFunction, LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useState } from 'react';
import { Layout } from '~/common/layout';
import { useTheme } from '~/useTheme';
import { Hero } from './hero/hero';

type Loader = {
  motion: boolean;
};

const MOTION_HEADER = 'Sec-CH-Prefers-Reduced-Motion';

export const headers: HeadersFunction = () => ({
  'Accept-CH': MOTION_HEADER,
});

export const loader: LoaderFunction = async ({ request }) => {
  const prefHeader = request.headers.get(MOTION_HEADER);

  return { motion: prefHeader !== 'reduce' } satisfies Loader;
};

export default function Index() {
  const { motion } = useLoaderData() as Loader;

  const [mode] = useTheme();

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const getParticleOptions: (
    mode: 'light' | 'dark',
  ) => RecursivePartial<IOptions> = useCallback(
    (mode: 'light' | 'dark') => {
      const opts: IParticlesProps['options'] = {
        preset: 'stars',
        fpsLimit: 60,
        detectRetina: true,
        retina_detect: true,
        motion: {
          reduce: {
            factor: 10,
            value: !motion,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              // speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
            },
          },
          color: {
            value: mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
          },
          shape: {
            type: 'circle',
            options: {
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
              polygon: {
                nb_sides: 7,
              },
            },
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: false,
              sync: false,
              speed: 1,
            },
          },
          size: {
            value: 3,
            animation: {
              enable: true,
              speed: 2.4,
              sync: true,
            },
          },
          links: {
            enable: true,
            distance: 177,
            color: mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
              bottom: 'bounce',
              left: 'bounce',
              right: 'bounce',
              top: 'bounce',
            },
          },
        },
      };

      return opts;
    },
    [mode],
  );

  return (
    <Layout hideFooter>
      <Hero />

      {init && (
        <Particles
          id='tsparticles'
          options={getParticleOptions(mode)}
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height: '100vh',
            zIndex: 10,
          }}
        />
      )}
    </Layout>
  );
}
