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

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const button = event.currentTarget;

    const circle = document.createElement('div');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.transform = 'scale(0)';
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    circle.style.zIndex = '1000';
    circle.className += ' animate-ripple';

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <ul className="flex flex-wrap justify-center md:flex-nowrap">
      {transitionedHeaderItems((styles, item) => {
        return (
          <li className="relative">
            {index === 0 && item.key === circleItems[index].key ? (
              <div className="absolute top-[6px] left-[2px]">
                <ActiveCircle1 />
              </div>
            ) : null}
            {index === 1 && item.key === circleItems[index].key ? (
              <div className="absolute top-[-3px] left-[-6px]">
                <ActiveCircle2 />
              </div>
            ) : null}
            {index === 2 && item.key === circleItems[index].key ? (
              <div className="absolute top-[-4px] left-[6px]">
                <ActiveCircle3 />
              </div>
            ) : null}
            <animated.div
              style={{
                ...styles,
                boxShadow: '8px 6px 10px rgb(0 0 0 / 20%)',
              }}
              onClick={(ev) => {
                createRipple(ev);

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
                'relative',
                'overflow-hidden',
                'transition-colors',
              ])}
            >
              <h1>{item.title}</h1>
            </animated.div>
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
    <div className="mb-5 md:mr-5">
      <Bubbles index={index} setIndex={setIndex} />
    </div>
  );
};
