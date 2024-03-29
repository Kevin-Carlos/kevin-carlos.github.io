import { useCallback } from 'react';
import Particles, {
  type IOptions,
  type IParticlesProps,
  type RecursivePartial,
} from 'react-tsparticles';
import { useReducedMotion } from '~/common/hooks/motion';
import { Layout } from '~/common/layout';
import { type Theme } from '~/ThemeContext';
import { useTheme } from '~/useTheme';
import { Hero } from './hero';

export default function Index() {
  const prefersReducedMotion = useReducedMotion();
  const [mode] = useTheme();

  const getParticleOptions: (mode: Theme) => RecursivePartial<IOptions> =
    useCallback(
      (mode: Theme) => {
        const opts: IParticlesProps['options'] = {
          fpsLimit: 60,
          detectRetina: true,
          retina_detect: true,
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
              resize: true,
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
              value: 27,
              density: {
                enable: true,
                area: 789,
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
                minimumValue: 0.1,
                sync: false,
                speed: 1,
              },
            },
            size: {
              value: 3,
              random: {
                enable: true,
                minimumValue: 1,
              },
              animation: {
                enable: true,
                speed: 2.4,
                minimumValue: 0.1,
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
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
        };

        return opts;
      },
      [mode]
    );

  return (
    <Layout hideFooter>
      <Hero />
      {!prefersReducedMotion ? (
        <Particles
          id="tsparticles-home-bg"
          options={getParticleOptions(mode)}
          className="fixed top-0 bottom-0 right-0 left-0 h-screen z-20"
        />
      ) : null}
    </Layout>
  );
}
