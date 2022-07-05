import * as Separator from '@radix-ui/react-separator';
import { styled } from '~/stitches/stitches.config';

export type DividerProps = Pick<
  Separator.SeparatorProps,
  'decorative' | 'orientation'
> & {
  className?: string;
};

const StyledDivider = styled(Separator.Root, {
  'backgroundColor': '$bg',

  '&::before': {
    content: '',
    backgroundColor: '$bg',
  },

  '&::after': {
    content: '',
    backgroundColor: '$bg',
  },

  'variants': {
    orientation: {
      vertical: {
        'width': '2px',
        'height': '100%',
        'position': 'relative',

        '&::before': {
          position: 'absolute',
          top: 0,
          left: '-1px',
          height: '4px',
          width: '4px',
        },

        '&::after': {
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
          position: 'absolute',
          left: 0,
          top: '-1px',
          height: '4px',
          width: '4px',
        },

        '&::after': {
          position: 'absolute',
          right: 0,
          top: '-1px',
          height: '4px',
          width: '4px',
        },
      },
    },
  },
  'defaultVariants': {
    orientation: 'horizontal',
  },
});

export const Divider = ({ orientation, className }: DividerProps) => {
  return <StyledDivider orientation={orientation} className={className} />;
};
