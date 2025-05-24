import React from "react";
import { QrDataType } from "../../../utils/qr-data-formatters.ts";
import { TabContainer, Tab } from "../../../styled/styled-qr-selector.ts";
import { useQrContext } from "../../../contexts/QrContext.tsx";

const QrTypeSelector: React.FC = () => {
  const { dataType, setDataType } = useQrContext();

  return (
    <TabContainer>
      <Tab
        active={dataType === QrDataType.TEXT}
        onClick={() => setDataType(QrDataType.TEXT)}
        type="button"
      >
        {QrDataType.TEXT}
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
      <Tab
        active={dataType === QrDataType.EMAIL}
        onClick={() => setDataType(QrDataType.EMAIL)}
        type="button"
      >
        {QrDataType.EMAIL}
      </Tab>
      <Tab
        active={dataType === QrDataType.TELEPHONE}
        onClick={() => setDataType(QrDataType.TELEPHONE)}
        type="button"
      >
        {QrDataType.TELEPHONE}
      </Tab>
      <Tab
        active={dataType === QrDataType.MAPS}
        onClick={() => setDataType(QrDataType.MAPS)}
        type="button"
      >
        {QrDataType.MAPS}
      </Tab>
      <Tab
        active={dataType === QrDataType.CALENDAR}
        onClick={() => setDataType(QrDataType.CALENDAR)}
        type="button"
      >
        {QrDataType.CALENDAR}
      </Tab>
    </TabContainer>
  );
};

export default QrTypeSelector;
