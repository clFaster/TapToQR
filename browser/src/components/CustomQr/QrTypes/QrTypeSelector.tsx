import React from "react";
import { QrDataType } from "../../../utils/qr-data-formatters.ts";
import {
  TabContainer,
  Tab,
  TabIcon,
} from "../../../styled/styled-qr-selector.ts";
import { useQrContext } from "../../../hooks/useQrContext.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faWifi,
  faAddressCard,
  faEnvelope,
  faPhone,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const typeIcons: Record<QrDataType, IconDefinition> = {
  [QrDataType.TEXT]: faAlignLeft,
  [QrDataType.WIFI]: faWifi,
  [QrDataType.CONTACT]: faAddressCard,
  [QrDataType.EMAIL]: faEnvelope,
  [QrDataType.TELEPHONE]: faPhone,
  [QrDataType.MAPS]: faLocationDot,
  [QrDataType.CALENDAR]: faCalendarDays,
};

const typeLabels: Record<QrDataType, string> = {
  [QrDataType.TEXT]: "Text",
  [QrDataType.WIFI]: "Wi-Fi",
  [QrDataType.CONTACT]: "Contact",
  [QrDataType.EMAIL]: "Email",
  [QrDataType.TELEPHONE]: "Phone",
  [QrDataType.MAPS]: "Maps",
  [QrDataType.CALENDAR]: "Calendar",
};

const allTypes = [
  QrDataType.TEXT,
  QrDataType.WIFI,
  QrDataType.CONTACT,
  QrDataType.EMAIL,
  QrDataType.TELEPHONE,
  QrDataType.MAPS,
  QrDataType.CALENDAR,
];

const QrTypeSelector: React.FC = () => {
  const { dataType, setDataType } = useQrContext();

  return (
    <TabContainer>
      {allTypes.map((type) => {
        const isActive = dataType === type;
        return (
          <Tab
            key={type}
            active={isActive}
            onClick={() => setDataType(type)}
            type="button"
          >
            <TabIcon active={isActive}>
              <FontAwesomeIcon icon={typeIcons[type]} />
            </TabIcon>
            {typeLabels[type]}
          </Tab>
        );
      })}
    </TabContainer>
  );
};

export default QrTypeSelector;
