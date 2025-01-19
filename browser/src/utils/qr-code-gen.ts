import QRCode from 'qrcode';
import browser from "webextension-polyfill";

const generateQrCodeSvg = async (content: any, width: any) => {
    try {
        return await QRCode.toString(content, {
            width: width,
            margin: 1,
            errorCorrectionLevel: 'H',
        });
    } catch (error) {
        console.error("Error generating QR code:", error);
        throw error;
    }
}

const fetchTapToQrIcon = async () => {
    let iconSvg = "./../img/ic_TapToQR.svg";
    let svgUrl = browser.runtime.getURL(iconSvg);

    try {
        const response = await fetch(svgUrl);
        return await response.text();
    } catch (error) {
        console.error('Error loading SVG icon:', error);
        return '';
    }
}

const addIconToQrCode = async (svg: any, width: number) => {
    const iconSize = width * 0.25;
    const rectMargin = iconSize * 0.10;
    const scaledIconSize = iconSize / 150;
    const rectCornerRadius = rectMargin / 2;
    const position = width / 2 - iconSize / 2;

    let iconSvg = await fetchTapToQrIcon();

    return `
        <svg width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg">
            <g>${svg}</g>
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


async function convertSvgToPng(svgData: string, qrCodeSize: number) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const qrCodeDownloadSize = qrCodeSize;
    console.log("QR-Code-Download-Size:", qrCodeDownloadSize);

    canvas.width = qrCodeDownloadSize;
    canvas.height = qrCodeDownloadSize;

    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

    return new Promise((resolve) => {
        img.onload = function() {
            context?.drawImage(img, 0, 0);
            const pngUrl = canvas.toDataURL("image/png");
            resolve(pngUrl);
        };
    });
}

export const generateSvgContent = async (content: string, size: number, displayLogo: boolean) => {
    let svg = await generateQrCodeSvg(content, size);

    if (displayLogo) {
        svg = await addIconToQrCode(svg, size);
    }

    return svg;
}

export const copyQrCodeToClipboard = async (svg: string, qrCodeSize: number) => {
    const pngUrl = await convertSvgToPng(svg, qrCodeSize);
    const response = await fetch(pngUrl as URL);
    const blob = await response.blob();
    const item = new ClipboardItem({ 'image/png': blob });

    await navigator.clipboard.write([item]);
}
