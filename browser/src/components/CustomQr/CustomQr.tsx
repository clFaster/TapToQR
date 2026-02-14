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
import AuroraBackground from "../Shared/AuroraBackground/AuroraBackground.tsx";
import { Button, ButtonContainer } from "../../styled/styled-button.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGear } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { QrProvider } from "../../contexts/QrContext.tsx";
import { useQrContext } from "../../hooks/useQrContext.ts";
import { QrDataType } from "../../utils/qr-data-formatters.ts";
import QrTypeSelector from "./QrTypes/QrTypeSelector.tsx";
import TextQrForm from "./QrTypes/TextQrForm.tsx";
import WifiQrForm from "./QrTypes/WifiQrForm.tsx";
import ContactQrForm from "./QrTypes/ContactQrForm.tsx";
import EmailQrForm from "./QrTypes/EmailQrForm.tsx";
import TelephoneQrForm from "./QrTypes/TelephoneQrForm.tsx";
import MapsQrForm from "./QrTypes/MapsQrForm.tsx";
import CalendarQrForm from "./QrTypes/CalendarQrForm.tsx";

// Component that uses the QR context
const QrContent = () => {
  const {
    dataType,
    qrCodeSvg,
    copyToClipboard,
    downloadQrCode,
    openExtensionSettings,
  } = useQrContext();

  const renderQrForm = () => {
    switch (dataType) {
      case QrDataType.TEXT:
        return <TextQrForm />;
      case QrDataType.WIFI:
        return <WifiQrForm />;
      case QrDataType.CONTACT:
        return <ContactQrForm />;
      case QrDataType.EMAIL:
        return <EmailQrForm />;
      case QrDataType.TELEPHONE:
        return <TelephoneQrForm />;
      case QrDataType.MAPS:
        return <MapsQrForm />;
      case QrDataType.CALENDAR:
        return <CalendarQrForm />;
      default:
        return null;
    }
  };

  return (
    <CustomQrPageContainer>
      <AuroraBackground />
      <TapToQrHeader title="TapToQR | Create" />

      <CustomQrContainer>
        <FormSideContainer>
          <FormContainer>
            <QrTypeSelector />
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

const CustomQr = () => {
  return (
    <QrProvider>
      <QrContent />
    </QrProvider>
  );
};

export default CustomQr;
