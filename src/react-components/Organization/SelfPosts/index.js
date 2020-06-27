import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {uid} from "react-uid";
import SinglePost from "./../SinglePost";

//import "./styles.css";

/* Component for the List of Posts */
class SelfPosts extends React.Component {
  render() {
    const { posts, queueComponent} = this.props;

    return (
      <Table style={{ width: "100%"}}>

          {posts.map(post => 
            <SinglePost key = {uid(post)}
              post={post}
              queueComponent={queueComponent}
            />
          )}

      </Table>
    );
  }
}

export default SelfPosts;