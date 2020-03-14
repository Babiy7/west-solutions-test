import React, { useEffect } from "react";
import classes from "./News.module.scss";

import { connect } from "react-redux";
import { getNews } from "../../store/actions/news";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Article from "../../components/Article/Article";
import Spinner from "../../components/UI/Spinner/Spinner";

const News = props => {
  let content = null;

  console.log(props.news);

  useEffect(() => {
    props.getNews();
    // eslint-disable-next-line
  }, []);

  if (props.loading) {
    content = <Spinner />;
  }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(News));
