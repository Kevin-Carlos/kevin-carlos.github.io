import clsx from 'clsx';
import {
  type FC,
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTheme } from '~/useTheme';
import { Card, type CardProps } from './card';
import * as styles from './gradient.module.css';

const CardWrapper = (
  { item, mouse }: { item: CardProps; mouse: { x: number; y: number } },
): ReactElement => {
  const [theme] = useTheme();

  const [pos, setPos] = useState({ x: -20000, y: -20000 });

  const itemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (!itemRef.current) {
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();

    if (rect) {
      const diffX = mouse.x - rect.x;
      const diffY = mouse.y - rect.y;

      setPos({ x: diffX, y: diffY });
    }
  }, [mouse.x, mouse.y]);

  return (
    <li
      ref={itemRef}
      className={clsx(
        'relative',
        'cursor-pointer',
        'rounded-md',
        'shadow-xl',
        'before:rounded-md',
        'before:will-change-[background]',
        'before:block',
        'before:absolute',
        'before:inset-[-2.5px_-2px_-2px_-2px]',
        'before:z-[-1]',
        // @ts-expect-error css modules typings
        theme === 'light' && styles.dgradient,
        // @ts-expect-error css modules typings
        theme === 'dark' && styles.lgradient,
      )}
      style={{
        // @ts-expect-error, allowed to set CSS Vars this way
        '--x': `${pos.x}px`,
        '--y': `${pos.y}px`,
      }}
    >
      <Card {...item} />
    </li>
  );
};

export const CardList: FC<{ items: CardProps[] }> = ({ items }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({ x: e.pageX, y: e.pageY });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, false);
    };
  }, []);

  return (
    <ul
      className={'grid gap-5 md:grid-cols-2 dark:text-theme-white'}
    >
      {items.map((i) => {
        return <CardWrapper key={i.title} mouse={mouse} item={i} />;
      })}
    </ul>
  );
};
