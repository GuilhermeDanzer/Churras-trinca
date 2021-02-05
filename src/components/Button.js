import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  width: ${(props) => (props.width ? props.width : "282px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  background: #000000;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  outline: none;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Button = (props) => {
  return <Botao {...props}>{props.children}</Botao>;
};
