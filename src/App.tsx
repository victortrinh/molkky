import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { NavigationBar } from "./components/navigation/navigationBar";
import React from "react";
import routes from "./routes";
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
            {routes.map(({ key, ...props }) => (
              <Route key={key} {...props} />
            ))}
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
