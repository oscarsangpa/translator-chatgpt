import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface TextAreaProps {
  type: SectionType;
  placeholder: string;
  loading?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const TextArea = ({
  type,
  placeholder,
  loading,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <Form.Control
      as="textarea"
      autoFocus={type === SectionType.From}
      placeholder={placeholder}
      style={{ height: "150px" }}
    />
  );
};

export default TextArea;
