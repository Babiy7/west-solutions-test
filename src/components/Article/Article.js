import React from "react";
import classes from "./Article.module.scss";

import { sliceString } from "../../shared/utility";

const Article = props => {
  const date = props.date;
  const day = date.slice(0, 10);
  const time = date.slice(12, date.length - 1);

  return (
    <div className={classes.Article}>
      <div className={classes.Header}>
        <img className={classes.Image} src={props.image} alt="news" />
      </div>

      <h4 className={classes.Title}>{sliceString(props.title, 70)}</h4>

      <div className={classes.Content}>
        <p>{sliceString(props.content, 250)}</p>
      </div>

      <div className={classes.Footer}>
        <h2 className={classes.Author}>{sliceString(props.author, 20)}</h2>

        <div className={classes.Data}>
          {day} <br /> {time}
        </div>
      </div>
    </div>
  );
};

export default Article;
