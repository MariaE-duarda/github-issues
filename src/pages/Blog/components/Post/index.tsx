import { iPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostContainer, PostDescription, PostTitle } from "./styles";

interface PostContainerProps {
  data: iPost;
}

export function Post({ data }: PostContainerProps) {
  const formattedDate = relativeDateFormatter(data.created_at);

  return (
    <PostContainer to={`/post/${data.number}`}>
      <header>
        <PostTitle>{data.title}</PostTitle>
        <span>{formattedDate}</span>
      </header>

      <PostDescription>{data.body}</PostDescription>
    </PostContainer>
  );
}
