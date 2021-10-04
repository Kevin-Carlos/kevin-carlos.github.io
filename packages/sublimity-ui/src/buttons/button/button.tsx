import { darken, lighten } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorNames, colors } from '../../theme';

export type ButtonProps = {
  color?: ColorNames;
  name?: string;
  icon?: React.ReactElement;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  color = 'dark_teal',
  icon,
  ...props
}) => {
  return (
    <StyledButton
      name={props.name}
      color={color}
      isDisabled={props.disabled}
      {...props}
    >
      <ContentWrapper>
        {props.children}
        {icon && icon}
      </ContentWrapper>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  color: ColorNames;
  isDisabled?: boolean;
}>`
  max-height: 10rem;
  padding: 1.25rem 1.5rem;
  background-color: ${(props) => colors[props.color]};
  color: ${colors.white};
  border: 0;
  border-radius: 0.2rem;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ isDisabled }) =>
    isDisabled &&
    `
    cursor: not-allowed;
    background-color: ${colors.light_gray};
  `};

  &:hover {
    background-color: ${({ color, isDisabled }) =>
      !isDisabled
        ? `
      ${lighten(0.03, colors[color])};
    `
        : `
      ${colors.light_gray};
    `};
    color: ${darken(0.04, colors.white)};
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.3rem);
  }

  &:focus {
    outline: none;
  }
`;

const ContentWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :last-child {
    margin-left: 0.5rem;
  }
`;
