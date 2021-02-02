import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import backgroundBarbecue from "../assets/backgroundBarbecue.svg";
export const Login = () => {
  return (
    <Container>
      <Box backgroundImage={backgroundBarbecue}>
        <Titulo left="169px" top="47px">
          Agenda de Churras
        </Titulo>
        <EmailContainer>
          <LabelEmail>Login</LabelEmail>
          <Input
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
          style={{
            position: "absolute",
            left: 177,
            top: 389,
          }}
          placeholder="senha"
        />
        <Link to="/agenda">
          <Button
            style={{
              position: "absolute",
              left: 177,
              top: 513,
            }}
          >
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Link>
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

const ButtonText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  font-family: ${(props) => props.theme.font.fontFamily};
`;
