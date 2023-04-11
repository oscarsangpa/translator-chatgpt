import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";
import React from "react";

interface TextAreaProps {
  type: SectionType;
  loading?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const commonStyles = { border: 0, height: "200px", resize: "none" };

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Insert text";
  if (loading === true) return "Loading...";
  return "Translation";
};

const TextArea = ({ type, loading, value, onChange }: TextAreaProps) => {
  const styles =
    type === SectionType.To
      ? { ...commonStyles, backgroundColor: "#f5f5f5" }
      : commonStyles;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextArea;
