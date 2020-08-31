import React, { FC } from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { ColorNames, colors } from "common/styles";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: ColorNames;
};

export const SubmitButton: FC<SubmitButtonProps> = ({
  color = "blue",
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      type="submit"
      color={color as ColorNames}
      isDisabled={props.disabled}
    />
  )
}

const StyledButton = styled.button<{ color: ColorNames, isDisabled?: boolean }>`
  width: 100%;
  margin: 1rem;
  padding: 1.25rem 1.5rem;
  background-color: ${({ color }) => colors[color]};
  color: ${({ theme }) => theme.colors.black};
  border: 0;
  border-radius: 0.2rem;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ isDisabled, theme }) => isDisabled && `
    cursor: not-allowed;
    background-color: ${theme.colors.light_gray};
  `};
  &:hover {
    background-color: ${({ color, isDisabled, theme }) => 
      !isDisabled 
        ? lighten(0.03, colors[color])
        : theme.colors.light_gray
    };
    color: ${({ theme }) => lighten(0.07, theme.colors.black)};
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.3rem);
  }
  &:focus {
    outline: none;
  }
`;