import React from 'react';
import { Divider } from '~/common/ui-elements/library/divider/divider';

export const EducationBlurb = (): React.ReactElement => {
  return (
    <>
      <h2 className='mb-2 text-xl'>University of Nevada, Reno</h2>
      <div className='flex flex-col items-center h-full'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <p>
            I graduated in the winter of 2019 from the University of Nevada,
            Reno with a Bachelors in Computer Science and Engineering with a
            minor in Mathematics.
          </p>

          <Divider
            orientation='horizontal'
            className='my-5'
          />

          <p>
            My coursework and area of interest was in Machine Learning and A.I.
            For my Senior project, I worked as the primary front-end developer
            on a team of three. Our goal was to refactor and rebuild, from the
            ground up, an in-use production application.
          </p>
        </div>
      </div>
    </>
  );
};
