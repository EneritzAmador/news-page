import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = "c722522cb4634c05be9d7a25ead07406";
    const apiUrl = "https://newsapi.org/v2/top-headlines";

    axios
      .get(apiUrl, {
        params: {
          country: "us",
          apiKey: apiKey,
        },
      })
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} alt="News" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;





