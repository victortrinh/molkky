import styled, { css } from "styled-components";

import { Container } from "@12emake/design-system";
import { ContainerProps } from "@12emake/design-system/dist/components/layout/container";
import React from "react";

export const MainContainer: React.FunctionComponent<
  ContainerProps & StyledContainerProps
> = (props) => <StyledContainer {...props} />;

type StyledContainerProps = {
  $disableCentered?: boolean;
};

const StyledContainer = styled(Container)<StyledContainerProps>`
  width: 100%;
  height: 100%;
  padding-top: calc(env(safe-area-inset-top, -80px) + 80px);
  padding-bottom: calc(env(safe-area-inset-bottom, -80px) + 80px);

  ${(props) =>
    !props.$disableCentered &&
    css`
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
