import { ReactElement } from 'react';
import { styled } from '~/stitches';

const ICB = styled('button', {
  '&:focus': {
    outlineColor: '$orange',
  },
});

type IconButtonProps = {
  children: ReactElement;
};

export const IconButton = ({ children }: IconButtonProps): ReactElement => {
  return <ICB>{children}</ICB>;
};
