import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  padding: 2px 0 12px;
  border-bottom: 1px solid var(--border-color);
`;

export const Tab = styled.button<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12.5px;
  font-family: var(--main-font-family);
  font-weight: ${(props) => (props.active ? "600" : "400")};
  letter-spacing: -0.01em;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  background-color: ${(props) =>
    props.active ? "rgba(51, 153, 137, 0.14)" : "transparent"};
  color: ${(props) =>
    props.active ? "var(--fg-color)" : "var(--text-color)"};
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(51, 153, 137, 0.35)" : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.active ? "rgba(51, 153, 137, 0.18)" : "rgba(51, 153, 137, 0.08)"};
    color: var(--fg-color);
    border-color: ${(props) =>
      props.active ? "rgba(51, 153, 137, 0.45)" : "rgba(85, 85, 85, 0.4)"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 153, 137, 0.3);
  }
`;

export const TabIcon = styled.span<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  color: ${(props) =>
    props.active ? "var(--primary-light)" : "var(--text-color)"};
  transition: color 0.2s ease;

  ${Tab}:hover & {
    color: var(--primary-light);
  }
`;
