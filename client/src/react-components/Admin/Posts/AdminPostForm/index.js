import React from "react";
import Button from "@material-ui/core/Button";
import Input from "../../../Input";
import Footer from '../../../Footer';
import RequirementHook from '../../../Organization/Hook/requirement';
import TitleSelect from '../../../Organization/Hook/jobTitle';
import ErrorTextField from '../../../Organization/Hook/errorInput';
import { addPost } from "../../../../actions/postList";
import AdminNav from '../../AdminNav';
import {Link} from 'react-router-dom';
import "./styles.css";
/* Component for the Post Form */
class AdminPostForm extends React.Component {
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
  state = {
    jobName: "",
    jobDescription: "",
    requirement: [],
    jobTitle: "",
    location: "",
  } 
  nameErrorCheck = () => {
    if (this.state.jobNameIsEmpty===true) {
      return (
        <ErrorTextField
          name="jobName"
          value={this.state.jobName}
          onChange={this.handleInputChange}
          label="Job Name"
        />
      )
    }
    else {
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
    if (this.state.jobDescriptionIsEmpty===true) {
      return (
        <ErrorTextField
          name="jobDescription"
          value={this.state.jobDescription}
          onChange={this.handleInputChange}
          label="Job Description"
        />
      )
    }
    else {
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
  submit = () => {
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
        <Link to="/admin/posts">
          <Button
            variant="contained"
            color="primary"
            onClick={addPost.bind(this, this.props.queueComponent, this.state)}
            className="button"
            style={{fontSize: 20}}
          >
            Submit
          </Button>
          {/* Write the post form data to database after submit */}
          </Link>
      )
    }
    }
  
  render() { 
    const app = this.props.app
 
    return (
      <div>
      <AdminNav app={app}/>
      <div id="fh5co-started">
      <h1 className='header'>Fill in your job information</h1>
      <p className='post-form'>Your job will be posted after our review</p>
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
          {this.submit()}
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default AdminPostForm;
