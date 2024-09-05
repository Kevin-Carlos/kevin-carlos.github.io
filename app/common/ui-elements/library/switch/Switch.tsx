import clsx from 'clsx';
import { type FC, useState } from 'react';
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from 'react-aria-components';

export type SwitchProps = RACSwitchProps;

export const Switch: FC<SwitchProps> = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(props.isSelected ?? false);

  return (
    <RACSwitch
      {...props}
      onChange={(c) => {
        if (props.onChange) {
          props.onChange(c);
        }

        setIsChecked(c);
      }}
      isSelected={isChecked}
      className={clsx(
        '[all=unset]',
        'flex',
        'items-center',
        'rounded-full',
        'cursor-pointer',
        'relative',
        'h-[25px]',
        'w-[50px]',
        'bg-theme-orange',
        'mx-2',
        'focus:outline-2',
        'focus:outline',
        'focus:outline-offset-2',
        'data-[focus-visible]:outline-theme-blue',
        'data-[focus-visible]:dark:outline-theme-orange', // TODO Fix,
        'data-[selected]:bg-theme-blue',
        'transition-all',
        props.className,
      )}
    >
      {({ isSelected }) => {
        return (
          <div
            className={clsx(
              'block w-[21px] h-[21px] bg-theme-white rounded-full transition-all translate-x-[3px]',
              isSelected && 'translate-x-[27px]',
            )}
            style={{ boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.2)' }}
          />
        );
      }}
    </RACSwitch>
  );
};
