import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  color: var(--fg-color);
  background-color: var(--primary-color, #339989);
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--secondary-color, #7de2d1);
    transform: scale(1.1);
  }
`;
