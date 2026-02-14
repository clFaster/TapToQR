import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0 16px 0;
  height: 70px;
  position: relative;
  z-index: 1;
`;

export const HeaderIcon = styled.img`
  height: 56px;
  margin-right: 14px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  letter-spacing: -0.025em;
  color: var(--fg-color);
`;
