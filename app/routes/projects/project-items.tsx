import { type ReactChild } from 'react';
import { links } from '~/common/links';

type ProjectItem = {
  name: string;
  description: ReactChild;
  path: string;
};

export const projectItems: ProjectItem[] = [
  {
    name: 'Loot Crates',
    description: (
      <p>
        An interactive loot crate system built to learn and understand the
        inner-workings of loot boxes.
      </p>
    ),
    path: links.projects().project().lootCrate(),
  },
  // {
  //   name: 'Loaders',
  //   description: <p>Building loading spinners / indicators for fun.</p>,
  //   path: links.projects().project().loaders(),
  // },
];
