import React from "react";
import { Layout } from "common/layout";
import { Hero } from "./_home/_hero";
import { Bars } from "./_home/_about-me";
import { CurrentEvents } from "./_home/_current-events";
import styled from "styled-components";

export default () => (
  <Layout>
    <StyledHero />
    <StyledBars />
    <CurrentEvents />
  </Layout>
)

const StyledHero = styled(Hero)`
  z-index: 10;
  position: relative;
`;

const StyledBars = styled(Bars)`
  z-index: 2;
  position: relative;
  & > div {
    margin: 0 auto 10rem !important;
  }
`;