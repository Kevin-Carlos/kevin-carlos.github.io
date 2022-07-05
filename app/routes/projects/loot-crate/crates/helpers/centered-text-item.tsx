import { type FC, type ReactNode } from 'react';
import { styled } from '~/stitches';

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
});

export const CenteredTextItem: FC<{
  children: ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
