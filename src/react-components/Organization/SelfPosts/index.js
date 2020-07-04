import React from "react";
import {uid} from "react-uid";
import SinglePost from "./../SinglePost";
import "./styles.css";

/* Component for the List of Posts */
class SelfPosts extends React.Component {
  render() {
    const { posts, queueComponent} = this.props;
    //all the posts should be requested from the database
    return (
      <>

          {posts.map(post => 
            <SinglePost key = {uid(post)}
              post={post}
              queueComponent={queueComponent}
            />
          )}

      </>
    );
  }
}

export default SelfPosts;