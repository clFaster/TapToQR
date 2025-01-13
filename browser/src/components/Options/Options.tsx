import { useState, useEffect } from "react";
import browser from 'webextension-polyfill';

const DEFAULT_SVG_SIZE = 230;
const DEFAULT_PNG_SIZE = 500;
const DEFAULT_LOGO = true;

const Options = () => {
    const [qrCodeSize, setQrCodeSize] = useState(DEFAULT_SVG_SIZE);
    const [qrCodeDownloadSize, setQrCodeDownloadSize] = useState(DEFAULT_PNG_SIZE);
    const [displayLogo, setDisplayLogo] = useState(DEFAULT_LOGO);
    const [toastMessage, setToastMessage] = useState("");

    // Save options to local storage
    const saveOptions = async () => {
        await browser.storage.local.set({
            qrCodeSize,
            qrCodeDownloadSize,
            displayLogo,
        });
        showToast("Settings saved!");
    };

    // Load options and restore UI
    const loadOptionsAndRestoreUi = async () => {
        const result = await browser.storage.local.get([
            "qrCodeSize",
            "qrCodeDownloadSize",
            "displayLogo",
        ]);

        setQrCodeSize(result.qrCodeSize || DEFAULT_SVG_SIZE);
        setQrCodeDownloadSize(result.qrCodeDownloadSize || DEFAULT_PNG_SIZE);
        setDisplayLogo(result.displayLogo !== undefined ? result.displayLogo : DEFAULT_LOGO);
    };

    // Revert options to defaults
    const revertOptions = async () => {
        await browser.storage.local.set({
            qrCodeSize: DEFAULT_SVG_SIZE,
            qrCodeDownloadSize: DEFAULT_PNG_SIZE,
            displayLogo: DEFAULT_LOGO,
        });
        loadOptionsAndRestoreUi();
        showToast("Settings reverted to defaults!");
    };

    // Show a toast message
    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage("");
        }, 2000);
    };

    // Handle slider input changes
    const handleQrCodeSizeChange = (event) => {
        setQrCodeSize(event.target.value);
    };

    const handleQrCodeDownloadSizeChange = (event) => {
        setQrCodeDownloadSize(event.target.value);
    };

    // Load options on component mount
    useEffect(() => {
        loadOptionsAndRestoreUi();
    }, []);

    return (
        <div>
            <header className="header">
                <img
                    src="../img/ic_TapToQR.svg"
                    alt="TapToQR Icon"
                    className="svg-icon"
                    aria-hidden="true"
                />
                <h1>TapToQR Settings</h1>
            </header>

            <main className="settings-container">
                <form>
                    <section className="form-group">
                        <label htmlFor="qrCodeSize" className="setting-label">
                            QR Code Preview Size:
                        </label>
                        <div className="slider-container">
                            <input
                                type="range"
                                id="qrCodeSize"
                                min="150"
                                max="450"
                                step="10"
                                value={qrCodeSize}
                                onChange={handleQrCodeSizeChange}
                                aria-labelledby="qrCodeSizeValue"
                            />
                            <span id="qrCodeSizeValue" className="current-value">
                {qrCodeSize}
              </span>
                        </div>
                    </section>

                    <section className="form-group">
                        <label htmlFor="qrCodeDownloadSize" className="setting-label">
                            QR Code Download Size:
                        </label>
                        <div className="slider-container">
                            <input
                                type="range"
                                id="qrCodeDownloadSize"
                                min="160"
                                max="600"
                                step="10"
                                value={qrCodeDownloadSize}
                                onChange={handleQrCodeDownloadSizeChange}
                                aria-labelledby="qrCodeDownloadSizeValue"
                            />
                            <span id="qrCodeDownloadSizeValue" className="current-value">
                {qrCodeDownloadSize}
              </span>
                        </div>
                    </section>

                    <section className="form-group">
                        <label htmlFor="displayLogo" className="setting-label">
                            Display Logo:
                            <input
                                type="checkbox"
                                id="displayLogo"
                                checked={displayLogo}
                                onChange={() => setDisplayLogo(!displayLogo)}
                            />
                        </label>
                    </section>

                    <div className="button-container">
                        <button
                            type="button"
                            id="save-btn"
                            className="button"
                            title="Save Settings"
                            onClick={saveOptions}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24">
                                <path d="M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            id="revert-btn"
                            className="button"
                            title="Revert Settings to Defaults"
                            onClick={revertOptions}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="23">
                                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </main>

            {toastMessage && (
                <div id="toast" className="toast">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default Options;
