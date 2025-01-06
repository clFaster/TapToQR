const SVG_ICON_PATH = "img/ic_TapToQR.svg";
const CUSTOM_QR_WINDOW_PATH = "custom-qr-window/custom-qr-window.html";
const DEFAULT_PNG_SIZE = 500;
const DEFAULT_SVG_SIZE = 230;
const DEFAULT_LOGO = true;

/**
 * Loads the TapToQR SVG icon.
 *
 * @returns {Promise<string>} - A promise that resolves to the SVG content as a string.
 */
async function loadTapToQrSvgIcon() {
    const path = browser.runtime.getURL(SVG_ICON_PATH);
    console.log("Path:", path);
    try {
        const response = await fetch(path);
        return await response.text();
    } catch (error) {
        console.error('Error loading SVG icon:', error);
        return '';
    }
}

/**
 * Converts the provided SVG data to a PNG data URL using a canvas.
 *
 * @param {string} svgData - The serialized SVG string to convert to PNG.
 * @returns {Promise<string>} A promise that resolves to the PNG data URL.
 */
async function convertSvgToPng(svgData) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const result = await Promise.all([
        browser.storage.local.get("qrCodeDownloadSize")
    ]);

    const qrCodeDownloadSize = result[0].qrCodeDownloadSize ?? DEFAULT_PNG_SIZE
    console.log("QR-Code-Download-Size:", qrCodeDownloadSize);

    canvas.width = qrCodeDownloadSize;
    canvas.height = qrCodeDownloadSize;

    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

    return new Promise((resolve) => {
        img.onload = function() {
            context.drawImage(img, 0, 0);
            const pngUrl = canvas.toDataURL("image/png");
            resolve(pngUrl);
        };
    });
}


function openSettingPage() {
    browser.runtime.openOptionsPage().then(() => {
        if (window.location.protocol === "moz-extension:" || window.location.protocol === "chrome-extension:") {
            window.close();
        }
    }).catch(error => {
        console.error("Failed to open settings page:", error);
    });
}

function openCustomQrWindow() {
    browser.windows.create({
        url: browser.runtime.getURL(CUSTOM_QR_WINDOW_PATH),
        type: "popup",
        width: 400,
        height: 600
    });
}

/**
 * Retrieves the SVG data of the QR code, serializes it, and scales it
 * to the default PNG size for consistent output.
 *
 * @param {HTMLElement} qrCodeDiv - The div containing the SVG QR code.
 *
 * @async
 * @returns {Promise<string | null>} A promise that resolves to the serialized SVG string,
 *                                    or null if the SVG element is not found.
 */
async function getSvgData(qrCodeDiv) {
    const svgElement = qrCodeDiv.querySelector("svg");
    if (!svgElement) {
        console.error("SVG QR code not found!");
        return null;
    }

    const result = await Promise.all([
        browser.storage.local.get("qrCodeSize"),
        browser.storage.local.get("qrCodeDownloadSize")
    ]);

    const qrCodeSize = result[0].qrCodeSize !== undefined ? result[0].qrCodeSize : DEFAULT_SVG_SIZE;
    const qrCodeDownloadSize = result[1].qrCodeDownloadSize !== undefined ? result[1].qrCodeDownloadSize : DEFAULT_PNG_SIZE;

    let svgData = new XMLSerializer().serializeToString(svgElement);
    svgData = `
        <svg width="${qrCodeDownloadSize}" height="${qrCodeDownloadSize}" xmlns="http://www.w3.org/2000/svg">
            <g transform="scale(${qrCodeDownloadSize / qrCodeSize})">${svgData}</g>
        </svg>
    `;
    return svgData;
}

/**
 * Asynchronously generates a PNG image from an SVG QR code element and triggers a download.
 *
 * @param {HTMLElement} qrCodeDiv - The div containing the SVG QR code.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when the download link is triggered.
 */
async function downloadQrCodeAsPng(qrCodeDiv) {
    const svgData = await getSvgData(qrCodeDiv);
    const pngUrl = await convertSvgToPng(svgData);

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
}

/**
 * Copies the generated QR code as a PNG image to the clipboard.
 * The PNG is created from the SVG element found within the document.
 *
 * @param {HTMLElement} qrCodeDiv - The div containing the SVG QR code.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when the QR code is copied to the clipboard.
 */
async function copyQrCodeToClipboard(qrCodeDiv) {
    const svgData = await getSvgData(qrCodeDiv);
    const pngUrl = await convertSvgToPng(svgData);

    const response = await fetch(pngUrl);
    const blob = await response.blob();
    const item = new ClipboardItem({ 'image/png': blob });

    await navigator.clipboard.write([item]);
}

async function generateQrCodeSvg(url) {
    const result = await Promise.all([
        browser.storage.local.get("qrCodeSize"),
        browser.storage.local.get("displayLogo")
    ]);
    const qrCodeSize = result[0].qrCodeSize !== undefined ? result[0].qrCodeSize : DEFAULT_SVG_SIZE;
    const displayLogo = result[1].displayLogo !== undefined ? result[1].displayLogo : DEFAULT_LOGO;
    let qrCodeSvg = await getQrCodeSvg(url, qrCodeSize);
    if (displayLogo) {
        const svgIcon = await loadTapToQrSvgIcon();
        qrCodeSvg = addIconToQrCodeSvg(qrCodeSvg, svgIcon, qrCodeSize);
    }
    return qrCodeSvg;
}

export { openSettingPage, openCustomQrWindow, downloadQrCodeAsPng, copyQrCodeToClipboard, generateQrCodeSvg };
