import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Circles } from './_Circles';
import { ContentBlurb } from './_components/_content-blurb';
import { circleItems } from './_items';

export const Information: FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Circles index={index} setIndex={(n) => setIndex(n)} />
      <ContentBlurb type={circleItems[index].key} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
  }
`;
