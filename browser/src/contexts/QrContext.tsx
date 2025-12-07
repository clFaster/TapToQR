import React, {
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { QrContext, QrContextType } from "./QrContextDefinition";
import {
  QrDataType,
  WifiData,
  ContactData,
  EmailData,
  TelephoneData,
  MapsData,
  CalendarData,
  formatQrContent,
} from "../utils/qr-data-formatters";
import {
  copyQrCodeToClipboard,
  downloadQrCodeAsPng,
  generateSvgContent,
} from "../utils/qr-code-gen";
import { loadExtensionSettings } from "../utils/browser-storage";
import { openExtensionSettingsPage } from "../utils/browser-runtime";



export const QrProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dataType, setDataType] = useState<QrDataType>(QrDataType.TEXT);
  const [textContent, setTextContent] = useState("");
  const [wifiData, setWifiData] = useState<WifiData>({
    ssid: "",
    password: "",
    securityType: "WPA" as const,
  });
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    phone: "",
    email: "",
    website: "",
    nickname: "",
  });

  const [emailData, setEmailData] = useState<EmailData>({
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  });

  const [telephoneData, setTelephoneData] = useState<TelephoneData>({
    number: "",
    type: "tel",
  });

  const [mapsData, setMapsData] = useState<MapsData>({
    latitude: "",
    longitude: "",
    query: "",
  });

  const [calendarData, setCalendarData] = useState<CalendarData>({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    allDay: false,
  });
  const [qrCodeSvg, setQrCodeSvg] = useState("");
  const getFormattedContent = useCallback(() => {
    const defaultMessage = "Please enter some data";

    switch (dataType) {
      case QrDataType.TEXT:
        return textContent || defaultMessage;
      case QrDataType.WIFI:
        // Only format if at least one field has content
        if (wifiData.ssid || wifiData.password) {
          return formatQrContent(QrDataType.WIFI, wifiData);
        }
        return defaultMessage;
      case QrDataType.CONTACT:
        // Only format if at least name, phone, or email has content
        if (contactData.name || contactData.phone || contactData.email) {
          return formatQrContent(QrDataType.CONTACT, contactData);
        }
        return defaultMessage;
      case QrDataType.EMAIL:
        // Only format if at least the email address is present
        if (emailData.to) {
          return formatQrContent(QrDataType.EMAIL, emailData);
        }
        return defaultMessage;
      case QrDataType.TELEPHONE:
        // Only format if phone number is present
        if (telephoneData.number) {
          return formatQrContent(QrDataType.TELEPHONE, telephoneData);
        }
        return defaultMessage;
      case QrDataType.MAPS:
        // Only format if coordinates or query is present
        if ((mapsData.latitude && mapsData.longitude) || mapsData.query) {
          return formatQrContent(QrDataType.MAPS, mapsData);
        }
        return defaultMessage;
      case QrDataType.CALENDAR:
        // Only format if required fields are present
        if (
          calendarData.title &&
          calendarData.startDate &&
          calendarData.endDate
        ) {
          return formatQrContent(QrDataType.CALENDAR, calendarData);
        }
        return defaultMessage;
      default:
        return textContent || defaultMessage;
    }
  }, [
    dataType,
    textContent,
    wifiData,
    contactData,
    emailData,
    telephoneData,
    mapsData,
    calendarData,
  ]);

  const copyToClipboard = async () => {
    const extensionSettings = await loadExtensionSettings();
    const qrContent = getFormattedContent();
    const svg = await generateSvgContent(
      qrContent,
      extensionSettings.qrCodeDownloadSize,
      extensionSettings.displayLogo,
    );
    await copyQrCodeToClipboard(svg, extensionSettings.qrCodeDownloadSize);
  };

  const downloadQrCode = async () => {
    const extensionSettings = await loadExtensionSettings();
    const qrContent = getFormattedContent();
    const svg = await generateSvgContent(
      qrContent,
      extensionSettings.qrCodeDownloadSize,
      extensionSettings.displayLogo,
    );
    await downloadQrCodeAsPng(svg, extensionSettings.qrCodeDownloadSize);
  };

  const openExtensionSettings = async () => {
    await openExtensionSettingsPage();
  };

  const updateWifiData = (field: keyof WifiData, value: string) => {
    setWifiData((prev) => ({
      ...prev,
      [field]:
        field === "securityType" ? (value as "WPA" | "WEP" | "nopass") : value,
    }));
  };

  const updateContactData = (field: keyof ContactData, value: string) => {
    setContactData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateEmailData = (field: keyof EmailData, value: string) => {
    setEmailData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateTelephoneData = (field: keyof TelephoneData, value: string) => {
    setTelephoneData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateMapsData = (field: keyof MapsData, value: string) => {
    setMapsData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateCalendarData = (
    field: keyof CalendarData,
    value: string | boolean,
  ) => {
    setCalendarData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Generate QR code SVG when relevant data changes
  useEffect(() => {
    let isMounted = true;

    const generateQrCode = async () => {
      try {
        const extensionSettings = await loadExtensionSettings();
        const qrContent = getFormattedContent();
        const svg = await generateSvgContent(
          qrContent,
          320,
          extensionSettings.displayLogo,
        );

        if (isMounted) {
          setQrCodeSvg(svg);
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQrCode();

    return () => {
      isMounted = false;
    };
  }, [getFormattedContent]);

  const value: QrContextType = {
    // State
    dataType,
    textContent,
    wifiData,
    contactData,
    emailData,
    telephoneData,
    mapsData,
    calendarData,
    qrCodeSvg,

    // State updaters
    setDataType,
    setTextContent,
    updateWifiData,
    updateContactData,
    updateEmailData,
    updateTelephoneData,
    updateMapsData,
    updateCalendarData,

    // Actions
    copyToClipboard,
    downloadQrCode,
    openExtensionSettings,
    getFormattedContent,
  };

  return <QrContext.Provider value={value}>{children}</QrContext.Provider>;
};


