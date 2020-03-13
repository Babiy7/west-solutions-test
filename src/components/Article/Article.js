import React from "react";
import classes from "./Article.module.scss";

const Article = props => {
  return (
    <div className={classes.Article}>
      <div className={classes.Header}>
        <img className={classes.Image} src={props.image} alt="news" />
        <h4 className={classes.Title}>{props.title}</h4>
      </div>

      <div className={classes.Content}>
        <p>{props.content}</p>
      </div>

      <div className={classes.Footer}>
        <h2 className={classes.Author}>{props.author}</h2>

        <div className={classes.Data}>{props.date}</div>
      </div>
    </div>
  );
};

export default Article;
