import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor from news components");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    //Lifecycle method, runs after render()
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=aa25a2acac74496a88e5c51ad567502a";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsOutlet -Top Headlines </h1>

        <div className="row">
          {this.state.articles.map((element) => {
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
      </div>
    );
  }
}

export default News;
