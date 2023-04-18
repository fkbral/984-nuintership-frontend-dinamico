import { useState } from "react";
import { toast } from "react-toastify";

function PostFeedPageWithFetch() {
  const [posts, setPosts] = useState([]);
  async function handleGetPosts() {
    try {
      const response = await fetch("http://localhost:3000/safgagaposts");
      if (!response.ok) {
        throw response.error;
      }
      const posts = await response.json();
      setPosts(posts);
      toast.success("Posts carregados com sucesso!");
    } catch (error) {
      toast.error("Erro ao carregar posts...");
    }
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Exibir Posts</button>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostFeedPageWithFetch;
