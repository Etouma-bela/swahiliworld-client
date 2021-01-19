import React, { Component } from "react";
import ApiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

export default class VideoCard extends Component {
  state = {
    title: "",
    videoUrl: "",
    description: "",
    vocabulary: "",
    category: "",
  };

  componentDidMount() {
    const videoId = this.props.match.params.id;
    console.log("videoId", videoId);
    ApiHandler.getVideo(videoId)
      .then((apiResponse) => {
        // console.log(apiResponse);
        const video = apiResponse;
        console.log("video is", video);
        this.setState({
          title: video.title,
          videoUrl: video.videoUrl,
          description: video.description,
          vocabulary: video.vocabulary,
          category: video.category,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <iframe id="oneVideo" src={this.state.videoUrl}></iframe>
        <p>{this.state.category}</p> <br></br>
        <p>{this.state.description}</p> <br></br>
        <p>{this.state.vocabulary}</p>
        <LikeButton />
      </div>
    );
  }
}
