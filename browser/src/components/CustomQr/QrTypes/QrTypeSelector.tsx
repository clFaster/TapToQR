import React from "react";
import { QrDataType } from "../../../utils/qr-data-formatters.ts";
import { CompactFormField, SelectContainer } from "../../../styled/styled.ts";

interface QrTypeSelectorProps {
  dataType: QrDataType;
  setDataType: (dataType: QrDataType) => void;
}

const QrTypeSelector: React.FC<QrTypeSelectorProps> = ({
  dataType,
  setDataType,
}) => {
  return (
    <CompactFormField>
      <label htmlFor="dataType">QR Code Type</label>
      <SelectContainer>
        <select
          id="dataType"
          value={dataType}
          onChange={(e) => setDataType(e.target.value as QrDataType)}
        >
          {Object.values(QrDataType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </SelectContainer>
    </CompactFormField>
  );
};

export default QrTypeSelector;
