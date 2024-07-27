import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

export type DividerProps =
  & Pick<
    Separator.SeparatorProps,
    'decorative' | 'orientation'
  >
  & {
    className?: string;
  };

export const Divider = (
  { orientation = 'horizontal', className }: DividerProps,
) => {
  return (
    <Separator.Root
      orientation={orientation}
      className={clsx(
        'dark:bg-theme-orange',
        'dark:before:bg-theme-orange',
        'dark:after:bg-theme-orange',
        'bg-theme-dteal',
        'before:bg-theme-dteal',
        'after:bg-theme-dteal',
        'relative',
        'before:absolute',
        'after:absolute',
        orientation === 'vertical' &&
          'w-0.5 h-full before:top-0 before:left-[-1px] before:h-1 before:w-1 after:bottom-0 after:left-[-1px] after:h-1 after:w-1',
        orientation === 'horizontal' &&
          'h-0.5 w-full before:left-0 before:top-[-1px] before:h-1 before:w-1 after:right-0 after:top-[-1px] after:h-1 after:w-1',
        className,
      )}
    />
  );
};
