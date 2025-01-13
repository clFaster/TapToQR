import styled from "styled-components";

export const PopupContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 5px 5px 5px;
    width: 200px;
    height: 200px;
`;

export const QrCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 5px 5px 5px;
`;

export const OptionContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
`;

export const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 20px;
    width: 500px;
    background-color: var(--grey-bg-color, #2B2C28);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    
    form {
        width: 80%;
    }
`;

export const FormGroup = styled.section`
    margin: 10px 0;
    width: 100%;
    padding-bottom: 10px;
`;

export const InputLabel = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 8px;
        background: var(--primary-color);
        border-radius: 5px;
        outline: none;
        margin-top: 5px;
        transition: background 0.3s;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.3s, transform 0.3s;
        display: flex;
        align-items: center;
        flex: 1;
    }

    input[type="range"]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.3s, transform 0.3s;
    }

    input[type="range"]:hover::-webkit-slider-thumb {
        background: var(--secondary-color);
        transform: scale(1.1);
    }

    input[type="range"]:hover::-moz-range-thumb {
        background: var(--secondary-color);
        transform: scale(1.1);
    }

    input[type="range"]:active {
        background: var(--secondary-color);
    }

    input[type="checkbox"] {
        position: relative;
        width: 40px;
        height: 40px;
        margin-top: 15px;
        margin-left: 5px;
        appearance: none;
        background: var(--grey-bg-color);
        border: 2px solid var(--primary-color);
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
    }

    input[type="checkbox"]:checked {
        background: var(--primary-color);
        border-color: var(--secondary-color);
    }

    input[type="checkbox"]:checked::after {
        content: "";
        position: absolute;
        left: 11px;
        top: 3px;
        width: 10px;
        height: 20px;
        border: solid var(--fg-color);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    input[type="checkbox"]:hover {
        border-color: var(--secondary-color);
    }
`;

export const CurrentValue = styled.span`
    font-size: 18px;
`;

export const Toast = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color, #339989);
    color: var(--fg-color);
    padding: 10px 20px;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
    z-index: 1000;
`;
