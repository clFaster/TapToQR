import { createContext } from "react";
import {
  QrDataType,
  WifiData,
  ContactData,
  EmailData,
  TelephoneData,
  MapsData,
  CalendarData,
} from "../utils/qr-data-formatters";

export interface QrContextType {
  // State
  dataType: QrDataType;
  textContent: string;
  wifiData: WifiData;
  contactData: ContactData;
  emailData: EmailData;
  telephoneData: TelephoneData;
  mapsData: MapsData;
  calendarData: CalendarData;
  qrCodeSvg: string;

  // State updaters
  setDataType: (type: QrDataType) => void;
  setTextContent: (text: string) => void;
  updateWifiData: (field: keyof WifiData, value: string) => void;
  updateContactData: (field: keyof ContactData, value: string) => void;
  updateEmailData: (field: keyof EmailData, value: string) => void;
  updateTelephoneData: (field: keyof TelephoneData, value: string) => void;
  updateMapsData: (field: keyof MapsData, value: string) => void;
  updateCalendarData: (
    field: keyof CalendarData,
    value: string | boolean,
  ) => void;

  // Actions
  copyToClipboard: () => Promise<void>;
  downloadQrCode: () => Promise<void>;
  openExtensionSettings: () => Promise<void>;
  getFormattedContent: () => string;
}

export const QrContext = createContext<QrContextType | null>(null);
