import React, { Component } from "react";
import ProfileCard from "../components/ProfileCard";
// import WarblerContainer from "../containers/WarblerContainer";
import axios from "axios";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        profileImage: "",
        warbles: []
      }
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo(username) {
    axios.get(`http://localhost:3001/api/public/${username}`).then(v => {
      let user = {
        username: v.data.username,
        profileImage: v.data.profileImage,
        warbles: v.data.warbles
      };
      this.setState({
        user
      });
    });
  }

  componentDidMount() {
    this.getUserInfo(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    this.getUserInfo(nextProps.match.params.username);
  }

  render() {
    return (
      <div className="profile-container">
        <ProfileCard
          username={this.state.user.username}
          profileImage={this.state.user.profileImage}
          warbles={this.state.user.warbles}
        />
      </div>
    );
  }
}

export default ProfileContainer;
