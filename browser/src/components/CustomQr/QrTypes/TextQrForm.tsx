import React from "react";
import { CompactFormField, InputContainer } from "../../../styled/styled.ts";
import styled from "styled-components";

// Create a styled textarea that matches the input styling
const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  background-color: var(--grey-bg-color);
  color: var(--fg-color);
  outline: none;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  margin-bottom: 12px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 8px var(--secondary-color);
  }

  &::placeholder {
    color: var(--fg-color);
    opacity: 0.7;
  }
`;

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
        <StyledTextarea
          id="qrTextContent"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder={placeholder}
          rows={5}
        />
      </InputContainer>
    </CompactFormField>
  );
};

export default TextQrForm;
