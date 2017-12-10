import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import UserForm from "../components/UserForm";
import WarbleForm from "../components/WarbleForm";
import ProfileContainer from "./ProfileContainer";
import Home from "./Home";
import * as userActions from "../userHelpers";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWarbleSubmit = this.handleWarbleSubmit.bind(this);
  }

  handleSubmit(user, authType) {
    axios
      .post(`http://localhost:3001/api/auth/${authType}`, user)
      .then(res => {
        const warblerUser = {
          token: res.data.token,
          userId: res.data.userId,
          username: res.data.username,
          profileImage: res.data.profileImage
        };
        userActions.setCurrentUser(warblerUser);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleWarbleSubmit(message) {}

  render() {
    const currentUser = userActions.getCurrentUser();
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => (
              <UserForm handleSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <UserForm handleSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/:username" component={ProfileContainer} />
          <Route
            exact
            path="/:username/warbles/new"
            render={props => (
              <WarbleForm
                currentUser={currentUser}
                handleWarbleSubmit={this.handleWarbleSubmit}
                {...props}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);
