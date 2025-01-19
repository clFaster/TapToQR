import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px 0 8px 0;
    justify-content: center;
`;

export const Button = styled.button`
    border: none;
    width: 50px;
    height: 50px;
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
