import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Wrapper } from "../components/Wrapper";
import backgroundBarbecue from "../assets/backgroundBarbecue.svg";
import { Context as ChurrasContext } from "../context/ChurrasContext";

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
  const { state, getChurras } = useContext(ChurrasContext);
  useEffect(() => {
    getChurras();
  }, []);
  console.log(state);
  return (
    <Wrapper>
      <Dashboard>
        {state.map((element) => {
          return (
            <CardDiv key={element.id}>
              <Card info={element} branco={true} churrasco={true} />
            </CardDiv>
          );
        })}
        <CardDiv>
          <Card route="/cadastrar" />
        </CardDiv>
      </Dashboard>
    </Wrapper>
  );
};
