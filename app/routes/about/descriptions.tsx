import { useState } from 'react';
import { ContentBlurb } from './blurbs';
import { circleItems } from './circle-items';
import { Circles } from './circles';

export const Descriptions = () => {
  const [index, setIndex] = useState(0);

  console.log(index)

  return (
    <div className="flex flex-col md:flex-row justify-center items-center rounded-lg h-full w-full m-auto pt-60 md:pt-0">
      <Circles index={index} setIndex={(n) => setIndex(n)} />
      {/* Conditionally set height if career bubble is chosen */}
      <div className="text-theme-black dark:text-theme-white flex justify-center w-full md:max-w-[40vw]">
        <ContentBlurb type={circleItems[index].key} />
      </div>
    </div>
  );
};
