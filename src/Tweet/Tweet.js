import React from "react";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="content mt-3">
      <div className="container">
        <div className="row">
          <div className="col-4">avatar</div>
          <div className="col-8">
            <div className="container">
              <div className="row">
                <div className="col-9">@{props.tweets.Name}</div>
                <div className="col-1">.</div>
                <div className="col-2">{props.tweets.time}h ago</div>
              </div>
              <div className="row mt-1">
                <div className="col-12">{props.tweets.message}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
