import React from "react";
import { Layout } from "common/layout";
import { Hero } from "./_home/_hero";
import styled from "styled-components";
import { Bars } from "./_home/_about-me/_bars";
import { CurrentEvents } from "./_home/_current-events/_current-events";

export default () => (
  <Layout>
    <StyledHero />
    <StyledBars />
    <CurrentEvents />
  </Layout>
)

const StyledHero = styled(Hero)`
  ${({ theme }) => theme.mediaQuery.laptop} {
    z-index: ${({ theme }) => theme.zIndices.standard};
    position: relative; 
  }
`;

const StyledBars = styled(Bars)`
  ${({ theme }) => theme.mediaQuery.laptop} {
    z-index: ${({ theme }) => theme.zIndices.underlay};
    position: relative; 

    & > div {
      margin: 0 auto 10rem !important;
    }
  }
`;