import React, { Component } from "react";
import axios from "axios";
import VideoList from "../../pages/VideoList";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default class VideoFilter extends Component {
  state = {
    videos: this.props.videos,
    filteredVideos: this.props.videos,
  };

  render() {
    return <div></div>;
  }
}
