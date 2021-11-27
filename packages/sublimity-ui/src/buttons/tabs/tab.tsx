import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

export type TabProps = Omit<JSX.IntrinsicElements['li'], 'ref'>;

export const Tab: FC<TabProps> = ({ children, ...rest }) => {
  return <TabLI {...rest}>{children}</TabLI>;
};

const TabLI = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  max-width: max-content;
  background: transparent;
  color: inherit;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: ${colors.orange};
  }
`;
