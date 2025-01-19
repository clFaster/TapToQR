import {
    CustomQrContainer,
    CustomQrPageContainer,
    InputContainer,
    QrCodeContainer
} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import {Button, ButtonContainer} from "../../styled/styled-button.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faGear} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {loadExtensionSettings} from "../../utils/browser-storage.ts";
import {getActiveTab} from "../../utils/browser-tabs.ts";
import {copyQrCodeToClipboard, downloadQrCodeAsPng, generateSvgContent} from "../../utils/qr-code-gen.ts";
import {openExtensionSettingsPage} from "../../utils/browser-runtime.ts";
import {useEffect, useState} from "react";

const CustomQr = () => {
    const PLACEHOLDER = "Set your QR code content here";

    const [qrCodeContent, setQrCodeContent] = useState(PLACEHOLDER);
    const [qrCodeSvg, setQrCodeSvg] = useState("");


    const copyToClipboard = async () => {
        const extensionSettings = await loadExtensionSettings();
        const currentUrl = await getActiveTab() || "hallo";
        const svg = await generateSvgContent(currentUrl, extensionSettings.qrCodeDownloadSize, extensionSettings.displayLogo);
        copyQrCodeToClipboard(svg, extensionSettings.qrCodeDownloadSize).then();
    }

    const downloadQrCode = async () => {
        const extensionSettings = await loadExtensionSettings();
        const currentUrl = await getActiveTab() || "hallo";
        const svg = await generateSvgContent(currentUrl, extensionSettings.qrCodeDownloadSize, extensionSettings.displayLogo);
        downloadQrCodeAsPng(svg, extensionSettings.qrCodeDownloadSize).then();
    }

    const openExtensionSettings = () => {
        openExtensionSettingsPage().then();
    }

    useEffect(() => {
        loadExtensionSettings().then(extensionSettings => {
            let content = qrCodeContent;
            if(content === ""){
                content = PLACEHOLDER;
            }
            generateSvgContent(content, 300, extensionSettings.displayLogo).then(x => {
                setQrCodeSvg(x);
            });
            }
        )
    }, [qrCodeContent]);

    return (
        <CustomQrPageContainer>
            <TapToQrHeader title="TapToQR | Create"/>

            <CustomQrContainer>
                <form>
                    <InputContainer>
                        <input
                            type="text"
                            id="qrCodeSize"
                            min="220"
                            max="400"
                            step="10"
                            value={qrCodeContent}
                            onChange={(x) => setQrCodeContent(x.target.value)}
                            aria-labelledby="qrCodeSizeValue"
                        />
                    </InputContainer>

                </form>
                <QrCodeContainer dangerouslySetInnerHTML={{__html: qrCodeSvg}}/>

                <ButtonContainer>
                    <Button id="download-btn" title="Download as PNG" onClick={downloadQrCode}>
                        <FontAwesomeIcon icon={faDownload} size={"2x"}/>
                    </Button>
                    <Button id="copy-btn" title="Copy to Clipboard" onClick={copyToClipboard}>
                        <FontAwesomeIcon icon={faCopy} size={"2x"}/>
                    </Button>
                    <Button id="setting-btn" title="Open TapToQR Settings" onClick={openExtensionSettings}>
                        <FontAwesomeIcon icon={faGear} size={"2x"}/>
                    </Button>
                </ButtonContainer>

            </CustomQrContainer>

        </CustomQrPageContainer>
    );
}

export default CustomQr;
