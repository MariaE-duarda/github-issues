import styled from "styled-components";

export const PostInfoContainer = styled.section`
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PostInfoTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 1.25rem;
  color: ${(props) => props.theme["base-title"]};
`;

export const PostInfoFooter = styled.footer`
  margin-top: 0.5rem;

  @media (max-width: 425px) {
    margin-top: 1rem;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 425px) {
      justify-content: center;
    }

    li {
      color: ${(props) => props.theme["base-span"]};

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const BackButton = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  border: none;
  background: none;
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
`;
