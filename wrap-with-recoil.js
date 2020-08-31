import React from "react"
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/common/styles/theme";

export default ({ element }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </RecoilRoot>
  )
}
