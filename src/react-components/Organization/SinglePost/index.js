import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./styles.css";
import { deletePost } from "../../../actions/postList";
import { Link } from "react-router-dom";
/* Component for a Single Post */
class SinglePost extends React.Component {
  render() {

    const { post, queueComponent} = this.props;
    return (
      <div>
        <TableRow className="student" key={post.name}>
        <TableCell component="th" scope="row">
        <h1>
        {post.name}
        </h1>
        <p>Job description: {post.description}</p>
        <p>Requirement: {post.requirement}</p>
        <p>Status: {post.status}</p>
        </TableCell>

        <TableCell component="th" scope="row">
        <Link to={"./../applicants"}>
        <Button
            variant="contained"
            color="primary"
            className="student-form__submit-button"
          >
            See applicants
          </Button>
          </Link>
          </TableCell>
          <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
            className="student-form__submit-button"
            onClick={deletePost.bind(this, queueComponent, post)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      </div>
    );
  }
}

export default SinglePost;