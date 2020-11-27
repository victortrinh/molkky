import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BottomNavigationBar = () => {
  const history = useHistory();
  const [value, setValue] = useState("/");
  const [t] = useTranslation();

  const onChange = (_: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Hidden mdUp>
      <StyledBottomNavigation value={value} onChange={onChange}>
        <StyledBottomNavigationAction
          value="/"
          label={t("home")}
          icon={<HomeIcon />}
        />
        <StyledBottomNavigationAction
          value="settings"
          label={t("settings")}
          icon={<SettingsIcon />}
        />
      </StyledBottomNavigation>
    </Hidden>
  );
};

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: calc(env(safe-area-inset-bottom, -60px) + 60px);
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  padding-bottom: env(safe-area-inset-bottom, 0) !important;
  max-width: inherit !important;
`;

export default BottomNavigationBar;
