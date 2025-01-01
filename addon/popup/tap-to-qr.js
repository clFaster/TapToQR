const DEFAULT_SVG_SIZE = 230;
const DEFAULT_PNG_SIZE = 500;
const DEFAULT_LOGO = true;
const SVG_ICON_PATH = "img/ic_TapToQR.svg";

const qrCodeContainer = document.getElementById('qr-code');

/**
 * Loads an SVG icon from the specified path.
 *
 * @param {string} path - The path to the SVG file.
 * @returns {Promise<string>} - A promise that resolves to the SVG content as a string.
 */
async function loadSvgIcon(path) {
    try {
        const response = await fetch(path);
        return await response.text();
    } catch (error) {
        console.error('Error loading SVG icon:', error);
        return '';
    }
}

/**
 * Asynchronously generates a PNG image from an SVG QR code element and triggers a download.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when the download link is triggered.
 */
async function downloadQrCodeAsPng() {
    const svgData = await getSvgData();
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
 * @async
 * @returns {Promise<void>} A promise that resolves when the QR code is copied to the clipboard.
 */
async function copyQrCodeToClipboard() {
    const svgData = await getSvgData();
    const pngUrl = await convertSvgToPng(svgData);

    const response = await fetch(pngUrl);
    const blob = await response.blob();
    const item = new ClipboardItem({ 'image/png': blob });

    await navigator.clipboard.write([item]);
}

/**
 * Retrieves the SVG data of the QR code, serializes it, and scales it
 * to the default PNG size for consistent output.
 *
 * @async
 * @returns {Promise<string | null>} A promise that resolves to the serialized SVG string,
 *                                    or null if the SVG element is not found.
 */
async function getSvgData() {
    const svgElement = document.getElementById("qr-code").querySelector("svg");
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

    const qrCodeDownloadSize = result[0].qrCodeDownloadSize !== undefined ? result[0].qrCodeDownloadSize : DEFAULT_PNG_SIZE;


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

document.getElementById("download-btn").addEventListener("click", downloadQrCodeAsPng);
document.getElementById("copy-btn").addEventListener("click", copyQrCodeToClipboard);
document.getElementById("additional-window-btn").addEventListener("click", openCustomQrWindow);
document.getElementById("setting-btn").addEventListener("click", openSettingPage);

function openSettingPage() {
    browser.runtime.openOptionsPage().then(() => {
        // Close the current window only if it's the popup
        if (window.location.protocol === "moz-extension:" || window.location.protocol === "chrome-extension:") {
            window.close();
        }
    }).catch(error => {
        console.error("Failed to open settings page:", error);
    });
}

function openCustomQrWindow() {
    browser.windows.create({
        url: "./../custom-qr-window/custom-qr-window.html",
        type: "popup",
        width: 400,
        height: 600
    });
}

browser.tabs.query({ active: true, currentWindow: true }).then(async tabs => {
    const url = tabs[0].url;
    const result = await Promise.all([
        browser.storage.local.get("qrCodeSize"),
        browser.storage.local.get("displayLogo")
    ]);
    const qrCodeSize = result[0].qrCodeSize !== undefined ? result[0].qrCodeSize : DEFAULT_SVG_SIZE;
    const displayLogo = result[1].displayLogo !== undefined ? result[1].displayLogo : DEFAULT_LOGO;

    let qrCodeSvg = await getQrCodeSvg(url, qrCodeSize);
    if (displayLogo) {
        const svgIcon = await loadSvgIcon(browser.runtime.getURL(SVG_ICON_PATH));
        qrCodeSvg = addIconToQrCodeSvg(qrCodeSvg, svgIcon, qrCodeSize);
    }
    qrCodeContainer.innerHTML = '';

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(qrCodeSvg, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    qrCodeContainer.appendChild(svgElement);
});
