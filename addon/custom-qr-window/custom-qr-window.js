import {
    copyQrCodeToClipboard,
    downloadQrCodeAsPng,
    generateQrCodeSvg
} from "../libs/shared.js";

const PLACEHOLDER = "TapToQR - sharing seamless and quick!";

const qrCodeDiv = document.getElementById('qr-code');
const downloadBtn = document.getElementById('download-btn');
const copyBtn = document.getElementById('copy-btn');
const qrInput = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');

/**
 * Initializes event listeners for buttons
 */
function initializeEventListeners() {
    downloadBtn.addEventListener("click", () => downloadQrCodeAsPng(qrCodeDiv));
    qrInput.addEventListener("input", (event) => {
        const inputText = qrInput.value.trim() || PLACEHOLDER;
        renderQrCode(inputText).then();
    });
    copyBtn.addEventListener("click", () => copyQrCodeToClipboard(qrCodeDiv));
}

/**
 * Generates and renders the QR code based on the current tab's URL
 */
async function renderQrCode(content) {
    let qrCodeSvg = await generateQrCodeSvg(content);
    qrCodeDiv.innerHTML = '';
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(qrCodeSvg, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    qrCodeDiv.appendChild(svgElement);
}

initializeEventListeners();
renderQrCode(PLACEHOLDER).then();
