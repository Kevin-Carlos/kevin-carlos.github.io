import styled from 'styled-components';

export type DividerProps = {
  color: string;
  highlightColor?: string;
};

export const Divider = styled.div<DividerProps>`
  width: 100%;
  height: 2px;
  background: radial-gradient(
    circle,
    ${(props) => props.color} 0%,
    ${(props) =>
        props.highlightColor ? props.highlightColor : 'rgba(189, 189, 189, 1)'}
      100%
  );
`;
