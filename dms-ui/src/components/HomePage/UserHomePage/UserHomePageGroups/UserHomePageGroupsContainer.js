import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import UserHomePageGroupsComponents from "./UserHomePageGroupsComponents";
import serverUrl from "../../../URL/ServerUrl";

class UserHomePageGroupsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  getUsername = () => {
    axios
      .get(serverUrl + "api/user/loggedUsername")
      .then(response => {
        this.setState({ username: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getUsername();
  }

  render() {
    return <UserHomePageGroupsComponents username={this.state.username} />;
  }
}

export default withRouter(UserHomePageGroupsContainer);
