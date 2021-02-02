import React from "react";
import styled from "styled-components";
import backgroundBarbecue from "../assets/backgroundBarbecue.svg";

const Cabecalho = styled.div`
  width: 636px;
  height: 203px;
  background: ${(props) => props.theme.colors.primary}
    url(${(props) => props.backgroundImage}) no-repeat;
`;
export const Header = ({ children }) => {
  return <Cabecalho backgroundImage={backgroundBarbecue}>{children}</Cabecalho>;
};
