import React, { Component } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";

export default class VideoList extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/video")
      .then((videoList) => {
        console.log("helloooooo", videoList);
        this.setState({
          videos: videoList.data,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>ALL PROGRAMMES</h1>
        {this.state.videos.map((video) => {
          return (
            <div key={video._id}>
              <iframe id="videoProject" src={video.videoUrl}></iframe>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
