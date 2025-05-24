import React from "react";
import { CompactFormField, InputContainer } from "../../../styled/styled.ts";

interface TextQrFormProps {
  textContent: string;
  setTextContent: (value: string) => void;
  placeholder: string;
}

const TextQrForm: React.FC<TextQrFormProps> = ({
  textContent,
  setTextContent,
  placeholder,
}) => {
  return (
    <CompactFormField>
      <label htmlFor="qrTextContent">Text Content</label>
      <InputContainer>
        <input
          type="text"
          id="qrTextContent"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder={placeholder}
        />
      </InputContainer>
    </CompactFormField>
  );
};

export default TextQrForm;
