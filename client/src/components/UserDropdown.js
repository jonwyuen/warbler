import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./UserDropdown.css";

class UserDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <DropdownButton
        id="user-dropdown"
        pullRight={true}
        bsSize="large"
        title={
          <span>
            <img
              className="profile-image"
              src={`${this.props.currentUser.profileImage}`}
              alt=""
            />
            <span>{`${this.props.currentUser.username}`}</span>
          </span>
        }
      >
        <LinkContainer to={`/${this.props.currentUser.username}`} exact={true}>
          <MenuItem className="dropdown-item">Profile</MenuItem>
        </LinkContainer>
        <MenuItem href="#">Edit account</MenuItem>
        <MenuItem href="#">Update password</MenuItem>
        <MenuItem href="javascript:void(0)" onClick={this.props.logout}>
          Log out
        </MenuItem>
      </DropdownButton>
    );
  }
}

export default UserDropdown;
