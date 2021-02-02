import React from "react";
import styled from "styled-components";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Box } from "./ScheduleScreen";
import { Titulo, Container } from "./Login";
export const BarbecueScreen = () => {
  return (
    <Container>
      <Box>
        <Header>
          <Titulo left="169px" top="47px">
            Agenda de Churras
          </Titulo>
        </Header>
      </Box>
    </Container>
  );
};
