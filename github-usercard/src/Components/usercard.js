import React from "react";
import { Link } from "react-router-dom";

class Usercard extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Usercard</h1>
        <h2>Username: {this.props.user.login}</h2>
        <img src={this.props.user.avatar_url} alt={this.props.username} />
        <h3>{this.props.user.name}</h3>
        <h3>{this.props.user.location}</h3>
        <button>
          <Link to="/followers">Click Here to See my Followers</Link>
        </button>
      </div>
    );
  }
}

export default Usercard;
