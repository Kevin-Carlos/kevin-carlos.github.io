import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';
import { FC, useState } from 'react';

export type SwitchProps = RadixSwitch.SwitchProps;

export const Switch: FC<SwitchProps> = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(props.checked ?? false);

  return (
    <RadixSwitch.Root
      {...props}
      onCheckedChange={(c) => {
        if (props.onCheckedChange) {
          props.onCheckedChange(c);
        }

        setIsChecked(c);
      }}
      checked={isChecked}
      className={clsx(
        '[all=unset]',
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
        'focus:outline-theme-blue',
        'dark:focus:outline-theme-orange',
        'data-[state=checked]:bg-theme-blue',
        'transition-all',
        props.className,
      )}
    >
      <RadixSwitch.Thumb
        className='block w-[21px] h-[21px] bg-theme-white rounded-full transition-all translate-x-[3px] data-[state=checked]:translate-x-[27px]'
        style={{ boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.2)' }}
      />
    </RadixSwitch.Root>
  );
};
