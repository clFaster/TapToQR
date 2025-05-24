import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  QrDataType,
  WifiData,
  ContactData,
  formatQrContent,
} from "../utils/qr-data-formatters";
import {
  copyQrCodeToClipboard,
  downloadQrCodeAsPng,
  generateSvgContent,
} from "../utils/qr-code-gen";
import { loadExtensionSettings } from "../utils/browser-storage";
import { openExtensionSettingsPage } from "../utils/browser-runtime";

interface QrContextType {
  // State
  dataType: QrDataType;
  textContent: string;
  wifiData: WifiData;
  contactData: ContactData;
  qrCodeSvg: string;

  // State updaters
  setDataType: (type: QrDataType) => void;
  setTextContent: (text: string) => void;
  updateWifiData: (field: keyof WifiData, value: string) => void;
  updateContactData: (field: keyof ContactData, value: string) => void;

  // Actions
  copyToClipboard: () => Promise<void>;
  downloadQrCode: () => Promise<void>;
  openExtensionSettings: () => Promise<void>;
  getFormattedContent: () => string;
}

const QrContext = createContext<QrContextType | null>(null);

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
    organization: "",
    title: "",
    website: "",
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
      default:
        return textContent || defaultMessage;
    }
  }, [dataType, textContent, wifiData, contactData]);

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

  // Generate QR code SVG when relevant data changes
  useEffect(() => {
    let isMounted = true;

    const generateQrCode = async () => {
      try {
        const extensionSettings = await loadExtensionSettings();
        const qrContent = getFormattedContent();
        const svg = await generateSvgContent(
          qrContent,
          400,
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
    qrCodeSvg,

    // State updaters
    setDataType,
    setTextContent,
    updateWifiData,
    updateContactData,

    // Actions
    copyToClipboard,
    downloadQrCode,
    openExtensionSettings,
    getFormattedContent,
  };

  return <QrContext.Provider value={value}>{children}</QrContext.Provider>;
};

export const useQrContext = (): QrContextType => {
  const context = useContext(QrContext);
  if (!context) {
    throw new Error("useQrContext must be used within a QrProvider");
  }
  return context;
};
