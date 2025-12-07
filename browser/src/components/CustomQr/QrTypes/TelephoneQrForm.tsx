import React from "react";
import {
  CompactFormField,
  InputContainer,
  RadioGroup,
} from "../../../styled/styled.ts";
import { useQrContext } from "../../../hooks/useQrContext.ts";

const TelephoneQrForm: React.FC = () => {
  const { telephoneData, updateTelephoneData } = useQrContext();

  return (
    <>
      <CompactFormField>
        <label htmlFor="telephoneNumber">Phone Number</label>
        <InputContainer>
          <input
            type="text"
            id="telephoneNumber"
            value={telephoneData.number}
            onChange={(e) => updateTelephoneData("number", e.target.value)}
            placeholder="Phone Number"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label>Type</label>
        <RadioGroup>
          <label>
            <input
              type="radio"
              name="telephoneType"
              checked={telephoneData.type === "tel"}
              onChange={() => updateTelephoneData("type", "tel")}
            />
            Call
          </label>
          <label>
            <input
              type="radio"
              name="telephoneType"
              checked={telephoneData.type === "sms"}
              onChange={() => updateTelephoneData("type", "sms")}
            />
            SMS
          </label>
          <label>
            <input
              type="radio"
              name="telephoneType"
              checked={telephoneData.type === "facetime"}
              onChange={() => updateTelephoneData("type", "facetime")}
            />
            FaceTime
          </label>
          <label>
            <input
              type="radio"
              name="telephoneType"
              checked={telephoneData.type === "facetime-audio"}
              onChange={() => updateTelephoneData("type", "facetime-audio")}
            />
            FaceTime Audio
          </label>
        </RadioGroup>
      </CompactFormField>
    </>
  );
};

export default TelephoneQrForm;
