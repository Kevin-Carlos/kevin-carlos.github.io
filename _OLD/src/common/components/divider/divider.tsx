import { transparentize } from "polished";
import styled from "styled-components";

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => transparentize(1, theme.colors.light_gray)} 100%
  );
`;
