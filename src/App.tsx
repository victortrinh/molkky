import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";
import { get, set } from "idb-keyval";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { NavigationBar } from "./components/navigation/navigationBar";
import Settings from "./pages/settings";
import i18next from "i18next";
import routes from "./routes";
import styled from "styled-components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkModeOn, setDarkModeOn] = useState<boolean>(prefersDarkMode);

  useEffect(() => {
    get<boolean>("darkModeOn").then((value) => {
      if (value && value !== darkModeOn) {
        setDarkModeOn(value);
      }
    });
    get<string>("language").then((value) => {
      if (i18next.language !== value) {
        i18next.changeLanguage(value);
      }
    });
  }, [setDarkModeOn]);

  const toggleDarkModeOn = () => {
    setDarkModeOn(!darkModeOn);
    set("darkModeOn", !darkModeOn);
  };

  return (
    <ThemeProvider theme={darkModeOn ? "darkUnderTheLake" : "underTheLake"}>
      <BrowserRouter basename="molkky">
        <StyledContainer>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path="/settings"
              render={() => (
                <Settings
                  darkModeOn={darkModeOn}
                  toggleDarkModeOn={toggleDarkModeOn}
                />
              )}
            />
            {routes.map(({ key, ...props }) => (
              <Route key={key} {...props} />
            ))}
          </Switch>
          <BottomNavigationBar />
        </StyledContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
