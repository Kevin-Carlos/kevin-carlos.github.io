import React from 'react';
import { colors, Divider } from 'sublimity-ui';
import { Paragraph } from '~/common/ui-elements';

export const AboutMeBlurb = (): React.ReactElement => {
  const D = () => {
    return <Divider className="my-5" color={colors.orange} />;
  };

  return (
    <div>
      <D />
      <Paragraph>{`Hi, I'm Kevin!`}</Paragraph>
      <Paragraph>
        From an early age, I was introduced to Halo by a friend and got hooked
        into gaming. Like many, I got into Computer Science to build games, but
        in doing so found a world of much more.
      </Paragraph>
      <Paragraph>
        Through school, I learned just how vast the realm of CS is and
        questioned what path I should take. Tesla was becoming more and more
        popular and I saw what they were doing with Machine Learning and A.I; So
        I made these my focus. I was drawn towards this path because I wanted to
        help develop life-changing technologies that impact and shape the world
        we live in.
      </Paragraph>
      <Paragraph>
        Near the end of my schooling career, I was afforded an opportunity to
        become a Frontend Software Engineer and in doing so have found that
        there are more ways to impact and shape the world!
      </Paragraph>
      {/* <p> */}
      {/* <a href="/resume.pdf" target="_blank" rel="noreferrer">
          See my resume
        </a>
      </p> */}
      <D />
    </div>
  );
};
