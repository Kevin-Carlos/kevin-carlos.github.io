import React, { FC } from "react";
import styled from "styled-components";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <FooterWrapper className={className}>
      <div>
        Something here
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* display: flex;
  align-items: center; */
  background-color: ${({ theme }) => theme.colors.black};
  height: 4rem;
`;