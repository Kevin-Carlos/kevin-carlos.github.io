import React, { FC } from "react";
import styled from "styled-components";

type SectionProps = {
  className?: string;
  isFirst?: boolean;
};

export const Section: FC<SectionProps> = ({ className, children, isFirst }) => {
  return (
    <StyledSection
      className={className}
      style={isFirst ? { paddingTop: "4rem" } : undefined}
    >
      <ContentWrapper>{children}</ContentWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.standard};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto 4rem;

  ${({ theme }) => theme.mediaQuery.desktop} {
    width: 120rem;
    margin: 0 auto 8rem;
    padding: 0;
  }

  ${({ theme }) => theme.mediaQuery.xl_desktop} {
    width: 140rem;
  }
`;
