import { MenuLayout, Section } from 'common/layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Circles } from './_Circles';
import { ContentBlurb } from './_components/_content-blurb';
import { circleItems } from './_items';

// eslint-disable-next-line react/display-name
export default (): React.ReactElement => {
  const [index, setIndex] = useState(0);

  return (
    <MenuLayout>
      <FullHeightSection isFirst centered>
        <Circles index={index} setIndex={(n) => setIndex(n)} />
        <ContentBlurb type={circleItems[index].key} />
      </FullHeightSection>
    </MenuLayout>
  );
};

const FullHeightSection = styled(Section)`
  & > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${({ theme }) => theme.mediaQuery.laptop} {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;
