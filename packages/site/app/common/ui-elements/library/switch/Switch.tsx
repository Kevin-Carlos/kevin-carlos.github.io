import * as RadixSwitch from '@radix-ui/react-switch';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export type SwitchProps = RadixSwitch.SwitchProps;

const Root = styled(RadixSwitch.Root)`
  all: unset;
  position: relative;
  cursor: pointer;

  height: 25px;
  width: 50px;
  background-color: ${colors.orange};
  border-radius: 9999px;
  margin: 0 8px;

  &:focus {
    
  }

  &[data-state='checked'] { background-color: ${colors.blue} },
`;

const Thumb = styled(RadixSwitch.Thumb)<{ $checked: boolean }>`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  ${({ $checked }) =>
    $checked
      ? `
    box-shadow: -2px 1px 2px rgba(0, 0, 0, 0.2);
  `
      : `
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
  `}

  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(3px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(27px);
  }
`;

export const Switch: FC<SwitchProps> = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(props.checked ?? false);

  return (
    <Root
      {...props}
      onCheckedChange={(c) => {
        if (props.onCheckedChange) {
          props.onCheckedChange(c);
        }

        setIsChecked(c);
      }}
    >
      <Thumb $checked={isChecked} />
    </Root>
  );
};
