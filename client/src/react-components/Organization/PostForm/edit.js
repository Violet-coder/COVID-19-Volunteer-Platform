import React from "react";
import Button from "@material-ui/core/Button";
import Input from "./../../Input";
import OrgNav from './../../OrgNav';
import Footer from './../../Footer';
import RequirementHook from '../Hook/requirement';
import TitleSelect from '../Hook/jobTitle';
import ErrorTextField from '../Hook/errorInput';
import { editPost } from "../../../actions/postList";
import { Link } from "react-router-dom";
import "./styles.css";
/* Component for Updating Post Form */
class PostEditForm extends React.Component {
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    if (value==="") {
      this.setState({
        [name+'IsEmpty']: true
      })
    }
    else {
      this.setState({
        [name+'IsEmpty']: false
      })
    }
  };
  componentDidMount() {
    const post_id = this.props.matchProps.match.params.id
    const url = `/post/${post_id}`  
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get applications");
          }
      })
      .then(json => {
        this.setState({     
          jobName: json.name,
          jobDescription: json.description,
          requirement: "",
          jobTitle: "",
          location: "",
          isLoading: true });
      })
      .catch(error => {
          console.log(error);
      });
    

}
  id = this.props.matchProps.match.params.id
  state = {
    jobName: "",
    jobDescription: "",
    requirement: [],
    jobTitle: "",
    location: "",
  } 
  nameErrorCheck = () => {
    if (this.state.jobNameIsEmpty===true && this.state.isLoading) {
      return (
        <ErrorTextField
          name="jobName"
          value={this.state.jobName}
          onChange={this.handleInputChange}
          label="Job Name"
        />
      )
    }
    else if (this.state.isLoading) {
      return (
          <Input
          name="jobName"
          value={this.state.jobName}
          onChange={this.handleInputChange}
          label="Job Name"
        />
      )
    }
  }
  descriptionErrorCheck = () => {
    if (this.state.jobDescriptionIsEmpty===true && this.state.isLoading) {
      return (
        <ErrorTextField
          name="jobDescription"
          value={this.state.jobDescription}
          onChange={this.handleInputChange}
          label="Job Description"
        />
      )
    }
    else if (this.state.isLoading) {
      return (
        <Input
          name="jobDescription"
          value={this.state.jobDescription}
          onChange={this.handleInputChange}
          label="Job Description"
        />
      )
    
  }
}
//data should be changed in database respectively on submit
  submit = (id) => {
    if (this.state.jobName===""||this.state.jobDescription===""||this.state.jobTitle===""||this.state.location==="") {
      return (
        <div>
        <Button
            variant="contained"
            color="primary"
            disabled
            className="button"
            style={{fontSize: 20}}
          >
            Submit
          </Button>
          <p className='notify'>Fill in the required blank to submit</p>
          </div>
      )}
    else {
      return (
        <Link to="/organization/profile">
          <Button
            variant="contained"
            color="primary"
            onClick={editPost.bind(this, id, this.state)}
            className="button"
            style={{fontSize: 20}}
          >
            Submit
          </Button>
          </Link>
      )
    }
    }
  
  render() {  
    const app = this.props.app
    const matchProps = this.props.matchProps
    const post_id = matchProps.match.params.id
    return (
      <div>
      <OrgNav app={app}/>
      <div id="fh5co-started">
      <h1 className='header'>Update your job information</h1>
      <p className='post-form'>Your edited information will be posted after our review</p>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="contain">
          {this.nameErrorCheck()}
          {this.descriptionErrorCheck()}
        <div className="options">
        <TitleSelect
          context={this}
          label='Choose a Relevant Area'
          dataset='job'
          id='job-select'
        />
        </div>
        <div className="options">
        <TitleSelect
          context={this}
          label='Job Location'
          dataset='location'
          id='location-select'
        />
        <RequirementHook
          context={this}
        />

        </div>
        </div>
        <div className="contain">
          {this.submit(post_id)}
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default PostEditForm;
