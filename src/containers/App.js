import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav";
import Main from "./Main";

const App = () => (
  <div>
    <Nav />
    <Main />
  </div>
);

export default withRouter(App);
