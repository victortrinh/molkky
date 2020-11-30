import { HashRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";
import { getDarkMode, setDarkMode } from "./storage/darkModeOn";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { NavigationBar } from "./components/navigation/navigationBar";
import Settings from "./pages/settings";
import { getLanguage } from "./storage/language";
import i18next from "i18next";
import routes from "./routes";
import settings from "./routes/pages/settings";
import styled from "styled-components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [loading, setLoading] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(prefersDarkMode);

  useEffect(() => {
    getDarkMode().then((value) => {
      if (value && value !== darkModeOn) {
        setDarkModeOn(value);
      }

      getLanguage().then((value) => {
        if (i18next.language !== value) {
          i18next.changeLanguage(value);
        }

        setLoading(false);
      });
    });
  }, [setDarkModeOn, setLoading]);

  const toggleDarkModeOn = () => {
    setDarkModeOn(!darkModeOn);
    setDarkMode(!darkModeOn);
  };

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider theme={darkModeOn ? "darkUnderTheLake" : "underTheLake"}>
      <HashRouter>
        <StyledContainer>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path={settings.path}
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
      </HashRouter>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
