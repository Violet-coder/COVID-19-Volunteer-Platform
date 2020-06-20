import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SingleApplicant from "./../SingleApplicant";
import "./styles.css";
import { deletePost } from "../../../actions/postList";
import { uid } from "react-uid";
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
    const filteredApplicatns = queueComponent.state.applicants.filter(applicant => {
      return applicant.jobName===post.name});
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
        <Button
            variant="contained"
            color="primary"
            className="student-form__submit-button"
            onClick={this.handleClick}
          >
            See applicants
          </Button>
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
      <div style={{display: this.state.display}}>
      {filteredApplicatns.map(applicant=>(
            <SingleApplicant
              key={uid(
                applicant
              )}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
            />
          ))}
      </div>
      </div>
    );
  }
}

export default SinglePost;