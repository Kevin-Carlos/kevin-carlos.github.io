import { styled } from '@stitches/react';
import clsx from 'clsx';
import { type FC } from 'react';

const TabListItem = styled('li', {
  cursor: 'pointer',
  padding: '20px 8px 8px',
  position: 'relative',

  variants: {
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
    <TabListItem
      {...rest}
      active={active}
      className={clsx([
        className,
        'transition-colors',
        'duration-[250ms]',
        'ease-in-out',
        'hover:text-theme-lteal',
        'dark:hover:text-theme-orange',

        'dark:before:bg-theme-orange',
        'before:bg-theme-dteal',
      ])}
    >
      {children}
    </TabListItem>
  );
};
