import React from "react";
import SelfPosts from "./../SelfPosts";
import OrgNav from './../../OrgNav';
import Footer from './../../Footer';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {getOrgProfile} from "../../../actions/updateOrgProfile";
import {getOrgPosts} from "../../../actions/updateOrgProfile";
import "./styles.css";

/* The Organization Profile Component */
class OrgProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {},
        isLoading: false,
        posts: []
    }
    
}
  componentDidMount() {
    getOrgProfile(this.props.app.state.currentUserId, this)
    getOrgPosts(this.props.app.state.currentUserId, this)
}
  render() {
    //organizations information should be requested from the database
    const {posts, queueComponent} = this.props;
    const app = this.props.app
    return (
      <div>
        <OrgNav app={app} />
        <div id="fh5co-started">
        <div className="container">
        { this.state.isLoading ? <>
        <h1 className='h'>{this.state.user.name}</h1>
        <h3 className='h'>{this.state.user.info}</h3>
        <div className='h'>Website: {this.state.user.website}</div>
        <Link to="./../organization/update">
        <Button
            variant="contained"
            color="default"
            style={{fontSize: 12}}
          >
            Update profile
          </Button>
          </Link>
          </>:null }
        </div>
        </div>
        <div id="fh5co-blog" className="fh5co-bg-section">
        <div className="container" id='single-post'>
        <h1>My Posts</h1>
        { this.state.isLoading ? <SelfPosts posts={this.state.posts} queueComponent={queueComponent}/>:null }
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default OrgProfile;