import React, { FC } from "react";
import styled from "styled-components";
import stackOverflow from "common/assets/icons/brands/so-icon.svg";
import github from "common/assets/icons/brands/github.png";
import linkedIn from "common/assets/icons/brands/linkedin.png";
import { links } from "common/links";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <FooterWrapper className={className}>
      <SocialRow
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <IconWrapper
          href={links.linkedIn()}
          target="_blank"
        >
          <Icon src={linkedIn} size={3.5} />
        </IconWrapper>
        <IconWrapper
          href={links.stackoverflow()}
          target="_blank"
        >
          <Icon src={stackOverflow} />
        </IconWrapper>
        <IconWrapper
          href={links.github()}
          target="_blank"
        >
          <Icon src={github} />
        </IconWrapper>
      </SocialRow>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* display: flex;
  align-items: center; */
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
`;

const SocialRow = styled.div`
  & > a {
    margin-right: 2rem;
  }

  & > a:last-child {
    margin-right: 0;
  }
`;

const IconWrapper = styled.a`
  max-width: 3.5rem;
  cursor: pointer;
`;

const Icon = styled.img<{ size?: number }>`
  height: 3.2rem;
  width: ${({ size }) => size ? `${size}rem` : "3.2rem"};

  &:hover {
    opacity: 0.8;
  }
`;