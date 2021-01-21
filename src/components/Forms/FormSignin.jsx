import React, { Component } from "react";
import { UserContext } from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";

import "../../styles/Form.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signup-form">
        <h1 className="title-form">Log in</h1>
        <p className="paragraphe-form">Discover Kiswahili!</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-group-item">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group-item">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button className="btn-form">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignin);
