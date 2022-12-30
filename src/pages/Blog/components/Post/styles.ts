import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme["base-post"]};
  transition: 0.2s;
  color:  ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-post"]};

  &:hover {
    border: 2px solid ${(props) => props.theme["base-span"]};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    span {
      width: max-content;
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const PostTitle = styled.h3`
  flex: 1;
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme["base-title"]};
`;

export const PostDescription = styled.p`
  margin-top: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
`;
