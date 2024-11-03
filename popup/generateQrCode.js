const QRCode = require("qrcode");

const DEFAULT_QR_SIZE = 150;

async function generateQRCodeWithIcon(url, iconSvg = null, qrCodeSize = DEFAULT_QR_SIZE) {
    try {
        const qrCodeSvg = await QRCode.toString(url, {
            width: qrCodeSize,
            margin: 2,
            errorCorrectionLevel: 'H',
        });

        // If iconSvg is not null, add the icon to the QR code
        if (iconSvg) {
            return combineSVG(qrCodeSvg, iconSvg, qrCodeSize);
        }

        return qrCodeSvg;
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error; // Ensure the error is thrown to be caught in the calling function
    }
}

function combineSVG(qrCodeSvg, iconSvg, qrCodeSize) {
    const iconSize = qrCodeSize * 0.25;
    const margin = iconSize * 0.21; // Adjust the margin size as needed
    const cornerRadius = margin / 2; // Radius for rounded corners

    return `
        <svg width="${qrCodeSize}" height="${qrCodeSize}" xmlns="http://www.w3.org/2000/svg">
            <g>${qrCodeSvg}</g>
            
            <g transform="translate(${(qrCodeSize - iconSize) / 2}, ${(qrCodeSize - iconSize) / 2})">
                <rect 
                    x="${-margin / 2}" 
                    y="${-margin / 2}" 
                    width="${iconSize + margin}" 
                    height="${iconSize + margin}" 
                    fill="white" 
                    rx="${cornerRadius}" 
                    ry="${cornerRadius}"
                />
                <g transform="scale(${iconSize / qrCodeSize})">
                    ${iconSvg}
                </g>
            </g>
        </svg>
    `;
}

async function setQRCodeWithIcon(url, iconPath = null, qrCodeSize = DEFAULT_QR_SIZE) {
    try {
        return await generateQRCodeWithIcon(url, iconPath, qrCodeSize);
    } catch (error) {
        console.error("Error generating QR code:", error);
        throw error;
    }
}

window.setQRCodeWithIcon = setQRCodeWithIcon;
