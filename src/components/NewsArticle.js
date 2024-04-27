import React, { Component } from "react";

export class NewsArticle extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.investors.com/wp-content/uploads/2019/10/stock-wall-street-flags-adobe.jpg"
          }
          className="card-img-top"
          alt={source.name}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
