import { useReducerStore } from "./hooks/useReducerStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const {
    fromLanguage,
    setFromLanguage,
    toLanguage,
    interchangeLanguages,
    setToLanguage,
  } = useReducerStore();

  return (
    <Container fluid>
      <h1>Translator</h1>
      <Row>
        <Col>
          <LanguageSelector
            type="from"
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>
        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
