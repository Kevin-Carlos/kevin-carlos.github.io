import React, { FC } from "react";
import styled, { useTheme } from "styled-components";
import { Header, Footer } from "./menu";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "common/styles/global";
import { Head } from "common/site-head";


type LayoutProps = {};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <Fonts />
      <GlobalStyle />
      <GridLayout>
        <GridHeader />
        <GridContent>{children}</GridContent>
        <GridFooter />
      </GridLayout>
    </>
  )
}

const Fonts = () => {
  const theme = useTheme();

  if (!theme) {
    return null;
  }

  return (
    <Helmet>
      <link rel="stylesheet" href={theme.fontLink} />
    </Helmet>
  )
}

const GridLayout = styled.article`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
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
  z-index: ${({ theme }) => theme.zIndices.header};
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;

const GridContent = styled.main`
  grid-area: content;
  min-height: calc(100vh - 12rem);
`;