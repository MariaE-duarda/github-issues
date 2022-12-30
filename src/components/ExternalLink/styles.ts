import styled, { css } from "styled-components";

interface ExternalLinkContainerProps {
  variant?: string;
}

export const ExternalLinkContainer = styled.a<ExternalLinkContainerProps>`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.5rem;
  border-bottom: 1px solid transparent;
  color: ${(props) => props.theme.blue};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }

  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-flow: row-reverse;
    `}
`;
