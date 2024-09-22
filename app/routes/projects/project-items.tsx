import { links } from '~/common/links';
import type { CardProps } from '~/common/ui-elements/cards/card';

type ProjectItem = CardProps;

export const projectItems: ProjectItem[] = [
  {
    title: 'Connect4',
    children: 'Classic Connect4',
    to: links.projects().project().connect4(),
    linkText: 'Connect4 Game',
  },
  {
    title: 'Toast Center',
    children: <p>An (incomplete) take on a notification center via toasts.</p>,
    to: links.projects().project().snackCenter(),
    linkText: 'Toast Center Demo',
  },
  {
    title: 'Loot Crates',
    children: (
      <p>
        An interactive loot crate system built to learn and understand the
        inner-workings of loot boxes.
      </p>
    ),
    to: links.projects().project().lootCrate(),
    linkText: 'Loot Crate Demo',
  },
  {
    title: 'Loaders',
    children: <p>Building loading spinners / indicators for fun.</p>,
    to: links.projects().project().loaders(),
    linkText: 'Loading Spinner Demo',
  },
];
