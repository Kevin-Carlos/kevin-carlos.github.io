import { useState } from 'react';
import { styled } from '~/stitches';
import { ContentBlurb } from './blurbs';
import { circleItems } from './circle-items';
import { Circles } from './circles';

const StyledDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderRadius: '8px',

  height: '100%',
  width: '100%',

  // TODO STITCHES breakpoints
  // 'md:w-[60vw]',
  // 'md:flex-row'
});

const ContentWrapper = styled('div', {
  color: '$text',
  display: 'flex',
  justifyContent: 'center',
});

export const Descriptions = () => {
  const [index, setIndex] = useState(0);

  return (
    <StyledDiv>
      <Circles index={index} setIndex={(n) => setIndex(n)} />
      {/* Conditionally set height if career bubble is chosen */}
      <ContentWrapper>
        <ContentBlurb type={circleItems[index].key} />
      </ContentWrapper>
    </StyledDiv>
  );
};
