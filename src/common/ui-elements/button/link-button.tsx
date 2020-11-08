import { Link } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton: FC<LinkButtonProps> = ({ children, ...props }) => {
  if (props.href?.includes("http")) {
    return (
      <StyledLink
        {...props}
        href={props.href || ""}
        target={props.href?.includes("http") ? "_blank" : undefined}
        as="a"
      >
        <Underline />
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink {...props} to={props.href || ""}>
      <Underline />
      {children}
    </StyledLink>
  );
};

const Underline = styled.hr`
  color: ${({ theme }) => theme.colors.orange} !important;
  border-width: 0px;
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 0;
  transition: all 0.2s ease-in-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.2);
    ${Underline} {
      border-width: 1px;
      width: 2rem;
      color: ${({ theme }) => theme.colors.orange} !important;
    }
  }
`;
