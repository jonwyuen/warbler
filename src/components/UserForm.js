import React, { Component } from "react";
import "./UserForm.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImage: ""
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
    let newUser = { ...this.state };
    this.props.handleSubmit(newUser);
    this.setState({
      email: "",
      username: "",
      password: "",
      profileImage: ""
    });
  }

  render() {
    const location = this.props.location.pathname.slice(1);

    if (location === "signup") {
      return (
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label>Email</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
            </div>

            <div className="form-field">
              <label>Username</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </div>

            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
              />
            </div>

            <div className="form-field">
              <label>Password</label>
              <input
                type="password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    } else
      return (
        <div className="form-container">
          <form onSubmit={this.handleLogin}>
            <div className="form-field">
              <label>Username</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </div>

            <div className="form-field">
              <label>Password</label>
              <input
                type="password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </div>
            <button value="">Login</button>
          </form>
        </div>
      );
  }
}

export default UserForm;
