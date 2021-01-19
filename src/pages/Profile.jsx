import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";

class Profile extends Component {
  render() {
    const role = this.props.context.user.role;
    console.log(this.props.context.user.role);
    if (role === "user" || "admin") {
      return (
        <div>
          {" "}
          <h1>
            {" "}
            Hello {this.props.context.user.username} and welcome to Swahili
            world!
          </h1>{" "}
        </div>
      );
    }
  }
}

export default withUser(Profile);
// export default withUser(Profile);
