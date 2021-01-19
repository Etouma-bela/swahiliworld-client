import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    email: "",
    password: "",
    country: "",
    profilePic: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            type="text"
            id="username"
            name="username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            onChange={this.handleChange}
            value={this.state.country}
            type="text"
            id="country"
            name="country"
          />
        </div>

        {/* <div>
          <label htmlFor="profilePic">picture</label>
          <input
            onChange={this.handleChange}
            value={this.state.profilePic}
            type="file"
            id="picture"
            name="profilePic"
          />
        </div> */}
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormSignup);
