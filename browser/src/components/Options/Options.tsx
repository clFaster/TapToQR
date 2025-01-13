import React, {useState, useEffect} from "react";
import {
    OptionContainer,
    SettingsContainer,
    FormGroup,
    InputLabel,
    InputContainer,
    CurrentValue,
    Toast
} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import {
    ExtensionSettings,
    loadExtensionSettings,
    revertExtensionSettings,
    saveExtensionSettings
} from "../../utils/browser-storage.ts";
import {Button, ButtonContainer} from "../../styled/styled-button.ts";

const Options = () => {
    const [extensionSettings, setExtensionSettings] = useState({ qrCodeSize: 0, qrCodeDownloadSize: 0, displayLogo: false } as ExtensionSettings);

    const [toastMessage, setToastMessage] = useState("");

    const saveOptions = async () => {
        saveExtensionSettings(extensionSettings).then();
        showToast("Settings saved!");
    };

    const loadOptions = async () => {
        const result = await loadExtensionSettings();
        setExtensionSettings(result);
    };

    const revertOptions = async () => {
        const result = await revertExtensionSettings();
        setExtensionSettings(result);
        showToast("Settings reverted to defaults!");
    };

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage("");
        }, 2000);
    };

    const updateQrCodeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExtensionSettings({
            ...extensionSettings,
            qrCodeSize: parseInt(event.target.value)
        });
    };

    const updateQrCodeDownloadSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExtensionSettings({
            ...extensionSettings,
            qrCodeDownloadSize: parseInt(event.target.value)
        });
    };

    const updateDisplayLogo = (b: boolean)=> {
        setExtensionSettings({
            ...extensionSettings,
            displayLogo: b
        });
    }

    useEffect(() => {
        loadOptions().then();
    }, []);

    return (
        <OptionContainer>
            <TapToQrHeader title="TapToQR Settings"/>

            <SettingsContainer>
                <form>
                    <FormGroup>
                        <InputLabel htmlFor="qrCodeSize">
                            QR Code Preview Size:
                        </InputLabel>
                        <InputContainer>
                            <input
                                type="range"
                                id="qrCodeSize"
                                min="150"
                                max="450"
                                step="10"
                                value={extensionSettings.qrCodeSize}
                                onChange={updateQrCodeSize}
                                aria-labelledby="qrCodeSizeValue"
                            />
                            <CurrentValue id="qrCodeSizeValue">
                                {extensionSettings.qrCodeSize}
                            </CurrentValue>
                        </InputContainer>
                    </FormGroup>

                    <FormGroup>
                        <InputLabel htmlFor="qrCodeDownloadSize">
                            QR Code Download Size:
                        </InputLabel>
                        <InputContainer>
                            <input
                                type="range"
                                id="qrCodeDownloadSize"
                                min="160"
                                max="600"
                                step="10"
                                value={extensionSettings.qrCodeDownloadSize}
                                onChange={updateQrCodeDownloadSize}
                                aria-labelledby="qrCodeDownloadSizeValue"
                            />
                            <CurrentValue id="qrCodeDownloadSizeValue">
                                {extensionSettings.qrCodeDownloadSize}
                            </CurrentValue>
                        </InputContainer>
                    </FormGroup>

                    <FormGroup>
                        <InputLabel htmlFor="displayLogo">
                            Display Logo:
                        </InputLabel>
                        <InputContainer>
                            <input
                                type="checkbox"
                                id="displayLogo"
                                checked={extensionSettings.displayLogo}
                                onChange={() => updateDisplayLogo(!extensionSettings.displayLogo)}
                            />
                        </InputContainer>
                    </FormGroup>

                    <ButtonContainer>
                        <Button type="button" id="save-btn" title="Save Settings" onClick={saveOptions}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24">
                            <path
                                    d="M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
                            </svg>
                        </Button>
                        <Button type="button" id="revert-btn" title="Revert Settings to Defaults"
                                onClick={revertOptions}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="23">
                                <path
                                    d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"/>
                            </svg>
                        </Button>
                    </ButtonContainer>
                </form>
            </SettingsContainer>

            {toastMessage && <Toast className="show">{toastMessage}</Toast>}
        </OptionContainer>
    );
};

export default Options;
