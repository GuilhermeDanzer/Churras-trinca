import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Container, Titulo } from "./Login";
import backgroundBarbecue from "../assets/backgroundBarbecue.svg";

export const Box = styled.div`
  position: absolute;
  width: 636px;
  display: flex;
  flex-direction: column;
  flex: 1;
  top: 0px;
  border-radius: 4px;
  background-color: #fafafa;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const CardDiv = styled.div`
  margin-bottom: 67px;
  margin-top: -32px;
  border-radius: 2px;
`;
export const ScheduleScreen = () => {
  return (
    <Container>
      <Box>
        <Header>
          <Titulo left="169px" top="47px">
            Agenda de Churras
          </Titulo>
        </Header>
        <Dashboard>
          <CardDiv>
            <Card branco={true} churrasco={true} />
          </CardDiv>
          <CardDiv>
            <Card branco={true} churrasco={true} />
          </CardDiv>
          <CardDiv>
            <Card branco={true} churrasco={true} />
          </CardDiv>
          <CardDiv>
            <Card route="/cadastrar" />
          </CardDiv>
        </Dashboard>
      </Box>
    </Container>
  );
};
