import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./WarbleForm.css";

class WarbleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      media: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let messageInfo = this.state;
    this.props.handleWarbleSubmit(messageInfo);
  }

  render() {
    if (this.props.currentUser.username !== this.props.match.params.username) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    } else {
      return (
        <div className="warble-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder="What's happening?"
              maxLength={140}
              onChange={this.handleChange}
              name="message"
              value={this.state.message}
              type="text"
            />
            <div>  
              <label htmlFor="media">Media URL: </label>
              <input placeholder="Image"
              onChange={this.handleChange}
              name="media"
              value={this.state.media}
              type="text"
              />
            </div>
            <button>Warble</button>
          </form>
        </div>
      );
    }
  }
}

export default WarbleForm;
