import React from "react";
import Usercard from "./usercard";
import { Route, Switch } from "react-router-dom";
import Followers from "./followers";

class Home extends React.Component {
  state = {
    myGithub: [],
    githubFollowers: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users/jonathan-portillo")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status !== "error") {
          this.setState({ myGithub: json });
          console.log("my data:", json);
        }
      });
  }

  render() {
    return (
      <>
        <Usercard user={this.state.myGithub} />
      </>
    );
  }
}

export default Home;
