import { useReducerStore } from "./hooks/useReducerStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./App.css";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";

function App() {
  const { fromLanguage, setFromLanguage, toLanguage, interchangeLanguages } =
    useReducerStore();

  return (
    <Container fluid>
      <h1>Translator</h1>
      <Row>
        <Col>
          <h2>From</h2>
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
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
