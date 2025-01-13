import styled from "styled-components";

export const Container = styled.div`
    font-family: var(--main-font-family, "Source Sans Pro"), sans-serif;
    background-color: var(--bg-color, #131515);
    color: var(--fg-color, #FFFAFB);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const Icon = styled.img`
    height: 60px;
    margin-right: 15px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 2px 0 5px 0;
`;

export const SettingsContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 20px;
    width: 500px;
    background-color: var(--grey-bg-color, #2B2C28);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 10px;
    justify-content: center;
`;

export const FormGroup = styled.section`
    margin: 10px 0;
    width: 100%;
    padding-bottom: 10px;
`;

export const SettingLabel = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const CurrentValue = styled.span`
    font-size: 18px;
`;

export const Button = styled.button`
    border: none;
    width: 47px;
    height: 47px;
    border-radius: 15px;
    color: var(--fg-color);
    background-color: var(--primary-color, #339989);
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--secondary-color, #7DE2D1);
        transform: scale(1.10);
    }
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

    &.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    &.hide {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
    }
`;
