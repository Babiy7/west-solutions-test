import React, { useEffect, memo } from "react";
import classes from "./News.module.scss";

import { connect } from "react-redux";
import { getNews } from "../../store/actions/news";

import Article from "../../components/Article/Article";

const News = props => {
  console.log("News rendering");
  let content = null;

  useEffect(() => {
    props.getNews();
  }, []);

  console.log(props.news);

  if (props.news) {
    content = props.news.map((article, index) => (
      <div key={index} className={classes.ArticleContainer}>
        <Article
          title={article.title}
          author={article.author}
          content={article.content}
          date={article.publishedAt}
          image={article.urlToImage}
        />
      </div>
    ));
  }

  return <div className={classes.News}>{content}</div>;
};

const mapStateToProps = state => {
  const store = state.newsStore;

  return {
    loading: store.loading,
    news: store.news,
    error: store.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
