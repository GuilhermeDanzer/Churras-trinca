import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ButtonText } from "./Login";
import { Context as ChurrasContext } from "../context/ChurrasContext";
import { Link, useHistory } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Label = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const FieldsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
  flex: 1;
`;

const CheckBox = styled.input`
  transform: scale(1.5);
  color: ${(props) => props.theme.colors.primary};
`;

const CheckBoxDiv = styled.div`
  margin-top: 10px;
`;

const CheckBoxLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Lista = styled.ul``;

const ListaItem = styled.li`
  line-height: 25px;
  font-weight: bold;
  font-size: 21px;
`;

export const BarbecueScreen = () => {
  let history = useHistory();
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const [values, setValues] = useState({
    data: utc,
    listaConvidado: [],
    bebidaPreco: 0,
    churrasPreco: 0,
  });

  const [bebida, setBebida] = useState(false);

  console.log(values);
  console.log(bebida);
  const { addChurras } = useContext(ChurrasContext);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const adicionaChurras = async (valores) => {
    await addChurras(valores);
    history.push("/agenda");
  };
  const addConvidado = (convidado) => {
    if (convidado === undefined || convidado === "") {
    } else {
      console.log(bebida);
      if (bebida) {
        convidado.preco =
          parseInt(values.churrasPreco) + parseInt(values.bebidaPreco);
      } else {
        convidado.preco = parseInt(values.churrasPreco);
      }
      setValues({
        ...values,
        listaConvidado: [...values.listaConvidado, convidado],
        convidado: "",
      });
      setBebida(false);
    }
  };
  const deleteConvidado = (convidado) => {
    setValues({
      ...values,
      listaConvidado: values.listaConvidado.filter(
        (valor) => valor !== convidado
      ),
    });
  };

  return (
    <Wrapper>
      <Form>
        <FieldsDiv>
          <Label> Nome Churras</Label>
          <Input onChange={handleChange("nome")} />
        </FieldsDiv>
        <FieldsDiv>
          <Label> Data Churras</Label>
          <Input
            onChange={handleChange("data")}
            type="date"
            value={values.data}
            min={utc}
            required
          />
        </FieldsDiv>
        <FieldsDiv>
          <Label>Descrição</Label>
          <Input onChange={handleChange("desc")} />
        </FieldsDiv>
        <FieldsDiv>
          <Label>Preço do Churras</Label>
          <Input onChange={handleChange("churrasPreco")} type="number" />
        </FieldsDiv>
        <FieldsDiv>
          <Label> Preço da Bebida</Label>
          <Input onChange={handleChange("bebidaPreco")} type="number" />
        </FieldsDiv>
        <FieldsDiv>
          <Label>Observações adicionais</Label>
          <Input onChange={handleChange("obs")} />
        </FieldsDiv>
        <FieldsDiv>
          <Label>Participante</Label>
          <Input
            onChange={handleChange("convidado")}
            value={values.convidado}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                addConvidado({
                  nome: values.convidado,
                  preco: 0,
                  bebida,
                });
              }
            }}
          />
          <CheckBoxDiv>
            <CheckBox
              type="checkbox"
              checked={bebida}
              onChange={() => setBebida(!bebida)}
              name="bebida"
            />{" "}
            <CheckBoxLabel>Com Bebida</CheckBoxLabel>
          </CheckBoxDiv>

          <FieldsDiv>
            <Button width="200px">
              <ButtonText
                onClick={() =>
                  addConvidado({
                    nome: values.convidado,
                    preco: 0,
                    bebida,
                  })
                }
              >
                Adicionar participante
              </ButtonText>
            </Button>
          </FieldsDiv>
        </FieldsDiv>
        <FieldsDiv>
          <Label>Convidados</Label>
          <Lista>
            {values.listaConvidado.map((convidado) => {
              return (
                <ListaItem>
                  {convidado.nome} - R${convidado.preco}
                  <IconContext.Provider
                    value={{
                      style: {
                        color: "#FFD836",
                        fontSize: 23,
                        position: "absolute",
                        right: 20,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <FiTrash2 onClick={() => deleteConvidado(convidado)} />
                  </IconContext.Provider>
                </ListaItem>
              );
            })}
          </Lista>
        </FieldsDiv>
        <FieldsDiv>
          <Link to="/agenda">
            <Button>
              <ButtonText>Voltar</ButtonText>
            </Button>
          </Link>
        </FieldsDiv>
        <FieldsDiv>
          <Button onClick={() => adicionaChurras(values)}>
            <ButtonText>Enviar</ButtonText>
          </Button>
        </FieldsDiv>
      </Form>
    </Wrapper>
  );
};
