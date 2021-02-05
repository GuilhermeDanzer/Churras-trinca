import React from "react";
import styled from "styled-components";
import Moment from "moment";
import PeopleIcon from "../assets/PeopleIcon";
import MoneyIcon from "../assets/MoneyIcon";

const Container = styled.div`
  width: 588px;
  padding-left: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`;
const Data = styled.span`
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;

  color: #000000;
`;

const Titulo = styled.span`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

const Dinheiro = styled.span`
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
`;

const Pessoas = styled.span`
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
`;

const Icones = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const IconeDinheiro = styled.div``;
export const List = (props) => {
  const churras = props.info;
  return (
    <Container>
      <Header>
        <Column>
          <Data> {Moment(churras.data).format("DD/MM")}</Data>
          <Titulo>{churras.nome}</Titulo>
        </Column>
        <Column>
          <Icones>
            <PeopleIcon /> <Pessoas>{churras.listaConvidado.length}</Pessoas>
          </Icones>
          <Icones>
            <MoneyIcon />
            <Dinheiro>
              R$
              {churras.listaConvidado.reduce(
                (total, currentValue) => (total = total + currentValue.preco),
                0
              )}{" "}
            </Dinheiro>
          </Icones>
        </Column>
      </Header>
    </Container>
  );
};
