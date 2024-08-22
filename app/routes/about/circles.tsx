import clsx from 'clsx';
import { type FC } from 'react';
import { animated, useTransition } from 'react-spring';
import { ActiveCircle1, ActiveCircle2, ActiveCircle3 } from './active-circles';
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
    <ul className='flex flex-wrap justify-center md:flex-nowrap'>
      {transitionedHeaderItems((style, item) => {
        return (
          <li className='relative transition-transform ease-in-out hover:scale-105'>
            {index === 0 && item.key === circleItems[index].key
              ? (
                <div className='absolute top-[6px] left-[2px]'>
                  <ActiveCircle1 />
                </div>
              )
              : null}
            {index === 2 && item.key === circleItems[index].key
              ? (
                <div className='absolute top-[-3px] left-[-6px]'>
                  <ActiveCircle2 />
                </div>
              )
              : null}
            {index === 1 && item.key === circleItems[index].key
              ? (
                <div className='absolute top-[-4px] left-[6px]'>
                  <ActiveCircle3 />
                </div>
              )
              : null}
            <animated.button
              style={{
                ...style,
                opacity: style.opacity,
                width: item.size,
                height: item.size,
                boxShadow: '8px 6px 10px rgb(0 0 0 / 20%)',
              }}
              onClick={() => {
                setIndex(circleItems.findIndex((c) => c.key === item.key));
              }}
              className={clsx([
                item.color,
                'rounded-full',
                'dark:text-theme-white',
                'flex',
                'items-center',
                'justify-center',
                'cursor-pointer',
                'm-3',
                'font-semibold',
                'relative',
                'overflow-hidden',
                'transition-colors',
                'outline-none',
                'focus-visible:outline-theme-black',
                'focus-visible:outline-2',
                'focus-visible:outline-offset-2',
                'dark:focus-visible:outline-theme-orange',
              ])}
            >
              <h1>{item.title}</h1>
            </animated.button>
          </li>
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
    <div className='mb-5 md:mr-5'>
      <Bubbles index={index} setIndex={setIndex} />
    </div>
  );
};
