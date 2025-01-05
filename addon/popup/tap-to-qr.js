import {
    copyQrCodeToClipboard,
    downloadQrCodeAsPng,
    generateQrCodeSvg,
    openCustomQrWindow,
    openSettingPage
} from "../libs/shared.js";

const qrCodeDiv = document.getElementById('qr-code');
const downloadBtn = document.getElementById('download-btn');
const copyBtn = document.getElementById('copy-btn');
const additionalWindowBtn = document.getElementById('additional-window-btn');
const settingBtn = document.getElementById('setting-btn');

/**
 * Initializes event listeners for buttons
 */
function initializeEventListeners() {
    downloadBtn.addEventListener("click", () => downloadQrCodeAsPng(qrCodeDiv));
    copyBtn.addEventListener("click", () => copyQrCodeToClipboard(qrCodeDiv));
    additionalWindowBtn.addEventListener("click", openCustomQrWindow);
    settingBtn.addEventListener("click", openSettingPage);
}

/**
 * Generates and renders the QR code based on the current tab's URL
 */
function renderQrCode() {
    browser.tabs.query({active: true, currentWindow: true}).then(async tabs => {
        const url = tabs[0].url;
        let qrCodeSvg = await generateQrCodeSvg(url);

        qrCodeDiv.innerHTML = '';
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(qrCodeSvg, "image/svg+xml");
        const svgElement = svgDoc.documentElement;

        qrCodeDiv.appendChild(svgElement);
    });
}

initializeEventListeners();
renderQrCode();
