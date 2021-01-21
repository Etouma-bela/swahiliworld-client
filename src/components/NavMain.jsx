import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/home.png"
          alt=""
        />
        {/* <h3 className="logo">App name</h3> */}
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/videos">Our Videos</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                {/* {context.user && context.user.email} */}
                My Account
              </NavLink>
            </li>

            <NavLink to="/">
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </NavLink>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Create account</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
