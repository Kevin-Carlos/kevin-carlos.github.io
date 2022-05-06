import clsx from 'clsx';
import { useState } from 'react';
import { ContentBlurb } from './blurbs';
import { circleItems } from './circle-items';
import { Circles } from './circles';

export const Descriptions = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        className={clsx(
          'rounded-lg',
          'h-full',
          'w-full',
          'md:w-[60vw]',
          'flex',
          'flex-col',
          'md:flex-row',
          'items-center'
        )}
      >
        <Circles index={index} setIndex={(n) => setIndex(n)} />
        {/* Conditionally set height if career bubble is chosen */}
        <div
          className={clsx(['dark:text-theme-white', 'flex', 'justify-center'])}
        >
          <ContentBlurb type={circleItems[index].key} />
        </div>
      </div>
    </>
  );
};
