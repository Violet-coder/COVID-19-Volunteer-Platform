import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "./../../Input";
import OrgNav from './../../OrgNav';
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
    requirement: "",
  } 
  render() {  
    const {queueComponent} = this.props;
    return (
      
      <Grid className="student-form">
        {}
        <OrgNav/>
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

        <Input
          name="requirement"
          value={this.state.requirement}
          onChange={this.handleInputChange}
          label="Requirement"
        />

        <Grid
          className="student-form__button-grid"
          item
          xl={2}
          lg={2}
          md={12}
          s={12}
          xs={12}
        >
          <Link to={"./../orgProfile"}>
          <Button
            variant="contained"
            color="primary"
            onClick={addPost.bind(this, queueComponent, this.state)}
            className="student-form__submit-button"
          >
            Submit
          </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default PostForm;
