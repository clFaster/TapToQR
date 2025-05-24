import styled from "styled-components";

export const PopupContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

export const QrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const CustomQrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
  padding: 10px;
  box-sizing: border-box;

  svg {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
`;

export const OptionContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  width: 100%;
`;

export const CustomQrPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 750px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const CustomQrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 90px); /* Subtract header height */
  padding: 0;
  box-sizing: border-box;
  gap: 20px; /* Add space between the form and QR display */
`;

export const FormSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  
  /* Better scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) transparent;
  
  /* For WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 4px;
  }
`;

export const QrSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100%;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 20px;
  width: 500px;
  background-color: var(--grey-bg-color);
  box-shadow: 0 4px 8px var(--shadow-color);
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
  width: 100%;
  margin-bottom: 8px; /* Add bottom margin for spacing */
  
  input[type="text"], 
  input[type="email"], 
  input[type="password"],
  textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box; /* Ensure padding is included in width */
  }

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
    transition:
      background 0.3s,
      transform 0.3s;
  }

  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition:
      background 0.3s,
      transform 0.3s;
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
    transition:
      background 0.2s,
      border-color 0.2s;
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

  input[type="text"] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    background-color: var(--grey-bg-color);
    color: var(--fg-color);
    outline: none;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
    margin-bottom: 12px;
  }

  input[type="text"]:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 8px var(--secondary-color);
  }

  input[type="text"]::placeholder {
    color: var(--fg-color);
    opacity: 0.7;
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
  background-color: var(--primary-color);
  color: var(--fg-color);
  padding: 10px 20px;
  border-radius: 8px;
  opacity: 0;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  pointer-events: none;
  z-index: 1000;

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

// Adding styled components for the data type selector and form fields

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  select {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    background-color: var(--grey-bg-color);
    color: var(--fg-color);
    outline: none;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
    margin-bottom: 10px;
    cursor: pointer;
  }

  select:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 8px var(--secondary-color);
  }

  option {
    background-color: var(--grey-bg-color);
    color: var(--fg-color);
    padding: 8px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--fg-color);
  }
`;

export const CompactFormField = styled(FormField)`
  margin-bottom: 10px;
  width: calc(100% - 8px); /* Account for scrollbar width */

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  ${InputContainer} {
    input[type="text"],
    input[type="email"],
    textarea {
      padding: 8px 10px;
      margin-bottom: 8px;
      width: 100%;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 0;
  overflow-y: auto;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 15px;
    padding: 6px 0;
    transition: color 0.2s;

    &:hover {
      color: var(--secondary-color);
    }
  }

  input[type="radio"] {
    position: relative;
    appearance: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    margin: 0 2px;
    padding: 0;
    background-color: var(--grey-bg-color);
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    transition:
      border-color 0.2s,
      background-color 0.2s,
      transform 0.2s;
    transform-origin: center;

    &:checked {
      border-color: var(--secondary-color);
      background-color: var(--primary-color);

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: var(--fg-color);
        border-radius: 50%;
      }
    }

    &:hover {
      border-color: var(--secondary-color);
      transform: scale(1.05);
    }
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  background-color: var(--grey-bg-color);
  color: var(--fg-color);
  outline: none;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  margin-bottom: 12px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 8px var(--secondary-color);
  }

  &::placeholder {
    color: var(--fg-color);
    opacity: 0.7;
  }
`;
