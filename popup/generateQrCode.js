import {Jimp} from "jimp";
const QRCode = require('qrcode');

const DEFAULT_QR_SIZE = 150;

async function generateQRCodeWithIcon(url, iconPath = null, qrCodeSize = DEFAULT_QR_SIZE) {
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(url, {
            width: qrCodeSize,
            margin: 2,
        });
        
        // Load the QR code image from the data URL
        const qrCodeImage = await Jimp.read(qrCodeDataUrl);

        if (iconPath) {
            // If iconPath is provided, load and add icon to the QR code
            const icon = await Jimp.read(iconPath);

            // Resize the icon relative to the QR code size
            const iconSize = Math.floor(qrCodeSize * 0.15); // Adjust as needed
            icon.resize(iconSize, iconSize);

            // Calculate position to center the icon
            const x = (qrCodeImage.bitmap.width / 2) - (icon.bitmap.width / 2);
            const y = (qrCodeImage.bitmap.height / 2) - (icon.bitmap.height / 2);

            // Composite icon onto QR code image
            qrCodeImage.composite(icon, x, y);
        }
        
        return qrCodeImage.getBase64("image/png");
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error; // Ensure the error is thrown to be caught in the calling function
    }
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
