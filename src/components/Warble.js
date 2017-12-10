import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Warble.css";

class Warble extends Component {
  render() {
    return (
      <div className="warble-wrapper">
        <div className="warble-media" />
        <div className="warble-info">
          <span>
            <img
              className="profile-image"
              src={this.props.profileImage}
              alt="Profile Image"
            />
          </span>
          <span className="warble-username">
            <Link to={`/${this.props.username}`}>{this.props.username}</Link>
          </span>
          <span className="warble-time">{this.props.timeFromNow}</span>
        </div>
        <div className="warble-handle">
          <Link to={`/${this.props.username}`}>@{this.props.username}</Link>
        </div>
        <div className="warble-message">
          <p>{this.props.message}</p>
        </div>
        <div className="warble-actions">
          <span>Reply</span>
          <span>Rewarble</span>
          <span>Favorite</span>
        </div>
      </div>
    );
  }
}

export default Warble;
