const DEFAULT_CELL_SIZE = 150;

browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const url = tabs[0].url;
    console.log("Generating QR code for:", url);

    browser.storage.local.get('qrCodeSize').then(async result => {
        const qrCodeSize = parseInt(result.qrCodeSize) || DEFAULT_CELL_SIZE;
        console.log("QR code size:", qrCodeSize);
        const iconPath = null;
        try {
            const qrCodeDataUri = await setQRCodeWithIcon(url, iconPath, qrCodeSize);
            document.getElementById('qr-code').innerHTML = `<img src="${qrCodeDataUri}" alt="QR Code" />`;
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    });
});