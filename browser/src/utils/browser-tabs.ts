import browser from "webextension-polyfill";

export const getActiveTab = async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    return tabs[0].url;
}
