import React, { Component } from "react";
import Warble from "../components/Warble";
import axios from "axios";
import moment from "moment";
import "./Featured.css";

class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warbles: []
    };
    this.getWarbles = this.getWarbles.bind(this);
  }

  getWarbles() {
    axios.get("http://localhost:3001/api/warbles").then(v => {
      let warbles = v.data.map(w => {
        return {
          id: w._id,
          message: w.message,
          username: w.userId.username,
          profileImage: w.userId.profileImage,
          createdAt: w.createdAt
        };
      });
      this.setState({ warbles });
    });
  }

  componentDidMount() {
    this.getWarbles();
  }

  componentWillReceiveProps() {
    this.getWarbles();
  }

  render() {
    moment.locale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "1s",
        ss: "%ss",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1M",
        MM: "%dM",
        y: "1Y",
        yy: "%dY"
      }
    });

    const [left, middle, right] = this.state.warbles.reduce(
      (c, w, i) => {
        c[i % 3].push(
          <Warble
            key={w.id}
            username={w.username}
            message={w.message}
            profileImage={w.profileImage}
            timeFromNow={moment(w.createdAt).fromNow(true)}
          />
        );
        return c;
      },
      [[], [], []]
    );

    return (
      <div className="featured-wrapper">
        <h2>Featured Warbles</h2>
        <div className="featured-warbles">
          <div className="featured-column">{left}</div>
          <div className="featured-column">{middle}</div>
          <div className="featured-column">{right}</div>
        </div>
      </div>
    );
  }
}

export default Featured;
