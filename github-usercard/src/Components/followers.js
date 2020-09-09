import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle, Button } from "reactstrap";

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
      <div className="Container">
        <CardBody>
          <Button outline color="primary">
            <Link to="/">Back to my Card</Link>
          </Button>
        </CardBody>
        <h3>Followers</h3>
        {this.state.githubFollowers.map((followers) => (
          <Card>
            <CardHeader>
              <CardTitle>Username: {followers.login}</CardTitle>
            </CardHeader>
            <CardBody>
              <img src={followers.avatar_url} width="300px" />
            </CardBody>
            <CardBody>
              <Button href={followers.html_url} outline color="primary">
                Github Account
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Followers;
