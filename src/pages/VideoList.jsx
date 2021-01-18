import React, { Component } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default class VideoList extends Component {
  state = {
    videos: [],
    filteredVideos: [],
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

  handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/api/video/${id}`)
      .then((apiResponse) => {
        this.setState({
          videos: this.state.videos.filter((video) => video._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleCheck = (event) => {
    console.log(event.target);
    if (event.target.name === "song") {
      this.setState({
        filteredVideos: this.state.videos.filter(
          (video) => video.category === "song"
        ),
      });
    } else if (event.target.name === "tales") {
      this.setState({
        filteredVideos: this.state.videos.filter(
          (video) => video.category === "tales"
        ),
      });
    } else if (event.target.name === "education") {
      this.setState({
        filteredVideos: this.state.videos.filter(
          (video) => video.category === "education"
        ),
      });
    } else {
      this.setState({
        filteredVideos: this.state.videos,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Select a category</h1>
        <form>
          <input type="checkbox" name="song" onClick={this.handleCheck}></input>
          <label htmlFor="">Song</label>

          <input
            type="checkbox"
            name="tales"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="">Tales</label>

          <input
            type="checkbox"
            name="education"
            onChange={this.handleCheck}
          ></input>
          <label htmlFor="">Education</label>
        </form>

        <h1>test video</h1>
        <div>
          {this.state.filteredVideos.map((video) => (
            <div key={video._id}>
              <iframe id="videoProject" src={video.videoUrl}></iframe>
              <h3>{video.title}</h3>
              <p>{video.category}</p> <br></br>
              <p>{video.description}</p>
              <div>
                <Link to={`/videos/${video._id}/edit`}>
                  <button>Edit</button>
                </Link>
              </div>
              <button onClick={() => this.handleDelete(video._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>

        <h1>OUR PROGRAMMES</h1>
        <Link to={`/videos/create`}>
          <button>Create a new video</button>
        </Link>
        {this.state.videos.map((video) => {
          return (
            <div key={video._id}>
              <iframe id="videoProject" src={video.videoUrl}></iframe>
              <h3>{video.title}</h3>
              <p>{video.category}</p> <br></br>
              <p>{video.description}</p>
              <div>
                <Link to={`/videos/${video._id}/edit`}>
                  <button>Edit</button>
                </Link>
              </div>
              <button onClick={() => this.handleDelete(video._id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
