import Form from "react-bootstrap/Form";
import { SUPPORTED_LANGUAGES } from "../constants";
import React, { FC } from "react";
import { FromLanguage, Language } from "../types";

type LanguageSelectorProps =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | { type: "to"; value: Language; onChange: (language: Language) => void };

export const LanguageSelector: FC<LanguageSelectorProps> = ({
  onChange,
  type,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select
      aria-label="Select your language"
      onChange={handleChange}
      value={value}
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
