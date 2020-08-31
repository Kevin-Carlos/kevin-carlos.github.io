import styled from "styled-components";
import { transparentize } from "polished";

const Chevron = styled.div`
  display: inline-block;
  border-right: .4rem solid ${({ theme }) => transparentize(0.3, theme.colors.light_teal)};
  border-bottom: .4rem solid ${({ theme }) => theme.colors.light_teal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    border-right: .4rem solid ${({ theme }) => transparentize(0.3, theme.colors.dark_teal)};
    border-bottom: .4rem solid ${({ theme }) => theme.colors.dark_teal}
  }
`;

export const ChevronLeft = styled(Chevron)`
  transform: rotate(-225deg);
`;

export const ChevronRight = styled(Chevron)`
  transform: rotate(-45deg);
`