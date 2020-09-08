import React from "react";
import "./App.css";
import Usercard from "./Components/usercard";
import { Route, Switch } from "react-router-dom";
import Followers from "./Components/followers";
import Home from "./Components/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/followers" component={Followers} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
