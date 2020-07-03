import React from "react";
import {uid} from "react-uid";
import SinglePost from "./../SinglePost";
import "./styles.css";
//import "./styles.css";

/* Component for the List of Posts */
class SelfPosts extends React.Component {
  render() {
    const { posts, queueComponent} = this.props;

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