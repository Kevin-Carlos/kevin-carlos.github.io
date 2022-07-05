import { type FC } from 'react';
import { styled } from '~/stitches';

const TabListItem = styled('li', {
  'cursor': 'pointer',
  'padding': '20px 8px 8px',
  'position': 'relative',

  'transition': 'color 250ms ease-in-out',

  '&:hover': {
    color: '$tabText',
  },

  '&::before': {
    backgroundColor: '$tabBg',
  },

  'variants': {
    active: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          bottom: '-2px',
          height: '3px',
          width: 'calc(100% - 16px)', // 16px is the horizontal padding
        },
      },
    },
  },
});

export type TabProps = Omit<JSX.IntrinsicElements['li'], 'ref'> & {
  active: boolean;
};

export const Tab: FC<TabProps> = ({ children, active, className, ...rest }) => {
  return (
    <TabListItem {...rest} active={active} className={className}>
      {children}
    </TabListItem>
  );
};
