import React, { FC } from 'react';
import styled from 'styled-components';

type SectionProps = {
  className?: string;
  isFirst?: boolean;
  centered?: boolean;
};

export const Section: FC<SectionProps> = ({
  className,
  children,
  isFirst,
  centered,
}) => {
  return (
    <StyledSection
      className={className}
      style={isFirst ? { paddingTop: '4rem' } : undefined}
    >
      <ContentWrapper centered={centered}>{children}</ContentWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.standard};
`;

const ContentWrapper = styled.div<{ centered?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto 4rem;

  ${({ centered }) =>
    centered &&
    `
    min-height: calc(100vh - 24rem);
  `};

  ${({ theme }) => theme.mediaQuery.desktop} {
    width: 120rem;
    margin: 0 auto 8rem;
    padding: 0;
  }

  ${({ theme }) => theme.mediaQuery.xl_desktop} {
    width: 140rem;
  }
`;
