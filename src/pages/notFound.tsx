import { MainContainer } from "../components/shared/mainContainer";
import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const [t] = useTranslation();

  return (
    <MainContainer>
      <>{t("not-found")}</>
    </MainContainer>
  );
};

export default NotFound;
