import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <div className="profile-card-banner" />
        <div className="profile-card-top">
          <img src={this.props.profileImage} alt="Profile Image" />
          <div className="profile-card-info">
            <span>
              <Link to={`/${this.props.username}`}>{this.props.username}</Link>
            </span>
            <div>
              <Link to={`/${this.props.username}`}>@{this.props.username}</Link>
            </div>
          </div>
        </div>

        <div className="profile-card-bottom">
          <div>
            <p>Warbles</p>
            <span>{this.props.warbles.length}</span>
          </div>
          <div>
            <p>Following</p>
            <span>0</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
