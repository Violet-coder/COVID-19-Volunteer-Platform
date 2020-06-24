import React from "react";
import Button from "@material-ui/core/Button";
import OrgNav from './../../OrgNav';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { updateOrgProfile } from "../../../actions/updateOrgProfile";
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
    website: this.props.info.website,
    intro: this.props.info.intro
  } 
  render() {  
    const {info, infoComponent} = this.props;
    return (
      <div>
      <OrgNav/>
      <div id="fh5co-started">
      <h1 className='header'>Update your profile</h1>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className="contain">
        <TextField
            name="name"
            defaultValue={info.name}
            className="input"
            margin='normal'
            variant="filled"
            disabled
            InputProps={{style:{fontSize: 20}}}
            InputLabelProps={{style: {fontSize: 20} }}
          />
        <TextField
            name="email"
            defaultValue={info.email}
            className="input"
            margin='normal'
            variant="filled"
            disabled
            InputProps={{style:{fontSize: 20}}}
            InputLabelProps={{style: {fontSize: 20} }}
          />
        <TextField
            name="website"
            label="Website"
            defaultValue={this.state.website || ""}
            className="input"
            margin='normal'
            onChange={this.handleInputChange}
            multiline
            variant="filled"
            InputProps={{style:{fontSize: 20}}}
            InputLabelProps={{style: {fontSize: 20} }}
          />
        <TextField
          name="intro"
          defaultValue={this.state.intro || ""}
          className="input"
          margin='normal'
          onChange={this.handleInputChange}
          multiline
          variant="filled"
          InputProps={{style:{fontSize: 20}}}
          InputLabelProps={{style: {fontSize: 20} }}
          label="Introduction"
        />
        </div>
        <div className="contain">
          <Link to="/organization/profile">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={updateOrgProfile.bind(this, infoComponent, this.state)}
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
