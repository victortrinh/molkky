import { Container } from "@12emake/design-system";
import { ContainerProps } from "@12emake/design-system/dist/components/layout/container";
import React from "react";
import styled from "styled-components";

export const MainContainer: React.FunctionComponent<ContainerProps> = (
  props
) => <StyledContainer {...props} />;

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
