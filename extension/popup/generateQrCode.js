const QRCode = require("qrcode");

/**
 * Adds an icon SVG to a QR code SVG and returns the combined SVG as a string.
 *
 * @param {string} qrCodeSvg - The SVG representation of the QR code.
 * @param {string} iconSvg - The SVG representation of the icon to overlay.
 * @param {number} qrCodeSize - The size of the QR code in pixels.
 * @returns {string} The combined SVG as a string.
 */
function addIconToQrCodeSvg(qrCodeSvg, iconSvg, qrCodeSize) {
    const iconSize = qrCodeSize * 0.25;
    const rectMargin = iconSize * 0.10;
    const scaledIconSize = iconSize / 150; // Reduced the scale factor directly in calculation
    const rectCornerRadius = rectMargin / 2;
    const position = qrCodeSize / 2 - iconSize / 2; // Shared position calculation for rectangle and icon

    return `
        <svg width="${qrCodeSize}" height="${qrCodeSize}" xmlns="http://www.w3.org/2000/svg">
            <g>${qrCodeSvg}</g>
            <g>
                <rect 
                    x="${position - rectMargin}" 
                    y="${position - rectMargin}" 
                    width="${iconSize + rectMargin * 2}" 
                    height="${iconSize + rectMargin * 2}" 
                    fill="white" 
                    rx="${rectCornerRadius}" 
                    ry="${rectCornerRadius}"
                />
            </g>
            <g transform="translate(${position} ${position}) scale(${scaledIconSize})">
                ${iconSvg}
            </g>
        </svg>
    `;
}

window.addIconToQrCodeSvg = addIconToQrCodeSvg;

/**
 * Generates a QR code in SVG format.
 *
 * @param {string} url - The URL to encode in the QR code.
 * @param {number} qrCodeSize - The size of the QR code in pixels.
 * @returns {Promise<string>} A promise that resolves to the SVG string of the generated QR code.
 * @throws {Error} If there is an error generating the QR code.
 */
async function getQrCodeSvg(url, qrCodeSize) {
    try {
        return await QRCode.toString(url, {
            width: qrCodeSize,
            margin: 2,
            errorCorrectionLevel: 'H',
        });
    } catch (error) {
        console.error("Error generating QR code:", error);
        throw error;
    }
}

window.getQrCodeSvg = getQrCodeSvg;
