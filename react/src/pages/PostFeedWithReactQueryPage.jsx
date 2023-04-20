import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import "./PostFeedWithReactQueryPage.styles.css";

function PostFeedWithReactQueryPage() {
  const [postToCreateContent, setPostToCreateContent] = useState("");
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api("posts").then((response) => response.data),
  });

  async function handleCreatePost(event) {
    try {
      event.preventDefault();
      if (postToCreateContent.length === 0) {
        toast.warn("Post deve ter no mínimo 1 caractere");
        return;
      }
      const date = new Date();

      const response = await api.post("posts", {
        content: postToCreateContent,
        likes: 0,
        createdAt: date,
        updatedAt: date,
        deletedAt: null,
      });

      const insertedPost = response.data;
      setPosts((posts) => [...posts, insertedPost]);
      toast.success("Post inserido com sucesso!");
      setPostToCreateContent("");
    } catch (error) {
      toast.error("Erro ao inserir post...");
    }
  }

  if (isLoading) {
    return (
      <FaSpinner
        size={42}
        style={{
          transform: "translateX(180deg)",
        }}
      />
    );
  }

  return (
    <div>
      <div>
        <Link to="/shopping-list">Ir para lista de compras</Link>
      </div>
      <a href="/shopping-list">Ir para lista de compras recarregando página</a>

      <h1>Últimos Posts</h1>
      <form onSubmit={handleCreatePost}>
        <div>
          <label htmlFor="">Post</label>
        </div>
        <textarea
          rows={8}
          type="text"
          onChange={(event) => setPostToCreateContent(event.target.value)}
          value={postToCreateContent}
        />
        <button>Criar Post</button>
      </form>

      <hr />

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => {
          const parsedDate = new Date(post.createdAt);

          function getRelativeTimeToNow() {
            return formatDistanceToNow(parsedDate, { locale: ptBR });
          }

          const relativeDate = getRelativeTimeToNow();

          return (
            <li>
              <p>{post.content}</p>
              <time>{relativeDate}</time>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostFeedWithReactQueryPage;
