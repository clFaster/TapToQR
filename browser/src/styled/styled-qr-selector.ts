import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
  gap: 2px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 8px 14px;
  background: none;
  border: none;
  color: ${(props) =>
    props.active ? "var(--primary-color)" : "var(--text-color)"};
  font-size: 13px;
  font-family: var(--main-font-family);
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  position: relative;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
  border-radius: 8px 8px 0 0;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: transform 0.2s ease;
    border-radius: 1px;
  }

  &:hover {
    color: var(--primary-color);
    background-color: rgba(51, 153, 137, 0.08);

    &:after {
      transform: scaleX(0.7);
    }
  }
`;
