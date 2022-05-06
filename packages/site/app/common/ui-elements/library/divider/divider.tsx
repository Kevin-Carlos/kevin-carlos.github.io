import * as Separator from '@radix-ui/react-separator';
import { transparentize } from 'polished';
import styled from 'styled-components';

export type DividerProps = Pick<
  Separator.SeparatorProps,
  'decorative' | 'orientation'
> & {
  color: string;
  highlightColor?: string;
};

export const Divider = styled(Separator.Root)<DividerProps>`
  ${({ orientation }) =>
    orientation === 'vertical'
      ? `
    width: 2px;
    height: 100%;
  `
      : `
    height: 2px;
    width: 100%;
  `};

  background: radial-gradient(
    circle,
    ${(props) => props.color} 0%,
    ${(props) =>
        props.highlightColor
          ? transparentize(1, props.highlightColor)
          : transparentize(1, 'rgba(189, 189, 189, 1)')}
      100%
  );
`;
