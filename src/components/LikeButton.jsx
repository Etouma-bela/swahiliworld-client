import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 0,
  };

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return <button onClick={this.handleLike}>{this.state.likes} Likes</button>;
  }
}
