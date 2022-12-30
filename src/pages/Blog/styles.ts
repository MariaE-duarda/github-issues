import styled from "styled-components";

export const BlogContainer = styled.div`
  main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    @media (max-width: 425px) {
    
  }
  }
`;

export const PostsAreaContainer = styled.section`
  margin-top: 3rem;
  margin-bottom: 6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
