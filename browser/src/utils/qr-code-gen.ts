import QRCode from 'qrcode';
import browser from "webextension-polyfill";

const generateQrCodeSvg = async (content: any, width: any) => {
    try {
        return await QRCode.toString(content, {
            width: width,
            margin: 2,
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

export const generateSvgContent = async (content: string, size: number, displayLogo: boolean) => {
        let svg = await generateQrCodeSvg(content, size);

        if (displayLogo) {
            svg = await addIconToQrCode(svg, size);
        }

        return svg;
    }
