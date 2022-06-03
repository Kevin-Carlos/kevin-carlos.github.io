import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { styled } from '~/stitches/stitches.config';

export type DividerProps = Pick<
  Separator.SeparatorProps,
  'decorative' | 'orientation'
> & {
  className?: string;
};

const StyledDivider = styled(Separator.Root, {
  variants: {
    orientation: {
      vertical: {
        'width': '2px',
        'height': '100%',
        'position': 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          top: 0,
          left: '-1px',
          height: '4px',
          width: '4px',
        },

        '&::after': {
          content: '',
          position: 'absolute',
          bottom: 0,
          left: '-1px',
          height: '4px',
          width: '4px',
        },
      },
      horizontal: {
        'height': '2px',
        'width': '100%',
        'position': 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          left: 0,
          top: '-1px',
          height: '4px',
          width: '4px',
        },

        '&::after': {
          content: '',
          position: 'absolute',
          right: 0,
          top: '-1px',
          height: '4px',
          width: '4px',
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const Divider = ({ orientation, className }: DividerProps) => {
  return (
    <StyledDivider
      orientation={orientation}
      className={clsx([
        className,
        'dark:bg-theme-orange',
        'bg-theme-dteal',
        'dark:before:bg-theme-orange',
        'before:bg-theme-dteal',
        'dark:after:bg-theme-orange',
        'after:bg-theme-dteal',
      ])}
    />
  );
};
