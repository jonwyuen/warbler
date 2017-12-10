import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./WarbleForm.css";

class WarbleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
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
    let message = this.state.message;
    this.props.handleWarbleSubmit(message);
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
            <button>Warble</button>
          </form>
        </div>
      );
    }
  }
}

export default WarbleForm;
