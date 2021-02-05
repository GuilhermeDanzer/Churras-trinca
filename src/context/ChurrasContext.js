import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const churrasReducer = (state, action) => {
  switch (action.type) {
    case "sign_in":
      return { ...state, usuario: action.payload };
    case "get_churras":
      return { ...state, churras: action.payload };

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
  return async (valores, callback) => {
    const { email, senha } = valores;
    const response = await jsonServer.get("users");
    console.log(response.data);
    let verificacao = false;
    response.data.forEach((element) => {
      if (element.email === email && element.senha === senha) {
        verificacao = true;
      }
    });

    console.log(verificacao);
    if (verificacao) {
      dispatch({ type: "sign_in", payload: verificacao });
    } else {
      dispatch({ type: "sign_in", payload: verificacao });
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
    const {
      nome,
      data,
      desc,
      churrasPreco,
      bebidaPreco,
      obs,
      listaConvidado,
    } = churras;

    await jsonServer.post("/churrascos", {
      nome,
      data,
      desc,
      churrasPreco,
      bebidaPreco,
      obs,
      listaConvidado,
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
  { churras: [] }
);
