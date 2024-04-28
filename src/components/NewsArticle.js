import React, { Component } from "react";

export class NewsArticle extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, publishedAt } =
      this.props;
    return (
      <div className="card my-3">
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
          <h5 className="card-title">
            {title}
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger "
              style={{ left: "90%", zIndex: 1, fontSize: 11 }}
            >
              {source.name}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Published on {new Date(publishedAt).toUTCString()})
            </small>
          </p>
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
