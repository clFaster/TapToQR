import browser from "webextension-polyfill";

const DEFAULT_SVG_SIZE = 230;
const DEFAULT_PNG_SIZE = 500;
const DEFAULT_LOGO = true;

interface InternalExtensionSettings {
    qrCodeSize?: number;
    qrCodeDownloadSize?: number;
    displayLogo?: boolean;
}

export interface ExtensionSettings {
    qrCodeSize: number;
    qrCodeDownloadSize: number;
    displayLogo: boolean;
}

export const loadExtensionSettings = async () => {

    let r = await browser.storage.local.get([
        "qrCodeSize",
        "qrCodeDownloadSize",
        "displayLogo",
    ]) as InternalExtensionSettings;

    r.qrCodeSize = r.qrCodeSize || DEFAULT_SVG_SIZE;
    r.qrCodeDownloadSize = r.qrCodeDownloadSize || DEFAULT_PNG_SIZE;
    r.displayLogo = r.displayLogo !== undefined ? r.displayLogo : DEFAULT_LOGO;
    return r as ExtensionSettings;
};

export const saveExtensionSettings = async (settings: ExtensionSettings) => {
    await browser.storage.local.set(settings as InternalExtensionSettings as Record<string, unknown>);
    return loadExtensionSettings();
}

export const revertExtensionSettings = async () => {
    await browser.storage.local.set({
        qrCodeSize: DEFAULT_SVG_SIZE,
        qrCodeDownloadSize: DEFAULT_PNG_SIZE,
        displayLogo: DEFAULT_LOGO,
    });
    return loadExtensionSettings();
}
