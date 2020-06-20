import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import SinglePost from "./../SinglePost";

//import "./styles.css";

/* Component for the List of Posts */
class SelfPosts extends React.Component {
  render() {
    const { posts, queueComponent} = this.props;

    return (
      <Table style={{ width: "100%"}}>
        <TableBody>
          {posts.map(post => (
            <SinglePost
              key={uid(
                post
              )}
              post={post}
              queueComponent={queueComponent}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default SelfPosts;