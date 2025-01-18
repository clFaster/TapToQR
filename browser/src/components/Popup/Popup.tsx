import {useEffect, useState} from "react";
import {loadExtensionSettings} from "../../utils/browser-storage.ts";
import {PopupContainer, QrCodeContainer} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import {Button, ButtonContainer} from "../../styled/styled-button.ts";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faDownload, faGear} from "@fortawesome/free-solid-svg-icons";
import {getActiveTab} from "../../utils/browser-tabs.ts";
import {generateSvgContent} from "../../utils/qr-code-gen.ts";

const Popup = () => {

    const [qrCodeSvg, setQrCodeSvg] = useState("");

    const generateQrContent = async () => {
        let extensionSettings = await loadExtensionSettings();
        let currentUrl = await getActiveTab() || "hallo";
        let svg = await generateSvgContent(currentUrl, extensionSettings.qrCodeSize, extensionSettings.displayLogo);
        setQrCodeSvg(svg);
    }

    useEffect(() => {
        generateQrContent().then();
    }, []);

    const copyToClipboard = async () => {

    }

    return(
        <PopupContainer>
            <TapToQrHeader title={"TapToQR"} hideIcon={true} />
            <QrCodeContainer dangerouslySetInnerHTML={{__html: qrCodeSvg}}/>
            <ButtonContainer>
                <Button id="download-btn" title="Download as PNG">
                    <FontAwesomeIcon icon={faDownload} size={"2x"}/>
                </Button>
                <Button id="copy-btn" title="Copy to Clipboard">
                    <FontAwesomeIcon icon={faCopy} size={"2x"} onClick={copyToClipboard}/>
                </Button>
                <Button id="additional-window-btn" title="Create custom QR Code">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"2x"}/>
                </Button>
                <Button id="setting-btn"  title="Open TapToQR Settings">
                    <FontAwesomeIcon icon={faGear} size={"2x"}/>
                </Button>
            </ButtonContainer>
        </PopupContainer>
    )
};

export default Popup;
