import React, { Component } from "react";
import Warble from "../components/Warble";
import axios from "axios";
import { setAuthorizationToken } from "../setAuthorizationToken";
import moment from "moment";

class WarbleContainer extends Component {
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
    moment.updateLocale("en", {
      relativeTime: {
        past: "%s ago",
        s: "1d",
        ss: "%ds",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1mo",
        MM: "%dmo",
        y: "1y",
        yy: "%dy"
      }
    });

    this.getWarbles();

    // Create token and store in localStorage
    // axios
    //   .post("http://localhost:3000/users/auth", {
    //     username: "hello",
    //     password: "hello"
    //   })
    //   .then(res => {
    //     const token = res.data.token;
    //     localStorage.setItem('token', token)

    // //     // After setting authorization token, new API calls will autmaically have the token included in the header.
    //     setAuthorizationToken(token);  //<-- setting auth token.
    //     // axios
    //     //     .post("http://localhost:3000/warblers/45", {
    //     //       message: "Yes, TokensORKS!"
    //     //     })
    //     //     .then(v => {
    //     //       console.log(v);
    //     //     });
    //   });
  }

  render() {
    let warbles = this.state.warbles.map(w => (
      <Warble
        key={w.id}
        username={w.username}
        message={w.message}
        profileImage={w.profileImage}
        timeFromNow={moment(w.createdAt).fromNow(true)}
      />
    ));

    return <div className="warble-container">{warbles}</div>;
  }
}

export default WarbleContainer;
