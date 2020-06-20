import React from "react";
import SelfPosts from "./../SelfPosts";
import OrgNav from './../../OrgNav';
import "./styles.css";

/* The Organization Profile Component */
class OrgProfile extends React.Component {

  render() {
    const { posts, queueComponent} = this.props;
    const name = "Food Delivery Organization"
    const intro = "We deliver food. We need you! Phone number: 123456789. Email: 123456789"
    return (
      <div>
        <OrgNav/>
        <h1>{name}</h1>
        <h3>{intro}</h3>
        <h1>My Posts</h1>
        <SelfPosts posts={posts} queueComponent={queueComponent}/>
      </div>
    );
  }
}

export default OrgProfile;