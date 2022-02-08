import clsx from 'clsx';
import { type FC } from 'react';
import { animated, useTransition } from 'react-spring';
import { circleItems } from './circle-items';

const Bubbles: FC<CirclesProps> = ({ index, setIndex }) => {
  // Transition the circle items in to make them 'pop'
  const transitionedHeaderItems = useTransition(circleItems, {
    trail: 150,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <ul className="flex flex-wrap justify-center md:flex-nowrap">
      {transitionedHeaderItems((styles, item) => {
        return (
          <animated.li
            // size={item.size}
            // color={item.color}
            // active={item.key === circleItems[index].key}
            style={{
              ...styles,
              boxShadow: '8px 6px 10px rgb(0 0 0 / 20%)',
            }}
            onClick={() => {
              // setHeaderType(item.key);
              setIndex(circleItems.findIndex((c) => c.key === item.key));
            }}
            className={clsx([
              item.color,
              item.size,
              'rounded-full',
              'dark:text-theme-white',
              'flex',
              'items-center',
              'justify-center',
              'cursor-pointer',
              'm-3',
              'font-semibold',
            ])}
          >
            <h1>{item.title}</h1>
          </animated.li>
        );
      })}
    </ul>
  );
};

type CirclesProps = {
  index: number;
  setIndex: (n: number) => void;
};

export const Circles: FC<CirclesProps> = ({ index, setIndex }) => {
  return (
    <div className="mb-5 md:mr-5">
      <Bubbles index={index} setIndex={setIndex} />
    </div>
  );
};
