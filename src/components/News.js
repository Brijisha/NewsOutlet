import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor from news components");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    //Lifecycle method which brings all data from api url, runs after render()
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=aa25a2acac74496a88e5c51ad567502a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); // send request to given url and wait for response
    let parseData = await data.json(); // convert stribg to json object
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=aa25a2acac74496a88e5c51ad567502a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); // send request to given url and wait for response
    let parseData = await data.json(); // convert stribg to json object
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=aa25a2acac74496a88e5c51ad567502a&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); // send request to given url and wait for response
    let parseData = await data.json(); // convert stribg to json object

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-dark ">NewsOutlet -Top Headlines </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title?.slice(0, 40)}
                    description={element.description?.slice(0, 80)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            class="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            class="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
