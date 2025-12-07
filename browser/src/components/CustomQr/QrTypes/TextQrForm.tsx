import React from "react";
import {
  CompactFormField,
  InputContainer,
  StyledTextarea,
} from "../../../styled/styled.ts";
import { useQrContext } from "../../../hooks/useQrContext.ts";

const TEXT_PLACEHOLDER = "Set your QR code content here";

const TextQrForm: React.FC = () => {
  const { textContent, setTextContent } = useQrContext();

  return (
    <CompactFormField>
      <label htmlFor="qrTextContent">Text Content</label>
      <InputContainer>
        <StyledTextarea
          id="qrTextContent"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder={TEXT_PLACEHOLDER}
          rows={5}
        />
      </InputContainer>
    </CompactFormField>
  );
};

export default TextQrForm;
