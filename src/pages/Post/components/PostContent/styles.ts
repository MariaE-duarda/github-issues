import styled, { ThemeConsumer } from "styled-components";

export const PostContentContainer = styled.article`
  width: 100%;
  padding: 2rem 2.5rem;
  margin-bottom: 8rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }

  pre {
    background: ${(props) => props.theme["base-post"]};

    > div {
      background: none !important;
    }
  }

  img {
    width: 100%;
  }
`;
