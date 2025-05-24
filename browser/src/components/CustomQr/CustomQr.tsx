import {
    CustomQrContainer,
    CustomQrPageContainer,
    InputContainer,
    QrCodeContainer,
    SelectContainer,
    FormContainer,
    FormField,
    FormSection,
    RadioGroup
} from "../../styled/styled.ts";
import TapToQrHeader from "../Shared/TapToQrHeader/TapToQrHeader.tsx";
import {Button, ButtonContainer} from "../../styled/styled-button.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faGear} from "@fortawesome/free-solid-svg-icons";
import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {loadExtensionSettings} from "../../utils/browser-storage.ts";
import {copyQrCodeToClipboard, downloadQrCodeAsPng, generateSvgContent} from "../../utils/qr-code-gen.ts";
import {openExtensionSettingsPage} from "../../utils/browser-runtime.ts";
import {useEffect, useState} from "react";
import { QrDataType, WifiData, ContactData, formatQrContent } from "../../utils/qr-data-formatters.ts";

const CustomQr = () => {
    const TEXT_PLACEHOLDER = "Set your QR code content here";
    const WIFI_PLACEHOLDER = {
        ssid: "Network Name",
        password: "Password",
        securityType: "WPA" as const
    };
    const CONTACT_PLACEHOLDER = {
        name: "John Doe",
        phone: "+1234567890",
        email: "john.doe@example.com",
        organization: "",
        title: "",
        website: ""
    };

    // State for QR code data type and content
    const [dataType, setDataType] = useState<QrDataType>(QrDataType.CLEAR_TEXT);
    const [textContent, setTextContent] = useState(TEXT_PLACEHOLDER);
    const [wifiData, setWifiData] = useState<WifiData>(WIFI_PLACEHOLDER);
    const [contactData, setContactData] = useState<ContactData>(CONTACT_PLACEHOLDER);
    const [qrCodeSvg, setQrCodeSvg] = useState("");

    // Get the formatted content based on the selected data type
    const getFormattedContent = () => {
        switch (dataType) {
            case QrDataType.CLEAR_TEXT:
                return textContent || TEXT_PLACEHOLDER;
            case QrDataType.WIFI:
                return formatQrContent(QrDataType.WIFI, wifiData);
            case QrDataType.CONTACT:
                return formatQrContent(QrDataType.CONTACT, contactData);
            default:
                return textContent;
        }
    };

    const copyToClipboard = async () => {
        const extensionSettings = await loadExtensionSettings();
        const qrContent = getFormattedContent();
        const svg = await generateSvgContent(qrContent, extensionSettings.qrCodeDownloadSize, extensionSettings.displayLogo);
        copyQrCodeToClipboard(svg, extensionSettings.qrCodeDownloadSize).then();
    }

    const downloadQrCode = async () => {
        const extensionSettings = await loadExtensionSettings();
        const qrContent = getFormattedContent();
        const svg = await generateSvgContent(qrContent, extensionSettings.qrCodeDownloadSize, extensionSettings.displayLogo);
        downloadQrCodeAsPng(svg, extensionSettings.qrCodeDownloadSize).then();
    }

    const openExtensionSettings = () => {
        openExtensionSettingsPage().then();
    }

    // Update Wi-Fi data
    const updateWifiData = (field: keyof WifiData, value: string) => {
        setWifiData(prev => ({
            ...prev,
            [field]: field === 'securityType' ? value as 'WPA' | 'WEP' | 'nopass' : value
        }));
    };

    // Update Contact data
    const updateContactData = (field: keyof ContactData, value: string) => {
        setContactData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    useEffect(() => {
        loadExtensionSettings().then(extensionSettings => {
            const qrContent = getFormattedContent();
            generateSvgContent(qrContent, 300, extensionSettings.displayLogo).then(x => {
                setQrCodeSvg(x);
            });
        });
    }, [dataType, textContent, wifiData, contactData, getFormattedContent]);

    // Render form fields based on selected data type
    const renderFormFields = () => {
        switch (dataType) {
            case QrDataType.CLEAR_TEXT:
                return (
                    <FormField>
                        <label htmlFor="qrTextContent">Text Content</label>
                        <InputContainer>
                            <input
                                type="text"
                                id="qrTextContent"
                                value={textContent}
                                onChange={(e) => setTextContent(e.target.value)}
                                placeholder={TEXT_PLACEHOLDER}
                            />
                        </InputContainer>
                    </FormField>
                );
            
            case QrDataType.WIFI:
                return (
                    <>
                        <FormField>
                            <label htmlFor="wifiSsid">Network Name (SSID)</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="wifiSsid"
                                    value={wifiData.ssid}
                                    onChange={(e) => updateWifiData('ssid', e.target.value)}
                                    placeholder="Network Name"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="wifiPassword">Password</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="wifiPassword"
                                    value={wifiData.password}
                                    onChange={(e) => updateWifiData('password', e.target.value)}
                                    placeholder="Password"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label>Security Type</label>
                            <RadioGroup>
                                <label>
                                    <input
                                        type="radio"
                                        name="securityType"
                                        value="WPA"
                                        checked={wifiData.securityType === 'WPA'}
                                        onChange={(e) => updateWifiData('securityType', e.target.value)}
                                    />
                                    WPA/WPA2
                                </label>
                                
                                <label>
                                    <input
                                        type="radio"
                                        name="securityType"
                                        value="WEP"
                                        checked={wifiData.securityType === 'WEP'}
                                        onChange={(e) => updateWifiData('securityType', e.target.value)}
                                    />
                                    WEP
                                </label>
                                
                                <label>
                                    <input
                                        type="radio"
                                        name="securityType"
                                        value="nopass"
                                        checked={wifiData.securityType === 'nopass'}
                                        onChange={(e) => updateWifiData('securityType', e.target.value)}
                                    />
                                    No Password
                                </label>
                            </RadioGroup>
                        </FormField>
                    </>
                );
            
            case QrDataType.CONTACT:
                return (
                    <>
                        <FormField>
                            <label htmlFor="contactName">Name</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactName"
                                    value={contactData.name}
                                    onChange={(e) => updateContactData('name', e.target.value)}
                                    placeholder="Full Name"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="contactPhone">Phone Number</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactPhone"
                                    value={contactData.phone}
                                    onChange={(e) => updateContactData('phone', e.target.value)}
                                    placeholder="Phone Number"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="contactEmail">Email</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactEmail"
                                    value={contactData.email}
                                    onChange={(e) => updateContactData('email', e.target.value)}
                                    placeholder="Email Address"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="contactOrg">Organization (Optional)</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactOrg"
                                    value={contactData.organization}
                                    onChange={(e) => updateContactData('organization', e.target.value)}
                                    placeholder="Organization"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="contactTitle">Job Title (Optional)</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactTitle"
                                    value={contactData.title}
                                    onChange={(e) => updateContactData('title', e.target.value)}
                                    placeholder="Job Title"
                                />
                            </InputContainer>
                        </FormField>
                        
                        <FormField>
                            <label htmlFor="contactWebsite">Website (Optional)</label>
                            <InputContainer>
                                <input
                                    type="text"
                                    id="contactWebsite"
                                    value={contactData.website}
                                    onChange={(e) => updateContactData('website', e.target.value)}
                                    placeholder="Website URL"
                                />
                            </InputContainer>
                        </FormField>
                    </>
                );
            
            default:
                return null;
        }
    };

    return (
        <CustomQrPageContainer>
            <TapToQrHeader title="TapToQR | Create"/>

            <CustomQrContainer>
                <FormContainer>
                    <FormField>
                        <label htmlFor="dataType">QR Code Type</label>
                        <SelectContainer>
                            <select 
                                id="dataType" 
                                value={dataType} 
                                onChange={(e) => setDataType(e.target.value as QrDataType)}
                            >
                                {Object.values(QrDataType).map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </SelectContainer>
                    </FormField>
                    
                    <FormSection>
                        {renderFormFields()}
                    </FormSection>
                </FormContainer>
                
                <QrCodeContainer dangerouslySetInnerHTML={{__html: qrCodeSvg}}/>

                <ButtonContainer>
                    <Button id="download-btn" title="Download as PNG" onClick={downloadQrCode}>
                        <FontAwesomeIcon icon={faDownload} size={"2x"}/>
                    </Button>
                    <Button id="copy-btn" title="Copy to Clipboard" onClick={copyToClipboard}>
                        <FontAwesomeIcon icon={faCopy} size={"2x"}/>
                    </Button>
                    <Button id="setting-btn" title="Open TapToQR Settings" onClick={openExtensionSettings}>
                        <FontAwesomeIcon icon={faGear} size={"2x"}/>
                    </Button>
                </ButtonContainer>

            </CustomQrContainer>

        </CustomQrPageContainer>
    );
}

export default CustomQr;
