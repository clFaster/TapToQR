import React from "react";
import { CompactFormField, InputContainer } from "../../../styled/styled.ts";
import { useQrContext } from "../../../contexts/QrContext.tsx";

const ContactQrForm: React.FC = () => {
  const { contactData, updateContactData } = useQrContext();

  return (
    <>
      <CompactFormField>
        <label htmlFor="contactName">Name</label>
        <InputContainer>
          <input
            type="text"
            id="contactName"
            value={contactData.name}
            onChange={(e) => updateContactData("name", e.target.value)}
            placeholder="Full Name"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="contactPhone">Phone Number</label>
        <InputContainer>
          <input
            type="text"
            id="contactPhone"
            value={contactData.phone}
            onChange={(e) => updateContactData("phone", e.target.value)}
            placeholder="Phone Number"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="contactEmail">Email</label>
        <InputContainer>
          <input
            type="text"
            id="contactEmail"
            value={contactData.email}
            onChange={(e) => updateContactData("email", e.target.value)}
            placeholder="Email Address"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="contactOrg">Organization (Optional)</label>
        <InputContainer>
          <input
            type="text"
            id="contactOrg"
            value={contactData.organization}
            onChange={(e) => updateContactData("organization", e.target.value)}
            placeholder="Organization"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="contactTitle">Job Title (Optional)</label>
        <InputContainer>
          <input
            type="text"
            id="contactTitle"
            value={contactData.title}
            onChange={(e) => updateContactData("title", e.target.value)}
            placeholder="Job Title"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="contactWebsite">Website (Optional)</label>
        <InputContainer>
          <input
            type="text"
            id="contactWebsite"
            value={contactData.website}
            onChange={(e) => updateContactData("website", e.target.value)}
            placeholder="Website URL"
          />
        </InputContainer>
      </CompactFormField>
    </>
  );
};

export default ContactQrForm;
