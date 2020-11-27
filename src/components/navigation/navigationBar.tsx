import {
  Button,
  NavigationBar as ExternalNavigationBar,
  Hidden,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import styled, { css } from "styled-components";

import React from "react";
import { useTranslation } from "react-i18next";

const LOGO_IMAGE_NAME = "molkky.svg";

export const NavigationBar = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledNavigationBar
      position="fixed"
      color={isMobile ? "transparent" : "primary"}
      $isMobile
      $primarycolor={theme.palette.primary.main}
      $secondarycolor={theme.palette.primary.light}
    >
      <Toolbar>
        <StyledLogoContainer>
          <img
            src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
            alt={t("home")}
          />
        </StyledLogoContainer>
        <Hidden smDown>
          <Button color="inherit" variant="text">
            {t("login")}
          </Button>
        </Hidden>
      </Toolbar>
    </StyledNavigationBar>
  );
};

type StyledNavigationBar = {
  $isMobile: boolean;
  $primarycolor: string;
  $secondarycolor: string;
};

const StyledNavigationBar = styled(ExternalNavigationBar)<StyledNavigationBar>`
  background: ${(props) =>
    `linear-gradient(45deg, ${props.$primarycolor} 0%, ${props.$secondarycolor} 100%)`};

  ${(props) =>
    props.$isMobile &&
    css`
      padding-top: env(safe-area-inset-top, 0);
      box-shadow: none !important;
    `}
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1;
`;
