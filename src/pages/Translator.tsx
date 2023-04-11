import { AUTO_LANGUAGE } from "../constants";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { LanguageSelector } from "../components/LanguageSelector";
import TextArea from "../components/TextArea";
import { ArrowsIcon } from "../components/Icons";
import { SectionType } from "../types.d";
import { useReducerStore } from "../hooks/useReducerStore";

export const Translator = () => {
  const {
    fromLanguage,
    setFromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setToLanguage,
    setFromText,
    setResult,
  } = useReducerStore();

  return (
    <Container fluid>
      <h1>Translator</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              loading={loading}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
