import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Moment from "moment";
import PeopleIcon from "../assets/PeopleIcon";
import MoneyIcon from "../assets/MoneyIcon";
import { Context as ChurrasContext } from "../context/ChurrasContext";

export const List = (props) => {
  const [values, setValues] = useState(props.info);
  const { editChurras } = useContext(ChurrasContext);
  const fezPagamento = async (valor) => {
    valor.pagamento = !valor.pagamento;
    const novaListaConvidados = values.listaConvidado.map((elemento) => {
      return elemento.id === valor.id ? valor : elemento;
    });

    const totalAtualizado = values.listaConvidado
      .filter(({ pagamento }) => pagamento === false)
      .reduce((total, currentValue) => (total = total + currentValue.preco), 0);
    setValues({
      ...values,
      listaConvidado: novaListaConvidados,
      total: totalAtualizado,
    });
  };

  useEffect(() => {
    editChurras(values);
  }, [values, editChurras, values.listaConvidado]);

  return (
    <Container>
      <Header>
        <Column flex="3">
          <Data> {Moment(values.data).format("DD/MM")}</Data>
          <Titulo>{values.nome}</Titulo>
        </Column>
        <Column>
          <IconRow>
            <IconPeople>
              <PeopleIcon />
            </IconPeople>
            <Pessoas>{values.listaConvidado.length}</Pessoas>
          </IconRow>
          <IconRow>
            <IconMoney>
              <MoneyIcon />
            </IconMoney>

            <Dinheiro>
              R$
              {values.total}{" "}
            </Dinheiro>
          </IconRow>
        </Column>
      </Header>

      <DivLista>
        {values.listaConvidado.map((convidado, index) => {
          return (
            <ItemLista key={convidado.id}>
              <CheckDiv>
                <CheckInput
                  checked={convidado.pagamento}
                  onChange={() => {
                    fezPagamento(convidado);
                  }}
                  type="checkbox"
                  id={index}
                />
                <CheckLabel htmlFor={index}></CheckLabel>
              </CheckDiv>
              <Nome>{convidado.nome}</Nome>
              <Preco pagamento={convidado.pagamento}>
                R${convidado.preco},00
              </Preco>
            </ItemLista>
          );
        })}
        <Observacao>OBS: {values.obs ? values.obs : null}</Observacao>
      </DivLista>
    </Container>
  );
};

const Container = styled.div`
  width: 588px;

  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  padding-left: 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 25px;
`;
const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : "1")};
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
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;

  text-align: right;
`;

const Pessoas = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;

  text-align: center;
`;

const IconRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
`;

const IconMoney = styled.div`
  margin-right: 8px;
`;

const IconPeople = styled.div`
  margin-right: 12px;
`;

const DivLista = styled.div`
  margin-top: 50px;
`;

const ItemLista = styled.div`
  display: flex;
  position: relative;
  height: 35px;
  margin: auto;
  align-items: center;
  padding: 5px 0px;
  &&:after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 1.5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 91%;
    background: #e5c231;
    opacity: 0.5;
  }
`;
const CheckDiv = styled.div`
  position: relative;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-left: 35px;
`;
const CheckLabel = styled.label`
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: #ffffff;
  border: 3px solid #998220;
  box-sizing: border-box;
  left: 0;
  position: absolute;
  top: 0;
`;
const CheckInput = styled.input`
  &:checked + ${CheckLabel} {
    background-color: #ffd836;
    border-color: #ffd836;
  }
`;

const Nome = styled.span`
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-left: 19px;
`;

const Preco = styled.span`
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-left: auto;
  margin-right: 38px;
  text-decoration: ${(props) => (props.pagamento ? "line-through" : "none")};
`;
const Observacao = styled.p`
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-left: 25px;
`;
