import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import formatRelative from "date-fns/formatRelative";
import { ptBR } from "date-fns/locale";
import { differenceInMinutes, formatDistanceToNow } from "date-fns";

function PostFeedPage() {
  const [posts, setPosts] = useState([]);
  const [postToCreateContent, setPostToCreateContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetPosts();
  }, []);

  async function handleGetPosts() {
    try {
      // const r = await fetch(
      //   "https://brasilapi.com.br/api/ibge/municipios/v1/SP?providers=dados-abertos-br,gov,wikipedia"
      // );
      // const re = await r.json();
      // console.log(re);

      const response = await api("posts");
      const posts = response.data;
      setPosts(posts);
      // toast.success("Posts carregados com sucesso!");
    } catch (error) {
      toast.error("Erro ao carregar posts...");
    }
  }

  async function handleCreatePost(event) {
    try {
      event.preventDefault();
      if (postToCreateContent.length === 0) {
        toast.warn("Post deve ter no mínimo 1 caractere");
        return;
      }
      const date = new Date();
      console.log(postToCreateContent);

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
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
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

      <button onClick={handleGetPosts}>Exibir Posts</button>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => {
          const parsedDate = new Date(post.createdAt);
          function getRelativeTime() {
            const diffInMinutes = differenceInMinutes(new Date(), parsedDate);
            if (diffInMinutes < 1) {
              return `Agora mesmo`;
            }

            if (diffInMinutes < 60) {
              console.log(diffInMinutes);
              // relativeDate = format(diffInMinutes, "'Há' m 'minutos'");
              return `Há ${diffInMinutes} minutos`;
            }

            return formatRelative(parsedDate, new Date(), {
              locale: ptBR,
            });
          }

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

export default PostFeedPage;
