import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducerStore } from "./hooks/useReducerStore";

function App() {
  const { fromLanguage, setFromLanguage } = useReducerStore();
  return (
    <div className="App">
      <h1>Translator</h1>
      <button
        onClick={() => {
          setFromLanguage("es");
        }}
      >
        Change Language
      </button>
      {fromLanguage}
    </div>
  );
}

export default App;
