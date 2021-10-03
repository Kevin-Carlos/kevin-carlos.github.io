import { Footer } from 'common/layout';
import { GlobalStyle, theme } from 'common/styles';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <GridLayout>
            <GridHeader></GridHeader>
            <GridContent></GridContent>
            <GridFooter hideFooterItems={false} />
          </GridLayout>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridContent = styled.main`
  grid-area: content;
  min-height: calc(100vh - 12rem);
  background-color: ${({ theme }) => theme.colors.black};

  /* Skewed transparent div  */
  &::after {
    content: '';
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100%;
    bottom: -62rem;
    transform: skewY(-12deg);
    pointer-events: none;
    z-index: ${({ theme }) => theme.zIndices.underlay};

    ${({ theme }) => theme.mediaQuery.tablet} {
      bottom: -85vh;
    }
  }
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;
