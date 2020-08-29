import React, { FC } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Header, Footer } from "./menu";
import { theme } from "common/styles";


type LayoutProps = {};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GridLayout>
        <GridHeader />
        <GridContent>{children}</GridContent>
        {/* <GridFooter /> */}
      </GridLayout>
    </ThemeProvider>
  )
}


const GridLayout = styled.article`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const GridHeader = styled(Header)`
  grid-area: header;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;

const GridContent = styled.main`
  grid-area: content;
  min-height: 100%;
`;