import browser from "webextension-polyfill";

const CUSTOM_QR_WINDOW_PATH = "pages/customQr.html";

export const openExtensionSettingsPage = async () => {
  browser.runtime
    .openOptionsPage()
    .then(() => {
      if (
        globalThis.location.protocol === "moz-extension:" ||
        globalThis.location.protocol === "chrome-extension:"
      ) {
        globalThis.close();
      }
    })
    .catch((error) => {
      console.error("Failed to open settings page:", error);
    });
};

export const openCustomQrPage = () => {
  browser.windows.create({
    url: browser.runtime.getURL(CUSTOM_QR_WINDOW_PATH),
    type: "popup",
    width: 950,
    height: 720,
  });
};
