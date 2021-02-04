import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Context as ChurrasContext } from "../context/ChurrasContext";
import { useHistory } from "react-router-dom";

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
`;
export const BarbecueScreen = () => {
  let history = useHistory();
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const [values, setValues] = useState({ data: utc });

  const { state, addChurras } = useContext(ChurrasContext);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const adicionaChurras = async (valores) => {
    await addChurras(valores);
    history.push("/agenda");
  };
  console.log(values);
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
          <Label>Preço da Churras</Label>
          <Input onChange={handleChange("churrasPreco")} type="number" />
        </FieldsDiv>
        <FieldsDiv>
          <Label> Preço do Bebida</Label>
          <Input onChange={handleChange("bebidaPreco")} type="number" />
        </FieldsDiv>
        <FieldsDiv>
          <Label>Observações adicionais</Label>
          <Input onChange={handleChange("obs")} />
        </FieldsDiv>
        <FieldsDiv>
          <Button onClick={() => adicionaChurras(values)}>Enviar</Button>
        </FieldsDiv>
      </Form>
    </Wrapper>
  );
};
