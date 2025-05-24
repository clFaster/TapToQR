import React from "react";
import { QrDataType } from "../../../utils/qr-data-formatters.ts";
import { TabContainer, Tab } from "../../../styled/styled-qr-selector.ts";
import { useQrContext } from "../../../contexts/QrContext.tsx";

const QrTypeSelector: React.FC = () => {
  const { dataType, setDataType } = useQrContext();

  return (
    <TabContainer>
      <Tab
        active={dataType === QrDataType.CLEAR_TEXT}
        onClick={() => setDataType(QrDataType.CLEAR_TEXT)}
        type="button"
      >
        {QrDataType.CLEAR_TEXT}
      </Tab>
      <Tab
        active={dataType === QrDataType.WIFI}
        onClick={() => setDataType(QrDataType.WIFI)}
        type="button"
      >
        {QrDataType.WIFI}
      </Tab>
      <Tab
        active={dataType === QrDataType.CONTACT}
        onClick={() => setDataType(QrDataType.CONTACT)}
        type="button"
      >
        {QrDataType.CONTACT}
      </Tab>
    </TabContainer>
  );
};

export default QrTypeSelector;
