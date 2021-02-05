import React from "react";
import styled from "styled-components";
import MoneyIcon from "../assets/MoneyIcon";
import PeopleIcon from "../assets/PeopleIcon";
import BarbecueIcon from "../assets/BarbecueIcon";
import { Link } from "react-router-dom";
import Moment from "moment";
const CardBody = styled.div`
  position: relative;
  width: 282px;
  height: 192px;
  background: ${(props) => (props.branco ? "#ffffff" : "#F1F1F1")};
  box-shadow: ${(props) =>
    props.branco ? "0px 0px 16px rgba(0, 0, 0, 0.06);" : "none"}
  border-radius: 2px;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Data = styled.p`
  position: absolute;
  left: 24px;
  top: 21px;
  font-weight: 800;
  font-size: 28px;
  line-height: 33px;
  margin: 0;
`;

const NomeChurrasco = styled.p`
  position: absolute;
  left: 24px;
  top: 62px;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin: 0;
`;

const Pessoas = styled.span`
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  position: absolute;
  top: 130px;
  left: 50px;
`;

const Dinheiro = styled.span`
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  position: absolute;
  bottom: 32px;
  left: 194px;
`;

const Churras = styled.span`
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.text};
`;
const MoneyIcone = styled.div`
  position: absolute;
  left: 166px;
  bottom: 34px;
`;

const PessoaIcone = styled.div`
  position: absolute;
  left: 24px;
  bottom: 36.7px;
`;

export const Card = (props) => {
  const dados = props.info;

  return (
    <CardBody branco={props.branco}>
      {props.churrasco ? (
        <>
          <Data>{Moment(dados.data).format("DD/MM")}</Data>
          <NomeChurrasco>{dados.nome}</NomeChurrasco>
          <PessoaIcone>
            <PeopleIcon />
          </PessoaIcone>
          <Pessoas>{dados.listaConvidado.length}</Pessoas>
          <MoneyIcone>
            <MoneyIcon />
          </MoneyIcone>
          <Dinheiro>
            R$
            {dados.listaConvidado.reduce(
              (total, currentValue) => (total = total + currentValue.preco),
              0
            )}
          </Dinheiro>
        </>
      ) : (
        <>
          <Link to={props.route}>
            <BarbecueIcon />
            <Churras>Adicionar Churras</Churras>
          </Link>
        </>
      )}
    </CardBody>
  );
};
