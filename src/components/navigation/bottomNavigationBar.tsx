import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";

import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);
  const [t] = useTranslation();

  const onChange = (_: ChangeEvent<{}>, newValue: number) => setValue(newValue);

  return (
    <Hidden mdUp>
      <StyledBottomNavigation value={value} onChange={onChange}>
        <StyledBottomNavigationAction label={t("home")} icon={<HomeIcon />} />
        <StyledBottomNavigationAction
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
