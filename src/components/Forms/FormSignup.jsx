import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";

import "../../styles/Form.css";

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
      <div className="signup-form">
        <h1 className="title-form">Sign Up For Free.</h1>
        <p className="paragraphe-form">Have Fun in Kiswahili!</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleChange}
                value={this.state.username}
                type="text"
                id="username"
                name="username"
              />
            </div>

            <div className="form-group-item">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="form-group-item">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div className="form-group-item">
              <label htmlFor="country">Country</label>
              <input
                onChange={this.handleChange}
                value={this.state.country}
                type="text"
                id="country"
                name="country"
              />
            </div>
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

          <button className="btn-form">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignup);
