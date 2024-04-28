import React, { Component } from "react";
import NewsArticle from "./NewsArticle";
import Spinner from "./spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    this.update = this.update.bind(this);
  }

  update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=22eae0a38f0c4947a718e22def471d2e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.update();
  }

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.update();
    });
  };
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.update();
    });
  };
  render() {
    return (
      <div className="container my-3 ">
        <h1>NewsApp - Top News</h1>

        <div className="row">
          {this.state.articles.map((item) => {
            return (
              <div key={item.url} className="col-md-4">
                <NewsArticle
                  title={item.title}
                  description={item.description}
                  imageUrl={item.urlToImage}
                  newsUrl={item.url}
                  source={item.source}
                  publishedAt={item.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="text-center">{this.state.loading && <Spinner />}</div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
