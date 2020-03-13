import React from "react";
import classes from "./News.module.scss";

import Article from "../../components/Article/Article";

const News = () => {
  console.log("News rendering");
  return (
    <div className={classes.News}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((article, index) => (
        <div key={index} className={classes.ArticleContainer}>
          <Article />
        </div>
      ))}
    </div>
  );
};

export default News;
