import React, { FC } from "react";
import styled, { useTheme } from "styled-components";
import { Header, Footer } from "./menu";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "common/styles/global";


type LayoutProps = {};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Fonts />
      <GlobalStyle />
      <GridLayout>
        <GridHeader />
        <GridContent>{children}</GridContent>
        {/* <GridFooter /> */}
      </GridLayout>
    </>
  )
}

const Fonts = () => {
  const theme = useTheme();
  return (
    <Helmet>
      <link rel="stylesheet" href={theme.fontLink} />
    </Helmet>
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