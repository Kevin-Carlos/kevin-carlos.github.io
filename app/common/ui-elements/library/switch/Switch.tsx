import * as RadixSwitch from '@radix-ui/react-switch';
import React, { FC, useState } from 'react';
import { styled } from '~/stitches/stitches.config';
import { colors } from '../theme';

export type SwitchProps = RadixSwitch.SwitchProps;

// TODO figure out whats applying styles to the 'button' that make this conflict
const SwitchWrapper = styled('div', {
  '& > button': {
    borderRadius: '9999px',
  },
});

const Root = styled(RadixSwitch.Root, {
  'all': 'unset',
  'position': 'relative',
  'cursor': 'pointer',

  'height': '25px',
  'width': '50px',
  'backgroundColor': colors.orange,
  'borderRadius': '9999px',
  'margin': '0 8px',

  '&:focus': {
    outline: '1px solid red',
  },

  '&[data-state=checked]': {
    backgroundColor: colors.blue,
  },
});

const Thumb = styled(RadixSwitch.Thumb, {
  'display': 'block',
  'width': '21px',
  'height': '21px',
  'backgroundColor': colors.white,
  'borderRadius': '9999px',
  'transition': 'transform 100ms',
  'transform': 'translateX(3px)',

  '&[data-state=checked]': {
    transform: 'translateX(27px)',
  },

  'variants': {
    checked: {
      true: {
        boxShadow: '-2px 1px 2px rgba(0, 0, 0, 0.2)',
      },
      false: {
        boxShadow: '2px 1px 2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
});

export const Switch: FC<SwitchProps> = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState(props.checked ?? false);

  return (
    <SwitchWrapper>
      <Root
        {...props}
        onCheckedChange={(c) => {
          if (props.onCheckedChange) {
            props.onCheckedChange(c);
          }

          setIsChecked(c);
        }}
      >
        <Thumb checked={isChecked} />
      </Root>
    </SwitchWrapper>
  );
};
