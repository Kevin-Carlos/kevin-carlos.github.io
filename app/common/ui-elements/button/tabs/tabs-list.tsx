import { styled } from '@stitches/react';
import clsx from 'clsx';
import { type FC } from 'react';

const StyledOL = styled('ol', {
  'position': 'relative',
  'maxWidth': 'max-content',
  'marginBottom': '1.25rem', // 20px
  'display': 'flex',
  'alignItems': 'center',
  'borderBottomWidth': '1px',
  'padding': '0 12px',

  '&::before': {
    content: '',
    height: '4px',
    width: '4px',
    position: 'absolute',
    bottom: '-2.5px',
    left: 0,
  },

  '&::after': {
    content: '',
    height: '4px',
    width: '4px',
    position: 'absolute',
    bottom: '-2.5px',
    right: 0,
  },
});

export type TabsListProps = {
  children: JSX.Element[];
  className?: string;
};

// TODO remove dependency on styled-components and tw and just use stitches
export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  return (
    <StyledOL
      className={clsx([
        className,
        'dark:before:bg-theme-orange',
        'before:bg-theme-dteal',

        'dark:after:bg-theme-orange',
        'after:bg-theme-dteal',

        'dark:border-theme-orange',
        'border-theme-dteal',
      ])}
    >
      {Array.isArray(children) ? children.map((c) => c) : children}
    </StyledOL>
  );
};
