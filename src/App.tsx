import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { type ReducerState, type ReducerAction } from "./types";

const initialState: ReducerState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state: ReducerState, action: ReducerAction) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

function App() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Translator</h1>
    </div>
  );
}

export default App;
