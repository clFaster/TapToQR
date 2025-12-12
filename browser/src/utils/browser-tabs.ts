import browser from "webextension-polyfill";

export const getActiveTab = async (): Promise<string> => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const url = tabs[0]?.url;
  
  // Return URL if found, otherwise check for test fallback
  if (url) {
    return url;
  }
  
  // Fallback for testing when no active tab is available
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('url') || "URL not found";
};
