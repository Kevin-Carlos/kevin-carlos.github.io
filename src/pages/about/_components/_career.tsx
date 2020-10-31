import React from "react";
import { Blockquote } from "common/components";
import styled from "styled-components";

export const CareerBlurb = ({}) => {
  return (
    <div>
      <p>
        Back in October of 2019, I joined{" "}
        <BlueLink href="https://cycle.io" target="_blank">
          Cycle
        </BlueLink>
        .
      </p>

      <Blockquote>
        <p>
          Too many companies have been led down the path of believing they have
          the same technical requirements as Fortune 100 enterprises, and we're
          here to fix that.
        </p>
        <p>
          Our goal is simple: enable developers to spend more time building
          awesome products and less time managing infrastructure, pushing
          deployments, and patching orchestrators.
        </p>
        <p style={{ margin: 0 }}>
          -{" "}
          <BlueLink href="https://cycle.io/platform/" target="_blank">
            Platform
          </BlueLink>
        </p>
      </Blockquote>

      <p>
        I help manage and maintain five different frontend applications and my
        most recent noteworthy project has been developing the views/pages of
        our now-rebranded site, check it out!
      </p>

      <h2>I've also written some blog posts!</h2>
      <ul>
        <li>
          <BlueLink
            href="https://cycle.io/blog/2020/02/thrown-into-the-fire---learning-containers-as-a-new-college-grad/"
            target="_blank"
          >
            Thrown Into the Fire — Learning Containers as a New College Grad
          </BlueLink>
        </li>
        <li>
          <BlueLink
            href="https://cycle.io/blog/2020/10/a-deep-dive-into-cycles-frontend-stack/"
            target="_blank"
          >
            A Deep Dive Into Cycle's Frontend Stack
          </BlueLink>
        </li>
      </ul>
    </div>
  );
};

const BlueLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
`;
