import React from "react";
import Button from "@material-ui/core/Button";
import Input from "./../../Input";
import OrgNav from './../../OrgNav';
import RequirementHook from '../Hook/requirement';
import TitleSelect from '../Hook/jobTitle';
import { addPost } from "../../../actions/postList";
import { Link } from "react-router-dom";
import "./styles.css";
/* Component for the Post Form */
class PostForm extends React.Component {
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  state = {
    jobName: "",
    jobDescription: "",
    requirement: [],
    jobTitle: "",
  } 
  render() {  
    const {queueComponent} = this.props;
    return (
      <div>
      <OrgNav/>
      <div id="fh5co-started">
      <h1 className='header'>Fill in the form</h1>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="contain">
        <Input
          name="jobName"
          value={this.state.jobName}
          onChange={this.handleInputChange}
          label="Job Name"
        />

        <Input
          name="jobDescription"
          value={this.state.jobDescription}
          onChange={this.handleInputChange}
          label="Job Description"
        />
        
        <div className="options">
        <TitleSelect
          context={this}
        />

        <RequirementHook
          context={this}
        />

        </div>
        </div>
        <div className="contain">
          <Link to="./../orgProfile">
          <Button
            variant="contained"
            color="primary"
            onClick={addPost.bind(this, queueComponent, this.state)}
            className="button"
            style={{fontSize: 20}}
          >
            Submit
          </Button>
          </Link>
      </div>
      </div>
      </div>
    );
  }
}

export default PostForm;
