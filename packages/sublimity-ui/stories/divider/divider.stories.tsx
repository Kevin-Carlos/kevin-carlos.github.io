import React from 'react';
import styled from 'styled-components';
import { Divider } from '../../src';

export default {
  title: 'Atoms/Dividers',
};

export const Dividers = () => (
  <>
    <VerticalGrid>
      <Divider color="rgb(230, 155, 28)" highlightColor="rgb(255, 255, 255)" />
      <Divider color="rgb(43, 77, 89)" highlightColor="rgb(255, 255, 255)" />
      <Divider color="rgb(1, 38, 48)" highlightColor="rgb(255, 255, 255)" />
      <Divider color="rgb(57, 153, 142)" highlightColor="rgb(255, 255, 255)" />
    </VerticalGrid>
    <div style={{ width: '100vw', height: '100vh' }}>
      <HorizontalGrid>
        <Divider
          orientation="vertical"
          color="rgb(230, 155, 28)"
          highlightColor="rgb(255, 255, 255)"
        />
        <Divider
          orientation="vertical"
          color="rgb(43, 77, 89)"
          highlightColor="rgb(255, 255, 255)"
        />
        <Divider
          orientation="vertical"
          color="rgb(1, 38, 48)"
          highlightColor="rgb(255, 255, 255)"
        />
        <Divider
          orientation="vertical"
          color="rgb(57, 153, 142)"
          highlightColor="rgb(255, 255, 255)"
        />
      </HorizontalGrid>
    </div>
  </>
);

const VerticalGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr;
`;

const HorizontalGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, 500px);
`;
