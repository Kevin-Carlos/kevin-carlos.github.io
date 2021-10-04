import React from 'react';
import { Blockquote, colors } from 'sublimity-ui';

export const CareerBlurb = (): React.ReactElement => {
  return (
    <div>
      <p>Back in October of 2019, I joined Cycle.</p>

      <Blockquote
        author="Platform"
        color={colors.orange}
        highlightColor={colors.light_gray}
      >
        <p>
          {`Too many companies have been led down the path of believing they have
          the same technical requirements as Fortune 100 enterprises, and we're
          here to fix that.`}
        </p>
        <p>
          Our goal is simple: enable developers to spend more time building
          awesome products and less time managing infrastructure, pushing
          deployments, and patching orchestrators.
        </p>
      </Blockquote>

      <p>
        I helped manage and maintain five different frontend applications and my
        most recent noteworthy project has been developing the views/pages of
        our now-rebranded site, check it out!
      </p>
    </div>
  );
};
