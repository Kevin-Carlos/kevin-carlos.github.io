import clsx from 'clsx';
import { useState } from 'react';
import { ContentBlurb } from './blurbs';
import { circleItems } from './circle-items';
import { Circles } from './circles';

export const Descriptions = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className={clsx(
        'rounded-lg',
        'h-[60vh]',
        'w-full',
        'md:w-[60vw]',
        'flex',
        'flex-col',
        'md:flex-row',
        'items-center'
      )}
    >
      <Circles index={index} setIndex={(n) => setIndex(n)} />
      <div className="dark:text-theme-white">
        <ContentBlurb type={circleItems[index].key} />
      </div>
    </div>
  );
};
