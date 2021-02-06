import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  background-color: ${(props) => props.theme.colors.background};
  margin: 0;
  font-family: ${(props) => props.theme.font.fontFamily};
  color:${(props) => props.theme.colors.text};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;



}

a{
  color:${(props) => props.theme.colors.text};
  text-decoration:none;
  display:contents;
}

code {
  font-family: Raleway;
}
`;
