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
      isLoading: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const applications = []
    const applicationlist = new Array(this.props.post.applications)
    for (var app_id of applicationlist[0]) {
      const url = `/organization/get_application/${app_id}`  
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              // alert("Could not get applications");
          }
      })
      .then(json => {
        applications.push(json)
        if (applications.length === applicationlist[0].length) {
          this.setState({ applications: applications, isLoading: true });
        }
      })
      .catch(error => {
          console.log(error);
      });
      
    }
}
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'block': 'none'
    }));
  }
  render() {

    const { post } = this.props;
    //const filteredApplicants = queueComponent.state.applicants.filter(applicant => {
      //return applicant.jobId===post.id});
    //const filteredApplicants = this.state.applications
    const addr = "/organization/posts/"+String(post._id)
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
                deletePost.bind(this, post._id)
            }
            style={{fontSize: 12, width: 150}}
          >
            Delete
          </Button>
          </td>
      </tr>
      { this.state.isLoading ? <TableBody style={{display: this.state.display}}>
      {this.state.applications.map(applicant=>(
            <SingleApplicant
              key = {uid(applicant)}
              app_id = {applicant._id}
              id={applicant.applicant_id}
              name={applicant.applicant_name}
              //rank={applicant.applicant_rank}
              jobName={post.name}
              status={applicant.applicant_status}
            />
          ))}
      </TableBody>:null }
      </>
    );
  }
}

export default SinglePost;