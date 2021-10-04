import { MenuLayout, Section } from 'common/layout';
import React from 'react';
import styled from 'styled-components';
import { Information } from './_Information';

// eslint-disable-next-line react/display-name
export default (): React.ReactElement => {
  return (
    <MenuLayout>
      <FullHeightSection isFirst centered>
        <Information />
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
