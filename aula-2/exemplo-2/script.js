const articleTemplate = document.querySelector("[data-article-template]");
const ul = document.querySelector("ul");

const articles = [
  {
    figcaption: "Ceú Azul",
    url: "https://source.unsplash.com/random/?sky,blue",
  },
  {
    figcaption: "Cidade à noite",
    url: "https://source.unsplash.com/random/?city,night",
  },
];

articles.map((article) => {
  const li = document.createElement("li");

  const articleContent = articleTemplate.cloneNode(true);
  li.append(articleContent.content);
  ul.append(li);

  const articlesLi = ul.querySelectorAll("li");
  const mostRecentArticleLi = articlesLi[articlesLi.length - 1];

  const img = mostRecentArticleLi.querySelector("img");
  const anchor = mostRecentArticleLi.querySelector("a");
  const figcaption = mostRecentArticleLi.querySelector("figcaption");

  img.src = article.url;
  anchor.href = article.url;
  figcaption.textContent = article.figcaption;

  // li.innerHTML =
  //   '<article><figure><img src="" alt=""><figcaption>Ceú Azul</figcaption><a href="">Acesse agora</a></figure></article>';
});
