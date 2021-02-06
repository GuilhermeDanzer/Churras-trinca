import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Wrapper } from "../components/Wrapper";
import { Context as ChurrasContext } from "../context/ChurrasContext";

export const ScheduleScreen = () => {
  const { state, getChurras } = useContext(ChurrasContext);
  useEffect(() => {
    getChurras();
  }, [getChurras, state]);

  const churrascos = state.churras;
  return (
    <Wrapper>
      <Dashboard>
        {churrascos.map((element) => {
          return (
            <Link
              key={element.id}
              to={{
                pathname: "/info",
                state: { info: element },
              }}
            >
              <CardDiv>
                <Card info={element} branco={true} churrasco={true} />
              </CardDiv>
            </Link>
          );
        })}
        <CardDiv>
          <Card route="/cadastrar" />
        </CardDiv>
      </Dashboard>
    </Wrapper>
  );
};
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
