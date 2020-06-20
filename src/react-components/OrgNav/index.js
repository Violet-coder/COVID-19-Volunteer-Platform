import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

/* The Navigarion Bar of Organization Component */
class OrgNav extends React.Component {
  render() {
    
    return (
      <div className="header">
        <Link to={"./../home"}>
          <Button className="home__button">HOME</Button>
          </Link>
        <Link to={"./../post"}>
          <Button className="home__button">POST A NEW JOB</Button>
          </Link>
          <Link to={"./../orgProfile"}>
          <Button className="home__button">PROFILE</Button>
          </Link>
          <Link to={"./../home"}>
          <Button className="home__button">LOG OUT</Button>
          </Link>
      </div>
    );
  }
}

export default OrgNav;
