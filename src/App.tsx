import React, { ChangeEvent, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Drawer,
  Hidden,
  NavigationBar,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
} from "@12emake/design-system";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/MenuOpen";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./App.css";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const onChange = (_: ChangeEvent<{}>, newValue: number) => setValue(newValue);

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
        <NavigationBar position="fixed" color="transparent" className="test2">
          <Toolbar>
            <div
              style={{
                flexGrow: 1,
                fontWeight: 900,
                fontSize: "30px",
              }}
            >
              molkky
            </div>
            <Hidden smDown>
              <Button color="inherit" variant="text" shape="square">
                Login
              </Button>
            </Hidden>
          </Toolbar>
        </NavigationBar>
        <Button>Start a molkky game</Button>
        <Hidden mdUp>
          <BottomNavigation className="test" value={value} onChange={onChange}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction
              label="Favorites"
              icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
              label="Menu"
              icon={<MenuIcon />}
              onClick={toggleDrawer(true)}
            />
          </BottomNavigation>
        </Hidden>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div className="test3">
            <Button color="default" variant="text" shape="square" fullWidth>
              Inbox
            </Button>
            <Button color="default" variant="text" shape="square" fullWidth>
              Example
            </Button>
            <Button color="default" variant="text" shape="square" fullWidth>
              Settings
            </Button>
          </div>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default App;
