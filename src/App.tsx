import React from "react";
import { Button, ThemeProvider, useMediaQuery } from "@12emake/design-system";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider
      theme={prefersDarkMode ? "darkUnderTheLake" : "underTheLake"}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>Start molkky</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
