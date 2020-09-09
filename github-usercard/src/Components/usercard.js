import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class Usercard extends React.Component {
  render() {
    return (
      <div className="Container">
        <Card>
          <CardBody>
            <CardHeader>
              <CardTitle>Github Usercard</CardTitle>
              <CardSubtitle>Username: {this.props.user.login}</CardSubtitle>
            </CardHeader>
          </CardBody>
          <CardBody>
            <img src={this.props.user.avatar_url} alt={this.props.username} />
          </CardBody>
          <CardBody>
            <CardTitle>{this.props.user.name}</CardTitle>
            <CardSubtitle>{this.props.user.bio}</CardSubtitle>
            <CardTitle>{this.props.user.location}</CardTitle>
            <CardBody>
              <Button outline color="primary" href={this.props.user.html_url}>
                My Github
              </Button>
            </CardBody>
            <Button outline color="primary">
              <Link to="/followers">Click Here to See my Followers</Link>
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Usercard;
