import React, { Component } from "react";

export class NewsArticle extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt={source.name} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsArticle;