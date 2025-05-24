export enum QrDataType {
  TEXT = "Text",
  WIFI = "Wi-Fi",
  CONTACT = "Contact",
}

export interface WifiData {
  ssid: string;
  password: string;
  securityType: "WPA" | "WEP" | "nopass";
}

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  website?: string;
  nickname?: string;
}

export const formatWifiData = (data: WifiData): string => {
  return `WIFI:T:${data.securityType};S:${data.ssid};P:${data.password};;`;
};

export const formatContactData = (data: ContactData): string => {
  let meCard = "MECARD:";

  meCard += `N:${data.name};`;

  if (data.phone) meCard += `TEL:${data.phone};`;
  if (data.email) meCard += `EMAIL:${data.email};`;
  if (data.website) meCard += `URL:${data.website};`;
  if (data.nickname) meCard += `NICKNAME:${data.nickname};`;

  meCard += ";";

  return meCard;
};

export const formatQrContent = (
  dataType: QrDataType,
  data: string | WifiData | ContactData,
): string => {
  switch (dataType) {
    case QrDataType.TEXT:
      return data as string;

    case QrDataType.WIFI:
      return formatWifiData(data as WifiData);

    case QrDataType.CONTACT:
      return formatContactData(data as ContactData);

    default:
      return data as string;
  }
};
