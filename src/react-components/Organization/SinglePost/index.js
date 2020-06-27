import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SingleApplicant from "./../SingleApplicant";
import "./styles.css";
import { deletePost } from "../../../actions/postList";
import { Link } from "react-router-dom";
import {uid} from "react-uid";
import { TableBody } from "@material-ui/core";
/* Component for a Single Post */
class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      display: 'none'
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'block': 'none'
    }));
  }
  render() {

    const { post, queueComponent} = this.props;
    const filteredApplicants = queueComponent.state.applicants.filter(applicant => {
      return applicant.jobId===post.id});
    const addr = "/organization/posts/"+String(post.id)
    return (
      <>
        <TableBody>
        <TableRow key={post.name} className="fh5co-post">
        <TableCell component="th" scope="row" style={{width: 300}}>
        <p id='name'>
        {post.name}
        </p>
        </TableCell>
        <TableCell component="th" scope="row" style={{width: 200}}>
        <p>{post.status} on {post.date}</p>
        </TableCell>
        <TableCell component="th" scope="row">
        <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            style={{fontSize: 12}}
          >
            Applicants
          </Button>
          </TableCell>
          <TableCell component="th" scope="row">
        <Link to={addr}>
        <Button
            variant="contained"
            color="default"
            style={{fontSize: 12}}
          >
            Detail
          </Button>
          </Link>
          </TableCell>
          <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
            onClick={
                deletePost.bind(this, queueComponent, post)
            }
            style={{fontSize: 12}}
          >
            Delete
          </Button>
          </TableCell>
      </TableRow>
      </TableBody>
      <TableBody style={{display: this.state.display}}>
      {filteredApplicants.map(applicant=>(
            <SingleApplicant
              key = {uid(applicant)}
              id={applicant.id}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
              status={applicant.status}
              context={queueComponent}
            />
          ))}
      </TableBody>
      </>
    );
  }
}

export default SinglePost;