import { theme as DefaultSiteTheme } from 'common/styles';
import React, { FC } from 'react';
import Particles, { ISourceOptions } from 'react-tsparticles';
import styled, { useTheme } from 'styled-components';
import { Hero } from './_Hero/_hero';

export const Homepage: FC = () => {
  const theme: typeof DefaultSiteTheme = useTheme();

  return (
    <HomeWrapper>
      <StyledParticles
        id="tsparticles-home-bg"
        options={particleOptions(theme as typeof DefaultSiteTheme)}
      />
      <Hero />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  position: relative;
`;

const StyledParticles = styled(Particles)`
  margin-bottom: -1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const particleOptions = (theme: typeof DefaultSiteTheme): ISourceOptions => ({
  background: {
    color: {
      value: theme.colors.black,
    },
  },
  fpsLimit: 60,
  detectRetina: true,
  retina_detect: true,
  interactivity: {
    detectsOn: 'canvas',
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
      value: theme.colors.white,
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
      color: theme.colors.white,
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
});
