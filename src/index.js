import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Login } from "./screens/Login";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { BarbecueScreen } from "./screens/BarbecueScreen";
import { ListScreen } from "./screens/ListScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Provider as ChurrasProvider } from "./context/ChurrasContext";
ReactDOM.render(
  <React.StrictMode>
    <ChurrasProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/agenda" component={ScheduleScreen} />
            <Route path="/cadastrar" component={BarbecueScreen} />
            <Route path="/info" component={ListScreen} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </ChurrasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
