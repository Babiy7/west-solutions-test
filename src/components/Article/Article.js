import React from "react";
import classes from "./Article.module.scss";

const Article = props => {
  return (
    <div className={classes.Article}>
      <div className={classes.Header}>
        <img
          className={classes.Image}
          src="https://i.dailymail.co.uk/1s/2020/03/11/12/25833206-0-image-a-12_1583930332384.jpg"
          alt="news"
        />
        <h4 className={classes.Title}>
          Tokyo police arrest two for taking possession of stolen NEM
          cryptocurrency
        </h4>
      </div>

      <div className={classes.Content}>
        <p>
          Tokyo police arrested two men on Wednesday for alleged possession of
          NEM, a cryptocurrency, that they knew was stolen in a massive
          cyberattack on a Japanese startup in 2018, according to investigative
          sources.\r\nThe Metropolitan Police Department arrested
        </p>
      </div>

      <div className={classes.Footer}>
        <h2 className={classes.Author}>Elliot Snith</h2>

        <div className={classes.Data}>2020-03-11 12:52:20</div>
      </div>
    </div>
  );
};

export default Article;
