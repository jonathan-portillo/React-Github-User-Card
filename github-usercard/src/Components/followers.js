import React from "react";

class Followers extends React.Component {
  state = {
    myGithub: [],
    githubFollowers: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users/jonathan-portillo/followers")
      .then((res) => res.json())
      .then((json) => {
        console.log("followers", json);
        this.setState({ githubFollowers: json });
      });
  }

  render() {
    return (
      <div>
        <h1>Followers</h1>
        {this.state.githubFollowers.map((followers) => (
          <div>
            <h2>Username: {followers.login}</h2>
            <img src={followers.avatar_url} width="300px" />
            <h3>{followers.url}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
