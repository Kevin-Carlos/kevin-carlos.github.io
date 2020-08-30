import React, { FC } from "react";
import styled from "styled-components";

type SectionProps = {
  className?: string;
};

export const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <StyledSection className={className}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section``;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.desktop} {
    width: 140rem;
    padding: 0;
  }
`;