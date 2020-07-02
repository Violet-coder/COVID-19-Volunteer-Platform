import React from "react";
import Button from "@material-ui/core/Button";
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
        <tbody>
        <tr key={post.name} className="fh5co-post" id='row'>
        <td>
        <p id='name'>
        {post.name}
        </p>
        </td>
        <td>
        <p className='single-post'>{post.status} on {post.date}</p>
        </td>
        <td className='button'>
        <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            style={{fontSize: 12, width: 150}}
          >
            Applicants
          </Button>
          </td>
          <td className='button'>
        <Link to={addr}>
        <Button
            variant="contained"
            color="default"
            style={{fontSize: 12, width: 150}}
          >
            Detail
          </Button>
          </Link>
          </td>
          <td className='button'>
          <Button
            variant="contained"
            color="secondary"
            onClick={
                deletePost.bind(this, queueComponent, post)
            }
            style={{fontSize: 12, width: 150}}
          >
            Delete
          </Button>
          </td>
      </tr>
      </tbody>
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