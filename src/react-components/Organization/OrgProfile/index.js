import React from "react";
import SelfPosts from "./../SelfPosts";
import OrgNav from './../../OrgNav';
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import { Link } from "react-router-dom";
import "./styles.css";

/* The Organization Profile Component */
class OrgProfile extends React.Component {
  render() {
    const {posts, queueComponent} = this.props;
    
    return (
      <div>
        <OrgNav/>
        <div id="fh5co-started">
        <div className="container">
        <h1 className='h'>{queueComponent.state.info.name}</h1>
        <h3 className='h'>{queueComponent.state.info.intro}</h3>
        <p className='h'>Location: {queueComponent.state.info.location}</p>
        <p className='h'>Website: {queueComponent.state.info.website}</p>
        <Link to="./../organization/update">
        <Button
            variant="contained"
            color="default"
            style={{fontSize: 12}}
          >
            Update profile
          </Button>
          </Link>
        </div>
        </div>
        <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="container">
        <h1>My Posts</h1>
        <Table style={{ width: '100%' }}>
        <SelfPosts posts={posts} queueComponent={queueComponent}/>
        </Table>
        </div>
        </div>
      </div>
    );
  }
}

export default OrgProfile;