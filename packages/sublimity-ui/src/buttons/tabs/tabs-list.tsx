import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorNames, colors } from '../../theme';

export type TabsListProps = {
  children: JSX.Element[];
  border?: {
    color?: ColorNames;
  };
  className?: string;
};

export const TabsList: FC<TabsListProps> = ({
  children,
  border,
  className,
}) => {
  return (
    <TabsOL
      listColor={colors[border?.color ?? 'light_teal']}
      className={className}
    >
      {children}
    </TabsOL>
  );
};

const TabsOL = styled.ol<{ listColor: string }>`
  list-style: none;
  padding: 0;
  border-bottom: 1px solid ${colors.orange};
  max-width: max-content;

  display: flex;
  align-items: center;
`;
