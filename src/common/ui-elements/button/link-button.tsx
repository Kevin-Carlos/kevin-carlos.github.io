import React, { FC } from "react";
import styled from "styled-components";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { };

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledA {...props} target={props.href?.includes("http") ? "_blank" : undefined}>
      <Underline />
      {children}
    </StyledA>
  )
}

const Underline = styled.hr`
  color: ${({ theme }) => theme.colors.orange} !important;
  border-width: 0px;
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 0;
  transition: all 0.2s ease-in-out;
`;

const StyledA = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  position: relative;

  /* &:visited {
    color: ${({ theme }) => theme.colors.white};;
  } */
  
  &:hover {
    transform: scale(1.2);
    ${Underline} {
      border-width: 1px;
      width: 2rem;
    };
  }
`;