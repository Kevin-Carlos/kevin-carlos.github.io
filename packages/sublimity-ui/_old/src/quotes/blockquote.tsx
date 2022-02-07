import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider } from '../divider';
import type { DividerProps } from '../divider';
import { Pen } from 'phosphor-react';
import { colors } from '../theme';

export type BlockquoteProps = {
  children: React.ReactNode;
  author: string;
  className?: string;
} & DividerProps;

export const Blockquote: FC<BlockquoteProps> = ({
  children,
  className,
  color,
  author,
  highlightColor,
}) => {
  return (
    <BlockQuoteWithDivider className={className}>
      <RotatedDivider color={color} highlightColor={highlightColor} />
      <blockquote>
        {children}
        <Author>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Pen
              weight="duotone"
              style={{ marginRight: '0.5rem' }}
              color={colors.orange}
            />
            {author}
          </span>
        </Author>
      </blockquote>
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

const Author = styled.p`
  font-style: italic;
  font-weight: 600;
`;
