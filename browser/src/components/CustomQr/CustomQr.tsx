import {
  CustomQrContainer,
  CustomQrPageContainer,
  CustomQrCodeContainer,
  QrSideContainer,
  FormSideContainer,
  FormContainer,
  FormSection,
} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import { Button, ButtonContainer } from "../../styled/styled-button.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGear } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { loadExtensionSettings } from "../../utils/browser-storage.ts";
import {
  copyQrCodeToClipboard,
  downloadQrCodeAsPng,
  generateSvgContent,
} from "../../utils/qr-code-gen.ts";
import { openExtensionSettingsPage } from "../../utils/browser-runtime.ts";
import { useEffect, useState, useCallback } from "react";
import {
  QrDataType,
  WifiData,
  ContactData,
  formatQrContent,
} from "../../utils/qr-data-formatters.ts";
import QrTypeSelector from "./QrTypes/QrTypeSelector.tsx";
import TextQrForm from "./QrTypes/TextQrForm.tsx";
import WifiQrForm from "./QrTypes/WifiQrForm.tsx";
import ContactQrForm from "./QrTypes/ContactQrForm.tsx";

const CustomQr = () => {
  const TEXT_PLACEHOLDER = "Set your QR code content here";
  const WIFI_PLACEHOLDER = {
    ssid: "Network Name",
    password: "Password",
    securityType: "WPA" as const,
  };
  const CONTACT_PLACEHOLDER = {
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    organization: "",
    title: "",
    website: "",
  };

  // Initialize the state with a default value
  const [dataType, setDataType] = useState<QrDataType>(QrDataType.CLEAR_TEXT);
  const [textContent, setTextContent] = useState(TEXT_PLACEHOLDER);
  const [wifiData, setWifiData] = useState<WifiData>(WIFI_PLACEHOLDER);
  const [contactData, setContactData] =
    useState<ContactData>(CONTACT_PLACEHOLDER);
  const [qrCodeSvg, setQrCodeSvg] = useState("");

  const getFormattedContent = useCallback(() => {
    switch (dataType) {
      case QrDataType.CLEAR_TEXT:
        return textContent || TEXT_PLACEHOLDER;
      case QrDataType.WIFI:
        return formatQrContent(QrDataType.WIFI, wifiData);
      case QrDataType.CONTACT:
        return formatQrContent(QrDataType.CONTACT, contactData);
      default:
        return textContent;
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
    copyQrCodeToClipboard(svg, extensionSettings.qrCodeDownloadSize).then();
  };

  const downloadQrCode = async () => {
    const extensionSettings = await loadExtensionSettings();
    const qrContent = getFormattedContent();
    const svg = await generateSvgContent(
      qrContent,
      extensionSettings.qrCodeDownloadSize,
      extensionSettings.displayLogo,
    );
    downloadQrCodeAsPng(svg, extensionSettings.qrCodeDownloadSize).then();
  };

  const openExtensionSettings = () => {
    openExtensionSettingsPage().then();
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
          extensionSettings.displayLogo
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

  const renderQrForm = () => {
    switch (dataType) {
      case QrDataType.CLEAR_TEXT:
        return (
          <TextQrForm
            textContent={textContent}
            setTextContent={setTextContent}
            placeholder={TEXT_PLACEHOLDER}
          />
        );

      case QrDataType.WIFI:
        return (
          <WifiQrForm wifiData={wifiData} updateWifiData={updateWifiData} />
        );

      case QrDataType.CONTACT:
        return (
          <ContactQrForm
            contactData={contactData}
            updateContactData={updateContactData}
          />
        );

      default:
        return null;
    }
  };
  return (
    <CustomQrPageContainer>
      <TapToQrHeader title="TapToQR | Create" />

      <CustomQrContainer>
        <FormSideContainer>
          <FormContainer>
            <QrTypeSelector dataType={dataType} setDataType={setDataType} />

            <FormSection>{renderQrForm()}</FormSection>
          </FormContainer>
        </FormSideContainer>
        <QrSideContainer>
          <CustomQrCodeContainer
            dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
          />

          <ButtonContainer>
            <Button
              id="download-btn"
              title="Download as PNG"
              onClick={downloadQrCode}
            >
              <FontAwesomeIcon icon={faDownload} size={"2x"} />
            </Button>
            <Button
              id="copy-btn"
              title="Copy to Clipboard"
              onClick={copyToClipboard}
            >
              <FontAwesomeIcon icon={faCopy} size={"2x"} />
            </Button>
            <Button
              id="setting-btn"
              title="Open TapToQR Settings"
              onClick={openExtensionSettings}
            >
              <FontAwesomeIcon icon={faGear} size={"2x"} />
            </Button>
          </ButtonContainer>
        </QrSideContainer>
      </CustomQrContainer>
    </CustomQrPageContainer>
  );
};

export default CustomQr;
