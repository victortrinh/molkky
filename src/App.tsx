import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import Home from "./components/pages/home";
import { NavigationBar } from "./components/navigation/navigationBar";
import React from "react";
import Settings from "./components/pages/settings";
import styled from "styled-components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <BrowserRouter basename="molkky">
      <ThemeProvider
        theme={prefersDarkMode ? "darkUnderTheLake" : "underTheLake"}
      >
        <StyledContainer>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
          </Switch>

          <BottomNavigationBar />
        </StyledContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
