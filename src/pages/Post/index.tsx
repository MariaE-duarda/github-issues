import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { iPost } from "../Blog";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";

const userName = 'MariaE-duarda';
const repoName = 'github-issues';

export function Post() {
  const [postData, setPostData] = useState({} as iPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getProfileData = useCallback(
    async function loadPosts() {
      try {
        const response = await api.get(
          `repos/${userName}/${repoName}/issues/${id}`
        );

        setPostData(response.data);
      } finally {
        setIsLoading(false);
      }
    },
    [postData]
  );

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <PostContainer>
      <main>
        <PostInfo isLoading={isLoading} data={postData} />
        {isLoading ? <Spinner /> : <PostContent textContent={postData.body} />}
      </main>
    </PostContainer>
  );
}
