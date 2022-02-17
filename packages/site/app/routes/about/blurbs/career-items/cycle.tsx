// import { Blockquote, colors } from 'sublimity-ui';

import { type FC } from 'react';
import { Blockquote, Paragraph } from '~/common/ui-elements';

export const Cycle: FC = () => {
  return (
    <div>
      <Paragraph>In October of 2019, I joined Cycle.</Paragraph>

      <Blockquote
        author="Cycle"
        // color={colors.orange}
        // highlightColor={colors.light_gray}
      >
        <Paragraph>
          {`Too many companies have been led down the path of believing they have
          the same technical requirements as Fortune 100 enterprises, and we're
          here to fix that.`}
        </Paragraph>
        <Paragraph>
          Our goal is simple: enable developers to spend more time building
          awesome products and less time managing infrastructure, pushing
          deployments, and patching orchestrators.
        </Paragraph>
      </Blockquote>

      <Paragraph>
        I helped manage and maintain five different frontend applications and my
        most noteworthy project that I worked on was refactoring the app from a
        Redux based router to React Router. This meant almost an entire
        application rewrite to not only teach the application how to work with
        the new routes, but also teach the Redux store how to work as well.
      </Paragraph>

      <Paragraph>
        Whilst doing this refactor, I attempted to implement some best practices
        and standardization.
      </Paragraph>
    </div>
  );
};
