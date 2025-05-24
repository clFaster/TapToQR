import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 15px;
  background: none;
  border: none;
  color: ${(props) =>
    props.active ? "var(--primary-color)" : "var(--text-color)"};
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary-color);
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-color);

    &:after {
      transform: scaleX(0.8);
    }
  }
`;
