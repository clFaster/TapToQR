import React, { useState, useEffect } from "react";
import {
  OptionContainer,
  SettingsContainer,
  FormGroup,
  InputLabel,
  InputContainer,
  CurrentValue,
  Toast,
} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import {
  ExtensionSettings,
  loadExtensionSettings,
  revertExtensionSettings,
  saveExtensionSettings,
} from "../../utils/browser-storage.ts";
import { Button, ButtonContainer } from "../../styled/styled-button.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Options = () => {
  const [extensionSettings, setExtensionSettings] = useState({
    qrCodeSize: 0,
    qrCodeDownloadSize: 0,
    displayLogo: false,
  } as ExtensionSettings);

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
      qrCodeSize: parseInt(event.target.value),
    });
  };

  const updateQrCodeDownloadSize = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setExtensionSettings({
      ...extensionSettings,
      qrCodeDownloadSize: parseInt(event.target.value),
    });
  };

  const updateDisplayLogo = (b: boolean) => {
    setExtensionSettings({
      ...extensionSettings,
      displayLogo: b,
    });
  };

  useEffect(() => {
    loadOptions().then();
  }, []);

  return (
    <OptionContainer>
      <TapToQrHeader title="TapToQR Settings" />

      <SettingsContainer>
        <form>
          <FormGroup>
            <InputLabel htmlFor="qrCodeSize">QR Code Preview Size:</InputLabel>
            <InputContainer>
              <input
                type="range"
                id="qrCodeSize"
                min="220"
                max="400"
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
            <InputLabel htmlFor="displayLogo">Display Logo:</InputLabel>
            <InputContainer>
              <input
                type="checkbox"
                id="displayLogo"
                checked={extensionSettings.displayLogo}
                onChange={() =>
                  updateDisplayLogo(!extensionSettings.displayLogo)
                }
              />
            </InputContainer>
          </FormGroup>

          <ButtonContainer>
            <Button
              type="button"
              id="save-btn"
              title="Save Settings"
              onClick={saveOptions}
            >
              <FontAwesomeIcon icon={faFloppyDisk} size={"2x"} />
            </Button>
            <Button
              type="button"
              id="revert-btn"
              title="Revert Settings to Defaults"
              onClick={revertOptions}
            >
              <FontAwesomeIcon icon={faRotateRight} size={"2x"} />
            </Button>
          </ButtonContainer>
        </form>
      </SettingsContainer>

      {toastMessage && <Toast className="show">{toastMessage}</Toast>}
    </OptionContainer>
  );
};

export default Options;
