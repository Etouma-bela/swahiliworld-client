import React, { Component } from "react";
import ApiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Form.css";

export default class FormVideo extends Component {
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
    apiHandler
      .getVideo(videoId)
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

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const videoId = this.props.match.params.id;

    ApiHandler.updateVideo(
      videoId,
      // title: this.state.title,
      // videoUrl: this.state.videoUrl,
      // description: this.state.description,
      // vocabulary: this.state.vocabulary,
      // category: this.state.category,
      this.state
    )

      .then((apiResponse) => {
        console.log(apiResponse);
        this.props.history.push("/videos");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="signup-form">
        <h1 className="title-form">Edit New Video</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="">title</label>
              <input
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                placeholder="video title"
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="">add video link</label>
              <input
                onChange={this.handleChange}
                value={this.state.videoUrl}
                type="url"
                name="videoUrl"
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group-item">
              <label htmlFor="">Select a category:</label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                name="category"
              >
                <option value="song">song</option>
                <option value="tales">tale</option>
                <option value="education">education</option>
              </select>
            </div>

            <div className="form-group-item">
              <label htmlFor="">description</label>
              <textarea
                onChange={this.handleChange}
                name="description"
                placeholder="Tell us something about this video"
                value={this.state.description}
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="">vocabulary</label>
              <textarea
                onChange={this.handleChange}
                name="vocabulary"
                placeholder="Add vocabulary helper"
                value={this.state.vocabulary}
              />
            </div>
          </div>
          <button className="btn-form">Submit !</button>
        </form>
      </div>
    );
  }
}
