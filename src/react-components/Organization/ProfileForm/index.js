import React from "react";
import Button from "@material-ui/core/Button";
import Input from "./../../Input";
import OrgNav from './../../OrgNav';
import RequirementHook from '../Hook/requirement';
import TitleSelect from '../Hook/jobTitle';
import { addPost } from "../../../actions/postList";
import { Link } from "react-router-dom";
//import "./styles.css";
/* Component for the Post Form */
class ProfileForm extends React.Component {
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  state = {
    website: "",
    location: "",
    intro: ""
  } 
  render() {  
    const {info} = this.props;
    return (
      <div>
      <OrgNav/>
      <div id="fh5co-started">
      <h1 className='header'>Update your profile</h1>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="contain">
        <Input
          name="website"
          value={this.state.website}
          onChange={this.handleInputChange}
          label="Website"
        />

        <Input
          name="intro"
          value={this.state.intro}
          onChange={this.handleInputChange}
          label="Introduction"
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
          <Link to="./../organization/profile">
          <Button
            variant="contained"
            color="primary"
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

export default ProfileForm;
