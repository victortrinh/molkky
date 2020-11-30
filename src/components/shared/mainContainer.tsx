import styled, { css } from "styled-components";

import { Container } from "@12emake/design-system";
import { ContainerProps } from "@12emake/design-system/dist/components/layout/container";
import React from "react";

export const MainContainer: React.FunctionComponent<
  ContainerProps & StyledContainerProps
> = (props) => <StyledContainer {...props} />;

type StyledContainerProps = {
  $centered?: boolean;
};

const StyledContainer = styled(Container)<StyledContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: calc(env(safe-area-inset-top, -100px) + 100px);
  padding-bottom: calc(env(safe-area-inset-bottom, -100px) + 100px);

  ${(props) =>
    props.$centered &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;
