import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchArea } from "./components/SearchArea";
import { BlogContainer, PostsAreaContainer } from "./styles";

const userName = 'MariaE-duarda';
const repoName = 'github-issues';

export interface iPost {
  title: string;
  body: string;
  created_at: string;
  node_id: string;
  html_url: string;
  number: number;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<iPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const amountPosts = posts.length;

  const getPosts = useCallback(
    async function loadPosts(query: string = "") {
      try {
        const response = await api.get(
          `search/issues?q=${query}%20repo:${userName}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <BlogContainer>
      <main>
        <Profile />
        <SearchArea amountPosts={amountPosts} getPosts={getPosts} />

        {isLoading ? (
          <div style={{ marginBottom: "5rem" }}>
            <Spinner />
          </div>
        ) : (
          <PostsAreaContainer>
            {posts.map((post) => (
              <Post key={post.node_id} data={post} />
            ))}
          </PostsAreaContainer>
        )}
      </main>
    </BlogContainer>
  );
}
