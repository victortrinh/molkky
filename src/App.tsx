import { ThemeProvider, useMediaQuery } from "@12emake/design-system";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import Home from "./components/pages/home";
import { NavigationBar } from "./components/navigation/navigationBar";
import React from "react";
import styled from "styled-components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider
      theme={prefersDarkMode ? "darkUnderTheLake" : "underTheLake"}
    >
      <StyledContainer>
        <NavigationBar />
        <Home />
        <BottomNavigationBar />
      </StyledContainer>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
