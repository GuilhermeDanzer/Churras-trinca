import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import backgroundBarbecue from "../assets/backgroundBarbecue.svg";
import { Context as BarbecueContext } from "../context/ChurrasContext";

export const Login = () => {
  const history = useHistory();
  const { state, signIn } = useContext(BarbecueContext);
  const [values, setValues] = useState({ email: "", senha: "" });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  if (state.usuario) {
    history.push("/agenda");
  } else {
    console.log(null);
  }

  return (
    <Container>
      <Box backgroundImage={backgroundBarbecue}>
        <Titulo left="169px" top="47px">
          Agenda de Churras
        </Titulo>
        <EmailContainer>
          <LabelEmail>Login</LabelEmail>
          <Input
            value={values.email}
            onChange={handleChange("email")}
            style={{
              position: "absolute",
              left: 177,
              top: 51,
            }}
            placeholder="e-mail"
          />
        </EmailContainer>

        <LabelSenha>Senha</LabelSenha>
        <Input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              signIn(values);
            }
          }}
          value={values.senha}
          onChange={handleChange("senha")}
          style={{
            position: "absolute",
            left: 177,
            top: 389,
          }}
          placeholder="senha"
          type="password"
        />

        <Button
          onClick={() => signIn(values)}
          style={{
            position: "absolute",
            left: 177,
            top: 513,
          }}
        >
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Box>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  position: absolute;
  width: 636px;
  height: 746px;
  top: 0px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  background: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  position:absolute;
  left:${(props) => props.left};
  top:${(props) => props.top};
  line height:2.348rem;
  `;

const EmailContainer = styled.div`
  background: linear-gradient(0deg, #ffd836 0%, rgba(255, 216, 54, 0) 100%);
  position: absolute;
  width: 636px;
  height: 124px;
  left: 0px;
  top: 210px;
`;

const LabelEmail = styled.p`
  position: absolute;
  left: 177px;
  top: -7px;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const LabelSenha = styled.p`
  position: absolute;
  left: 177px;
  top: 331px;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const ButtonText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  font-family: ${(props) => props.theme.font.fontFamily};
`;
