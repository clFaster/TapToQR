import React from "react";
import { WifiData } from "../../../utils/qr-data-formatters.ts";
import {
  CompactFormField,
  InputContainer,
  RadioGroup,
} from "../../../styled/styled.ts";

interface WifiQrFormProps {
  wifiData: WifiData;
  updateWifiData: (field: keyof WifiData, value: string) => void;
}

const WifiQrForm: React.FC<WifiQrFormProps> = ({
  wifiData,
  updateWifiData,
}) => {
  return (
    <>
      <CompactFormField>
        <label htmlFor="wifiSsid">Network Name (SSID)</label>
        <InputContainer>
          <input
            type="text"
            id="wifiSsid"
            value={wifiData.ssid}
            onChange={(e) => updateWifiData("ssid", e.target.value)}
            placeholder="Network Name"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label htmlFor="wifiPassword">Password</label>
        <InputContainer>
          <input
            type="text"
            id="wifiPassword"
            value={wifiData.password}
            onChange={(e) => updateWifiData("password", e.target.value)}
            placeholder="Password"
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label>Security Type</label>
        <RadioGroup>
          <label>
            <input
              type="radio"
              name="securityType"
              value="WPA"
              checked={wifiData.securityType === "WPA"}
              onChange={(e) => updateWifiData("securityType", e.target.value)}
            />
            WPA/WPA2
          </label>

          <label>
            <input
              type="radio"
              name="securityType"
              value="WEP"
              checked={wifiData.securityType === "WEP"}
              onChange={(e) => updateWifiData("securityType", e.target.value)}
            />
            WEP
          </label>

          <label>
            <input
              type="radio"
              name="securityType"
              value="nopass"
              checked={wifiData.securityType === "nopass"}
              onChange={(e) => updateWifiData("securityType", e.target.value)}
            />
            No Password
          </label>
        </RadioGroup>
      </CompactFormField>
    </>
  );
};

export default WifiQrForm;
