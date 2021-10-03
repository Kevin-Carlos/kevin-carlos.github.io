import React, { FC } from "react";
import styled from "styled-components";
import { Divider } from "../divider";

type BlockquoteProps = {
  children: React.ReactNode;
  className?: string;
};

export const Blockquote: FC<BlockquoteProps> = ({ children, className }) => {
  return (
    <BlockQuoteWithDivider className={className}>
      <RotatedDivider />
      <blockquote>{children}</blockquote>
    </BlockQuoteWithDivider>
  );
};

const BlockQuoteWithDivider = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr;
  margin-bottom: 2rem;
`;

const RotatedDivider = styled(Divider)`
  width: 2px;
  height: 100%;
`;
