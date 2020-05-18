import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../actions/article.js";
import Button from "./Button.js";

const applyStateQuery = (query) => () => ({
  query,
});

class SearchNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      this.props.onFetchNews(query);

      this.setState(applyStateQuery(""));
    }
    event.preventDefault();
  }
  onChange(event) {
    const { value } = event.target;
    this.setState(applyStateQuery(value));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <Button type="submit">Search HN</Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchNews: (query) => dispatch(fetchNews(query)),
});

export default connect(null, mapDispatchToProps)(SearchNews);
