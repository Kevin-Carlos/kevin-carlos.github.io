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
    name: 'GH Pages Site + UI Library Monorepo',
    path: 'https://github.com/Kevin-Carlos/kevin-carlos.github.io',
    description: (
      <p>
        Updated this website to a yarn 2 monorepo containing the GH Pages
        project + the UI library I created meant for it.
      </p>
    ),
  },
];
