import React, { Component } from "react";
import ApiHandler from "../../api/apiHandler";
import { withRouter } from "react-router-dom";
import "../../styles/Form.css";

export default class FormVideo extends Component {
  state = {
    title: "",
    videoUrl: "",
    description: "",
    vocabulary: "",
    category: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    ApiHandler.addVideo({
      title: this.state.title,
      videoUrl: this.state.videoUrl,
      description: this.state.description,
      vocabulary: this.state.vocabulary,
      category: this.state.category,
    })

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
        <h1 className="title-form">Add a New Video</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="">Title</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                placeholder="video title"
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="">Add video link</label>
              <input
                onChange={this.handleChange}
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
              <label htmlFor="">Description</label>
              <textarea
                onChange={this.handleChange}
                name="description"
                placeholder="Tell us something about this video"
                value={this.state.description}
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="">Vocabulary</label>
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
