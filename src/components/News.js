import React, { Component } from "react";
import NewsArticle from "./NewsArticle";
import Spinner from "./spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22eae0a38f0c4947a718e22def471d2e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22eae0a38f0c4947a718e22def471d2e&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22eae0a38f0c4947a718e22def471d2e&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
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
