import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getCurrentUser, logoutCurrentUser } from "../userHelpers";
import UserDropdown from "./UserDropdown";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logoutCurrentUser();
    this.props.history.push("/");
  }

  render() {
    const currentUser = getCurrentUser();
    const authButtons = (
      <div>
        <Link to={`/${currentUser.username}/warbles/new`}>
          <button className="nav-button">Warble</button>
        </Link>
        <UserDropdown currentUser={currentUser} logout={this.handleLogout} />
      </div>
    );

    const noAuthButtons = (
      <div className="nav-button-container">
        <Link to="/signup">
          <button className="nav-button">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Log in</button>
        </Link>
      </div>
    );
    const navButtons = currentUser ? authButtons : noAuthButtons;

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src="/svg/warbler-logo.svg" />
            </Link>
          </div>
          {navButtons}
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
