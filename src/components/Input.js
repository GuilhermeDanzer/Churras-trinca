import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 282px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  box-sizing: border-box;
  padding-left: 14px;
  font-style: italic;
  border: none;
  outline: none;
`;
export const Input = (props) => {
  return <InputField {...props} />;
};
