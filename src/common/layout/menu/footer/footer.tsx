import React, { FC } from "react";
import styled from "styled-components";
import stackOverflow from "common/assets/icons/brands/so-icon.svg";
import github from "common/assets/icons/brands/github.png";
import linkedIn from "common/assets/icons/brands/linkedin.png";
import { links } from "common/links";

interface FooterProps {
  className?: string;
  hideFooterItems: Visibility;
}

export const Footer: FC<FooterProps> = ({ className, hideFooterItems }) => {
  return (
    <FooterWrapper className={className}>
      {hideFooterItems === "show" ? (
        <SocialRow
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconWrapper href={links.linkedIn()} target="_blank">
            <Icon src={linkedIn} />
          </IconWrapper>
          <IconWrapper href={links.stackoverflow()} target="_blank">
            <Icon src={stackOverflow} />
          </IconWrapper>
          <IconWrapper href={links.github()} target="_blank">
            <Icon src={github} />
          </IconWrapper>
        </SocialRow>
      ) : null}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
`;

const SocialRow = styled.div`
  z-index: ${({ theme }) => theme.zIndices.standard};

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
  max-height: 3.2rem;
  max-width: 3.2rem;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;
