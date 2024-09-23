import React, { useEffect, useState } from "react";
import "./RedditCard.css";

const RedditCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.reddit.com/r/reactjs.json");
    const jsonData = await data.json();
    // console.log(jsonData.data.children, "JJJJJJ");
    setData(jsonData.data.children);
  };
  return (
    <div className="container">
      {data.map((item) => {
        const { title, selftext_html, url, score } = item.data;
        return (
          <div className="card">
            <h2 className="title">{title}</h2>
            {selftext_html ? (
              <div
                className="selftext"
                dangerouslySetInnerHTML={{ __html: selftext_html }}
              ></div>
            ) : (
              <div className="selftext">No Data!!</div>
            )}

            <p className="url">
              <a href={url} target="_blank" rel="noopener noreferrer">
                URL Here...
              </a>
            </p>
            <p className="score">Score: {score}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RedditCard;
