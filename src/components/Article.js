import React from "react";
import { connect } from "react-redux";
import { doArchiveArticle } from "../actions/archive";
import { InLineButton } from "./Button";
import "./Article.css";

const Article = ({ article, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = article;

  return (
    <div className="article">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <InLineButton onClick={() => onArchive(objectID)}>Archive</InLineButton>
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  onArchive: (id) => dispatch(doArchiveArticle(id)),
});

export default connect(null, mapDispatchToProps)(Article);
