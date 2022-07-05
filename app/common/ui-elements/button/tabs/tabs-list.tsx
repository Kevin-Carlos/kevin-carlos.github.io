import { type FC } from 'react';
import { styled } from '~/stitches';

const StyledOL = styled('ol', {
  'position': 'relative',
  'maxWidth': 'max-content',
  'marginBottom': '1.25rem', // 20px
  'display': 'flex',
  'alignItems': 'center',
  'borderBottomWidth': '1px',
  'padding': '0 12px',

  'borderColor': '$tabBorder',

  '&::before': {
    content: '',
    height: '4px',
    width: '4px',
    position: 'absolute',
    bottom: '-2.5px',
    left: 0,

    backgroundColor: '$tabBg',
  },

  '&::after': {
    content: '',
    height: '4px',
    width: '4px',
    position: 'absolute',
    bottom: '-2.5px',
    right: 0,

    backgroundColor: '$tabBg',
  },
});

export type TabsListProps = {
  children: JSX.Element[];
  className?: string;
};

export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  return (
    <StyledOL className={className}>
      {Array.isArray(children) ? children.map((c) => c) : children}
    </StyledOL>
  );
};
