import React, { Component } from "react";
import WarbleContainer from "./WarbleContainer";
import Featured from "../components/Featured";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Featured />
      </div>
    );
  }
}

export default Home;
