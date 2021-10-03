import styled from "styled-components";
import { lighten, transparentize } from "polished";

const Chevron = styled.div`
  display: inline-block;
  border-right: 0.4rem solid
    ${({ theme }) => transparentize(0.3, theme.colors.light_teal)};
  border-bottom: 0.4rem solid ${({ theme }) => theme.colors.light_teal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: border 0.25s ease-in-out;

  &:hover {
    border-right: 0.4rem solid
      ${({ theme }) => lighten(0.01, theme.colors.light_teal)};
    border-bottom: 0.4rem solid
      ${({ theme }) => transparentize(0.3, theme.colors.light_teal)};
  }
`;

export const ChevronLeft = styled(Chevron)`
  transform: rotate(-225deg);
`;

export const ChevronRight = styled(Chevron)`
  transform: rotate(-45deg);
`;
