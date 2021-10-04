import { darken } from 'polished';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput type="text" {...props} ref={ref} />;
});

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  appearance: none;
  border: 1.7px solid ${({ theme }) => theme.colors.light_gray};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.light_gray)};
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
