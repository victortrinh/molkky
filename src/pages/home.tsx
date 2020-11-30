import { Button, useMediaQuery, useTheme } from "@12emake/design-system";
import {
  Game as GameType,
  deleteGame,
  getGame,
  setGame as setGameInStorage,
} from "../storage/game";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ArrowRightIcon from "@material-ui/icons/ArrowRightAlt";
import { Game } from "../components/game";
import { MainContainer } from "../components/shared/mainContainer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [game, setGame] = useState<GameType | undefined>();
  const [loading, setLoading] = useState(true);
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getGame().then((value) => {
      if (value) {
        setGame(value);
      }

      setLoading(false);
    });
  }, [setGame]);

  const startGame = () => {
    const newGame: GameType = {
      started: false,
      players: [],
    };
    setGameInStorage(newGame).then(() => setGame(newGame));
  };

  const resetGame = () => {
    deleteGame();
    setGame(undefined);
  };

  if (loading) {
    return null;
  }

  if (game) {
    return <Game game={game} resetGame={resetGame} isMobile={isMobile} />;
  }

  return (
    <MainContainer $centered={!isMobile}>
      <StyledHomePage $isMobile={isMobile}>Home</StyledHomePage>
      <div>
        <Button
          size={isMobile ? "large" : "medium"}
          color="secondary"
          fullWidth={isMobile}
          onClick={startGame}
          endIcon={<ArrowRightIcon />}
        >
          {t("start game")}
        </Button>
      </div>
    </MainContainer>
  );
};

type StyledHomePageProps = {
  $isMobile?: boolean;
};

const StyledHomePage = styled.div<StyledHomePageProps>`
  ${(props) =>
    props.$isMobile &&
    css`
      flex: 1;
    `}
`;

export default Home;
