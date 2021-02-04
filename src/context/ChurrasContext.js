import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const churrasReducer = (state, action) => {
  switch (action.type) {
    case "get_churras":
      return action.payload;

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const signIn = (dispatch) => {
  return async (email, password, callback) => {
    const response = await jsonServer.get("users");
    const verificacao = response.data.forEach((element) => {
      if (element.email === email && element.password === password) {
        return true;
      }
    });
    if (verificacao) {
      dispatch({ type: "sign_in", payload: "Usuário verificado" });
      if (callback) {
        callback();
      }
    } else {
      alert("Usuário não existente");
    }
  };
};

const getChurras = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/churrascos");
    dispatch({ type: "get_churras", payload: response.data });
  };
};
const addChurras = (dispatch) => {
  return async (churras, callback) => {
    const { nome, data, desc, precoChurras, precoBebida, obs } = churras;
    await jsonServer.post("/churrascos", {
      nome,
      data,
      desc,
      precoChurras,
      precoBebida,
      obs,
    });
    alert("Cadastro realizado com sucesso");
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  churrasReducer,
  { addChurras, getChurras, signIn },
  []
);
