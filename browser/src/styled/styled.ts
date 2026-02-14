import styled from "styled-components";

export const PopupContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  background: radial-gradient(
    ellipse at 15% 0%,
    rgba(125, 226, 209, 0.08) 0%,
    transparent 55%
  );
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
  padding: 5px;
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
  position: relative;
  overflow: hidden;
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
  position: relative;
`;

export const CustomQrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 90px);
  padding: 0;
  box-sizing: border-box;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

export const FormSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;

  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 3px;
  }
`;

export const QrSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 39%;
  height: 75%;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  margin-top: auto;
  margin-bottom: auto;
  background-color: rgba(43, 44, 40, 0.3);
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  width: 500px;
  background-color: var(--grey-bg-color);
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  position: relative;
  z-index: 1;

  form {
    width: 80%;
  }
`;

export const FormGroup = styled.section`
  margin: 12px 0;
  width: 100%;
  padding-bottom: 12px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  color: var(--fg-color);
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-bottom: 8px;

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"],
  input[type="datetime-local"],
  textarea {
    width: 100%;
    padding: 10px 12px;
    font-size: 15px;
    font-family: var(--main-font-family);
    border: 1.5px solid var(--border-color);
    border-radius: 10px;
    background-color: var(--grey-bg-color);
    color: var(--fg-color);
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease,
      background-color 0.2s ease;
    margin-bottom: 10px;

    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(51, 153, 137, 0.2);
    }

    &::placeholder {
      color: var(--text-color);
      opacity: 0.6;
    }

    &:disabled {
      opacity: 0.5;
      background-color: rgba(43, 44, 40, 0.6);
      border-color: var(--border-color);
      cursor: not-allowed;
      position: relative;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: var(--border-color);
    border-radius: 3px;
    outline: none;
    margin-top: 5px;
    transition: background 0.2s ease;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  input[type="range"]:hover::-webkit-slider-thumb {
    background: var(--secondary-color);
    transform: scale(1.1);
    box-shadow: 0 0 8px rgba(125, 226, 209, 0.4);
  }

  input[type="range"]:hover::-moz-range-thumb {
    background: var(--secondary-color);
    transform: scale(1.1);
    box-shadow: 0 0 8px rgba(125, 226, 209, 0.4);
  }

  input[type="range"]:active {
    background: var(--primary-color);
  }

  input[type="checkbox"] {
    position: relative;
    width: 22px;
    height: 22px;
    margin: 0;
    margin-right: 10px;
    appearance: none;
    background: var(--grey-bg-color);
    border: 1.5px solid var(--border-color);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:checked {
      background: var(--primary-color);
      border-color: var(--primary-color);

      &::after {
        content: "";
        position: absolute;
        left: 7px;
        top: 3px;
        width: 6px;
        height: 11px;
        border: solid var(--fg-color);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    &:hover {
      border-color: var(--primary-color);
    }

    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(51, 153, 137, 0.2);
    }
  }

  // Custom styling for date and datetime-local inputs
  input[type="date"],
  input[type="datetime-local"] {
    &::-webkit-calendar-picker-indicator {
      filter: invert(var(--calendar-icon-invert));
      cursor: pointer;
      opacity: 0.7;
      padding: 4px;
      margin-right: -4px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const CurrentValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  min-width: 36px;
  text-align: right;
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  color: var(--fg-color);
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid var(--primary-light);
  box-shadow: 0 4px 16px rgba(51, 153, 137, 0.3);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  pointer-events: none;
  z-index: 1000;
  font-size: 14px;
  font-weight: 500;

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;

  select {
    width: 100%;
    padding: 10px 12px;
    font-size: 15px;
    font-family: var(--main-font-family);
    border: 1.5px solid var(--border-color);
    border-radius: 10px;
    background-color: var(--grey-bg-color);
    color: var(--fg-color);
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
    margin-bottom: 8px;
    cursor: pointer;
  }

  select:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(51, 153, 137, 0.2);
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
  gap: 12px;
  padding: 10px;
  box-sizing: border-box;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;

  label {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 6px;
    color: var(--fg-color);
  }
`;

export const CompactFormField = styled(FormField)`
  margin-bottom: 8px;
  width: calc(100% - 8px);

  label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--text-color);
  }

  ${InputContainer} {
    input[type="text"],
    input[type="email"],
    textarea {
      padding: 8px 10px;
      margin-bottom: 6px;
      width: 100%;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
  overflow-y: auto;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 0;
    transition: color 0.2s ease;
    color: var(--text-color);

    &:hover {
      color: var(--fg-color);
    }
  }

  input[type="radio"] {
    position: relative;
    appearance: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: 0 2px;
    padding: 0;
    background-color: var(--grey-bg-color);
    border: 1.5px solid var(--border-color);
    border-radius: 50%;
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease;
    transform-origin: center;

    &:checked {
      border-color: var(--primary-color);
      background-color: var(--primary-color);

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background-color: var(--fg-color);
        border-radius: 50%;
      }
    }

    &:hover {
      border-color: var(--primary-color);
    }
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  font-family: var(--main-font-family);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  background-color: var(--grey-bg-color);
  color: var(--fg-color);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  margin-bottom: 10px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(51, 153, 137, 0.2);
  }

  &::placeholder {
    color: var(--text-color);
    opacity: 0.6;
  }
`;
