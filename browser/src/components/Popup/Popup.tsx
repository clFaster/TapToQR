import { useEffect, useState } from "react";
import {
  ExtensionSettings,
  loadExtensionSettings,
} from "../../utils/browser-storage.ts";
import { PopupContainer, QrCodeContainer } from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import { Button, ButtonContainer } from "../../styled/styled-button.ts";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDownload,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { getActiveTab } from "../../utils/browser-tabs.ts";
import {
  copyQrCodeToClipboard,
  downloadQrCodeAsPng,
  generateSvgContent,
} from "../../utils/qr-code-gen.ts";
import {
  openCustomQrPage,
  openExtensionSettingsPage,
} from "../../utils/browser-runtime.ts";

const Popup = () => {
  const [qrCodeSvg, setQrCodeSvg] = useState("");

  const generateQrContent = async (extensionSettings: ExtensionSettings) => {
    const currentUrl = await getActiveTab();
    const svg = await generateSvgContent(
      currentUrl,
      extensionSettings.qrCodeSize,
      extensionSettings.displayLogo,
    );
    setQrCodeSvg(svg);
  };

  useEffect(() => {
    loadExtensionSettings().then((extensionSettings) => {
      generateQrContent(extensionSettings).then(() => {
        const newWidth = extensionSettings.qrCodeSize + 10;
        const popupContainer = document.getElementById("popup-container");
        popupContainer?.setAttribute("style", `width: ${newWidth}px`);
      });
    });
  }, []);

  const generateQrSvg = async (size: number) => {
    const extensionSettings = await loadExtensionSettings();
    const currentUrl = await getActiveTab();
    return generateSvgContent(currentUrl, size, extensionSettings.displayLogo);
  };

  const copyToClipboard = async () => {
    const extensionSettings = await loadExtensionSettings();
    const svg = await generateQrSvg(extensionSettings.qrCodeDownloadSize);
    await copyQrCodeToClipboard(svg, extensionSettings.qrCodeDownloadSize);
  };

  const downloadQrCode = async () => {
    const extensionSettings = await loadExtensionSettings();
    const svg = await generateQrSvg(extensionSettings.qrCodeDownloadSize);
    await downloadQrCodeAsPng(svg, extensionSettings.qrCodeDownloadSize);
  };

  const openCustomQrCodeWindow = () => {
    openCustomQrPage();
  };

  const openExtensionSettings = async () => {
    await openExtensionSettingsPage();
  };

  return (
    <PopupContainer id={"popup-container"}>
      <TapToQrHeader title={"TapToQR"} hideIcon={true} />
      <QrCodeContainer dangerouslySetInnerHTML={{ __html: qrCodeSvg }} />
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
          id="additional-window-btn"
          title="Create custom QR Code"
          onClick={openCustomQrCodeWindow}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"2x"} />
        </Button>
        <Button
          id="setting-btn"
          title="Open TapToQR Settings"
          onClick={openExtensionSettings}
        >
          <FontAwesomeIcon icon={faGear} size={"2x"} />
        </Button>
      </ButtonContainer>
    </PopupContainer>
  );
};

export default Popup;
