import React, { Component } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ApiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

class VideoList extends Component {
  state = {
    videos: [],
    // filteredVideos: [],
    checkedSong: false,
    checkedTales: false,
    checkedEducation: false,
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
    console.log(event.target.checked);

    if (event.target.name === "song") {
      this.setState({
        checkedSong: event.target.checked,
      });
    } else if (event.target.name === "tales") {
      this.setState({
        checkedTales: event.target.checked,
      });
    } else if (event.target.name === "education") {
      this.setState({
        checkedEducation: event.target.checked,
      });
    }
    console.log(this.state);
  };

  render() {
    console.log(this.state.videos);
    const filteredVideos = this.state.videos.filter((video) => {
      let filteredB = false;
      if (this.state.checkedSong && video.category === "song") {
        filteredB = true;
      }
      if (this.state.checkedTales && video.category === "tales") {
        filteredB = true;
      }
      if (this.state.checkedEducation && video.category === "education") {
        filteredB = true;
      }
      if (
        !this.state.checkedEducation &&
        !this.state.checkedSong &&
        !this.state.checkedTales
      ) {
        filteredB = true;
      }
      return filteredB;
    });
    // .filter((video) => {
    //   if (this.state.checkedTales) {
    //     return video.category === "tales";
    //   } else {
    //     return video;
    //   }
    // })
    // .filter((video) => {
    //   if (this.state.checkedEducation) {
    //     return video.category === "education";
    //   } else {
    //     return video;
    //   }
    // }

    return (
      <div>
        <h1>Select a category</h1>
        <form>
          <input
            type="checkbox"
            name="song"
            onChange={this.handleCheck}
          ></input>
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

        {/* <h1>test video</h1>
        <div>
          {this.state.videos.map((video) => (
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
        </div> */}

        <h1>OUR PROGRAMMES</h1>
        <Link to={`/videos/create`}>
          <button>Create a new video</button>
        </Link>
        {filteredVideos.map((video) => {
          return (
            <div key={video._id}>
              <iframe id="videoProject" src={video.videoUrl}></iframe>
              <h3>{video.title}</h3>
              <p>{video.category}</p> <br></br>
              <p>{video.description}</p>
              {this.props.context.user?.role === "admin" && (
                <div>
                  <Link to={`/videos/${video._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </div>
              )}
              <Link to={`/videos/${video._id}/details`}>
                <button>See details</button>
              </Link>
              {this.props.context.user?.role === "admin" && (
                <div>
                  <button onClick={() => this.handleDelete(video._id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withUser(VideoList);
