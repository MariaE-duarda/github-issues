import styled from "styled-components";

export const SearchAreaContainer = styled.form`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    padding: 0.75rem 1rem;
    outline: none;
    border-radius: 6px;
    transition: 0.2s;
    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-input"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`;

export const SearchAreaHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
