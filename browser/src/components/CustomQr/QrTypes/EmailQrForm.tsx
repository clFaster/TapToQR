import React from "react";
import {
  CompactFormField,
  InputContainer,
  StyledTextarea,
} from "../../../styled/styled.ts";
import { useQrContext } from "../../../contexts/QrContext.tsx";

const EmailQrForm: React.FC = () => {
  const { emailData, updateEmailData } = useQrContext();

  return (
    <>
      <CompactFormField>
        <label htmlFor="emailTo">To</label>
        <InputContainer>
          <input
            type="email"
            id="emailTo"
            value={emailData.to}
            onChange={(e) => updateEmailData("to", e.target.value)}
            placeholder="recipient@example.com"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="emailCC">CC (Optional)</label>
        <InputContainer>
          <input
            type="email"
            id="emailCC"
            value={emailData.cc || ""}
            onChange={(e) => updateEmailData("cc", e.target.value)}
            placeholder="cc@example.com"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="emailBCC">BCC (Optional)</label>
        <InputContainer>
          <input
            type="email"
            id="emailBCC"
            value={emailData.bcc || ""}
            onChange={(e) => updateEmailData("bcc", e.target.value)}
            placeholder="bcc@example.com"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="emailSubject">Subject (Optional)</label>
        <InputContainer>
          <input
            type="text"
            id="emailSubject"
            value={emailData.subject || ""}
            onChange={(e) => updateEmailData("subject", e.target.value)}
            placeholder="Email Subject"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="emailBody">Message (Optional)</label>
        <InputContainer>
          <StyledTextarea
            id="emailBody"
            value={emailData.body || ""}
            onChange={(e) => updateEmailData("body", e.target.value)}
            placeholder="Email Body"
            rows={5}
          />
        </InputContainer>
      </CompactFormField>
    </>
  );
};

export default EmailQrForm;
