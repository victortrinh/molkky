import {
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";

import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledContainer>
      <Button
        size={isMobile ? "large" : "medium"}
        color="secondary"
        fullWidth={isMobile}
      >
        {t("start game")}
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
