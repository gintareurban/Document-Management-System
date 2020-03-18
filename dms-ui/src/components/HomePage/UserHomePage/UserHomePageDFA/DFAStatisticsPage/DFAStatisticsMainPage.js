import React from "react";
import axios from "axios";
import serverUrl from "../../../../URL/ServerUrl";
import DFAStatisticsContainer from "./DFAStatisticsContainer";
import UserHomePageDFANavContainer from "../UserHomePageDFANavContainer";

class DFAStatisticsMainPage extends React.Component {
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
    return (
      <div className="no-scroll">
        <div className="row full-height">
          <div className="col-lg-2 p-0 nav-color">
            <UserHomePageDFANavContainer />
          </div>
          <div className="col-lg-10 p-3 main-color">
            <div className="mb-5 text-center">
              <h1>Welcome, {this.state.username}</h1>
            </div>
            <DFAStatisticsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default DFAStatisticsMainPage;
