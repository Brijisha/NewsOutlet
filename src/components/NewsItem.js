import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="container-md my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className=" badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {source}
          </span>
        </div>
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
          <p className="card-text">
            <small className="text-muted">
              BY {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
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
  );
};

export default NewsItem;
