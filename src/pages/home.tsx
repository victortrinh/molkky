import { Button, useMediaQuery, useTheme } from "@12emake/design-system";

import { MainContainer } from "../components/shared/mainContainer";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer>
      <Button
        size={isMobile ? "large" : "medium"}
        color="secondary"
        fullWidth={isMobile}
      >
        {t("start game")}
      </Button>
    </MainContainer>
  );
};

export default Home;
