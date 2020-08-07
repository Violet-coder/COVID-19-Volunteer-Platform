import React from "react";
import Button from "@material-ui/core/Button";
import SingleApplicant from "./../SingleApplicant";
import "./styles.css";
import { deletePost } from "../../../actions/postList";
import { Link } from "react-router-dom";
import {uid} from "react-uid";
import { TableBody } from "@material-ui/core";
/* Component for a Single Post */
class SinglePost extends React.Component {
  //post information should be requested from the database
  //deleting a post should delete the data in the database
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      display: 'none',
      applications: [],
      isLoading: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const applications = []
    for (var app_id in this.props.post.applications) {
      const url = `/organization/get_applications/${this.props.post.applications[app_id]}`  
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get applications");
          }
      })
      .then(json => {
        applications.push(json)
          // console.log("state this time", this.state)
      })
      .catch(error => {
          console.log(error);
      });
    }
    this.setState({ applications: applications, isLoading: true });

}
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'block': 'none'
    }));
  }
  render() {

    const { post, queueComponent} = this.props;
    //const filteredApplicants = queueComponent.state.applicants.filter(applicant => {
      //return applicant.jobId===post.id});
    const filteredApplicants = this.state.applications
    const addr = "/organization/posts/"+String(post.id)
    return (
      <>
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
      <TableBody style={{display: this.state.display}}>
      {filteredApplicants.map(applicant=>(
            <SingleApplicant
              key = {uid(applicant)}
              id={applicant.applicant_id}
              name={applicant.applicant_name}
              rank={applicant.applicant_rank}
              jobName={post.name}
              status={applicant.applicant_status}
              context={queueComponent}
            />
          ))}
      </TableBody>
      </>
    );
  }
}

export default SinglePost;