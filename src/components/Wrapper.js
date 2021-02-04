import React from "react";
import { Header } from "./Header";
import styled from "styled-components";

export const Titulo = styled.h1`
  position:absolute;
  left:${(props) => props.left};
  top:${(props) => props.top};
  line height:2.348rem;
  `;
export const Box = styled.div`
  position: absolute;
  width: 636px;
  display: flex;
  flex-direction: column;
  flex: 1;
  top: 0px;
  border-radius: 4px;
  background-color: #fafafa;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = ({ children }) => {
  return (
    <Container>
      <Box>
        <Header>
          <Titulo left="169px" top="47px">
            Agenda de Churras
          </Titulo>
        </Header>
        {children}
      </Box>
    </Container>
  );
};
