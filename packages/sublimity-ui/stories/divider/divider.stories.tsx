import React from 'react';
import styled from 'styled-components';
import { Divider } from '../../src';

export default {
  title: 'Atoms/Dividers',
};

export const Dividers = () => (
  <Grid>
    <Divider color="rgb(230, 155, 28)" highlightColor="rgb(255, 255, 255)" />
    <Divider color="rgb(43, 77, 89)" highlightColor="rgb(255, 255, 255)" />
    <Divider color="rgb(1, 38, 48)" highlightColor="rgb(255, 255, 255)" />
    <Divider color="rgb(57, 153, 142)" highlightColor="rgb(255, 255, 255)" />
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 15rem;
`;
