import { links } from 'common/links';
import React from 'react';

interface Items {
  name: string;
  description: React.ReactChild;
  path: string;
}

export const projectItems: Items[] = [
  {
    name: 'Flashcards',
    description: (
      <p>
        This project was built to demonstrate my ability to quickly learn a MERN
        stack and Redux. The original can be seen on{' '}
        <a
          href="https://github.com/Kevin-Carlos/ReactFlashcards"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        . This is a local version made using recoil for state management.
      </p>
    ),
    path: links.projects().project().flashcards(),
  },
  {
    name: 'Snowpack Site',
    path: 'https://github.com/Kevin-Carlos/Website',
    description: (
      <p>
        Using <a href="https://snowpack.dev">Snowpack</a> to develop this site
        and experiment with new development tools.
      </p>
    ),
  },
  {
    name: 'Sublimity-UI',
    path: 'https://github.com/Kevin-Carlos/sublimity-ui',
    description: (
      <p>
        For general use of this website, publishing packages, and display
        Storybook uses.
      </p>
    ),
  },
];
