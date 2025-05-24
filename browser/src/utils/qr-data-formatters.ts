// QR code data type definitions and formatters
export enum QrDataType {
  CLEAR_TEXT = "Clear Text",
  WIFI = "Wi-Fi",
  CONTACT = "Contact"
}

export interface WifiData {
  ssid: string;
  password: string;
  securityType: 'WPA' | 'WEP' | 'nopass';
}

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  organization?: string;
  title?: string;
  website?: string;
}

// Function to format Wi-Fi data according to the standard format
export const formatWifiData = (data: WifiData): string => {
  return `WIFI:T:${data.securityType};S:${data.ssid};P:${data.password};;`;
};

// Function to format contact data in vCard format
export const formatContactData = (data: ContactData): string => {
  let vCard = 'BEGIN:VCARD\nVERSION:3.0\n';
  
  // Add name
  vCard += `FN:${data.name}\n`;
  vCard += `N:${data.name};;;\n`;
  
  // Add contact details
  if (data.phone) vCard += `TEL:${data.phone}\n`;
  if (data.email) vCard += `EMAIL:${data.email}\n`;
  if (data.organization) vCard += `ORG:${data.organization}\n`;
  if (data.title) vCard += `TITLE:${data.title}\n`;
  if (data.website) vCard += `URL:${data.website}\n`;
  
  vCard += 'END:VCARD';
  
  return vCard;
};

// Function to format QR code content based on the selected data type
export const formatQrContent = (
  dataType: QrDataType, 
  data: string | WifiData | ContactData
): string => {
  switch (dataType) {
    case QrDataType.CLEAR_TEXT:
      return data as string;
    
    case QrDataType.WIFI:
      return formatWifiData(data as WifiData);
    
    case QrDataType.CONTACT:
      return formatContactData(data as ContactData);
    
    default:
      return data as string;
  }
};