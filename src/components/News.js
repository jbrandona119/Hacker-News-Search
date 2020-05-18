import React from "react";
import { connect } from "react-redux";
import { getReadableNews, getFetchError } from "../selectors/article";
import "./News.css";

import Article from "./Article";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%",
  },
  author: {
    label: "Author",
    width: "30%",
  },
  comments: {
    label: "Comments",
    width: "10%",
  },
  points: {
    label: "Points",
    width: "10%",
  },
  archive: {
    width: "10%",
  },
};

const News = ({ news, error }) => (
  <div className="news">
    <NewsHeader columns={COLUMNS} />

    {error && <p className="error">An error has occured...</p>}

    {(news || []).map((article) => (
      <Article key={article.objectID} article={article} columns={COLUMNS} />
    ))}
  </div>
);

const NewsHeader = ({ columns }) => (
  <div className="news-header">
    {Object.keys(columns).map((key) => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  news: getReadableNews(state),
  error: getFetchError(state),
});

export default connect(mapStateToProps)(News);