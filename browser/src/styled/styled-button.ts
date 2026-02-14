import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
`;

export const Button = styled.button`
  border: 1px solid var(--border-color);
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: var(--fg-color);
  background-color: var(--grey-bg-color);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(51, 153, 137, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
