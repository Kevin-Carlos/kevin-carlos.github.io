import React, { FC } from "react";
import styled from "styled-components";

interface LabelProps {
  className?: string;
  label: string;
}

export const Label: FC<LabelProps> = ({ className, label, children }) => {
  return (
    <LabelWrapper className={className}>
      <HTMLLabel style={{ width: "100%" }} htmlFor={label}>
        {label}
      </HTMLLabel>
      {children}
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HTMLLabel = styled.label`
  padding-bottom: 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.light_gray};
`;
