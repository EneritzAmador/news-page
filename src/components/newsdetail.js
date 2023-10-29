import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = ({ news }) => {
  let { id } = useParams();
  const article = news[id];

  if (!article) {
    return <div>No se encontró la noticia.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.urlToImage && <img src={article.urlToImage} alt="News" />}
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Leer más
      </a>
    </div>
  );
};

export default NewsDetail;


