import React, { FC } from "react";
import styled from "styled-components";

interface LabelProps {
  className?: string;
  label: string;
};

export const Label: FC<LabelProps> = ({
  className,
  label,
  children,
}) => {
  return (
    <LabelWrapper className={className}>
      <label style={{ width: "100%" }}>
        {label}
        {children}
      </label>
    </LabelWrapper>
  )
}

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;