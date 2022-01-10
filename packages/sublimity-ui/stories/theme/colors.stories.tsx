import React from 'react';
import styled from 'styled-components';
import { colors } from '../../src';

// Component section

const Circle = styled.div<{ color: string }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : undefined)};
`;

const CircleList = styled.ul`
  list-style: none;
  display: flex;

  & > li:not(:last-child) {
    margin-right: 1rem;
  }
`;

// End component Section

export default {
  title: 'Atoms/Colors',
};

export const Colors = () => {
  return (
    <CircleList>
      {Object.entries(colors).map((color) => (
        <li
          key={color[0]}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Circle color={color[1]} />
          <div>{color[0]}</div>
        </li>
      ))}
    </CircleList>
  );
};
