import React from "react";
import classes from "./Article.module.scss";

const Article = props => {
  const date = props.date;
  const day = date.slice(0, 10);
  const time = date.slice(12, date.length - 1);

  return (
    <div className={classes.Article}>
      <div className={classes.Header}>
        <img className={classes.Image} src={props.image} alt="news" />
      </div>

      <h4 className={classes.Title}>{props.title}</h4>

      <div className={classes.Content}>
        <p>{props.content}</p>
      </div>

      <div className={classes.Footer}>
        <h2 className={classes.Author}>{props.author}</h2>

        <div className={classes.Data}>
          {day} <br /> {time}
        </div>
      </div>
    </div>
  );
};

export default Article;
