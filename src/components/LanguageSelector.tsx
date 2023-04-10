import Form from "react-bootstrap/Form";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { FC } from "react";
import { FromLanguage, Language, SectionType } from "../types.d";

type LanguageSelectorProps =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.To;
      value: Language;
      onChange: (language: Language) => void;
    };

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
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGE}>Detect Language</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
