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
        <div id="fh5co-started">
        <div class="container">
        <h1 class='h'>{name}</h1>
        <h3 class='h'>{intro}</h3>
        </div>
        </div>
        <div id="fh5co-services" class="fh5co-bg-section border-bottom">
        <div class="container">
        <h1>My Posts</h1>
        <SelfPosts posts={posts} queueComponent={queueComponent}/>
        </div>
        </div>
      </div>
    );
  }
}

export default OrgProfile;