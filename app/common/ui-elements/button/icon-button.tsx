import type { CSSProperties, ReactElement } from 'react';
import { Button, ButtonRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

type IconButtonProps = {
  children: ReactElement;
  disabled?: boolean;
  className?: string | ((brp: ButtonRenderProps) => string);
  style?: CSSProperties | ((brp: ButtonRenderProps) => CSSProperties);
  onClick: () => void;
};

export const IconButton = (
  { children, disabled, className, style, onClick, ...rest }: IconButtonProps,
): ReactElement => {
  return (
    <Button
      {...rest}
      ref={(r) => {
        // RAC strips aria-disabled because they handle it internally
        // But for my specific use case, I need to not use the disabled prop
        // and manually make the button look disabled
        if (
          'aria-disabled' in rest && rest['aria-disabled'] &&
          typeof rest['aria-disabled'] === 'string'
        ) {
          r?.setAttribute('aria-disabled', rest['aria-disabled']);
        }
      }}
      isDisabled={disabled}
      className={(brp) => {
        const base =
          'data-[focus-visible]:outline-theme-dteal dark:data-[focus-visible]:outline-theme-orange data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-0 data-[focus-visible]:outline rounded-md hover:opacity-60 transition-opacity disabled:opacity-40 disabled:cursor-wait focus:outline-none';

        return typeof className === 'string'
          ? twMerge(base, className)
          : twMerge(base, className?.(brp));
      }}
      onPress={onClick}
      style={style}
    >
      {children}
    </Button>
  );
};
