import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./src/common/styles/global";
import { theme } from "./src/common/styles/theme";

export default ({ element }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </RecoilRoot>
  );
};
