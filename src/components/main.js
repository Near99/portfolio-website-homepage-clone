import React from "react";
import { ThemeProvider } from "styled-components";
import Content from "./Content/Content";
import Header from "./Header/Header";
import { Layout } from "./StyledComponents/Layout";
import { theme } from "./StyledComponents/Theme/Theme";

function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </ThemeProvider>
  );
}

export default MainPage;
