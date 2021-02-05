import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import { List } from "../components/List";
import styled from "styled-components";
export const ListScreen = () => {
  const history = useHistory();
  const dados = history.location.state;
  console.log(dados.info);
  const Dashboard = styled.div`
    display: flex;

    justify-content: center;
  `;
  const ListDiv = styled.div`
    margin-bottom: 67px;
    margin-top: -32px;
    border-radius: 2px;
  `;
  return (
    <Wrapper>
      <Dashboard>
        <ListDiv>
          <List info={dados.info} />
        </ListDiv>
      </Dashboard>
    </Wrapper>
  );
};
