import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container-md my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://static8.depositphotos.com/1021561/999/i/950/depositphotos_9998088-stock-photo-world-news.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
