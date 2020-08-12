import React from "react";
import Button from "@material-ui/core/Button";
import OrgNav from './../../OrgNav';
import Footer from './../../Footer';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { updateOrgProfile } from "../../../actions/updateOrgProfile";

/* Component for the Profile Form */
class ProfileForm extends React.Component {
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  //default value should be requested from the database
  state = {
    name: "",
    email: "",
    website: "",
    intro: "",
    isLoading: false
  } 
  componentDidMount() {
    const url = `/organization/get_profile/${this.props.app.state.currentUserId}`  
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
        name: json.name,
        email: json.email,
        website: json.website,
        intro: json.info,
        isLoading: true });
      })
      .catch(error => {
          console.log(error);
      });
}
  render() {  
    const app = this.props.app
    return (
      <div>
      <OrgNav app={app}/>
      <div id="fh5co-started">
      <h1 className='header'>Update your profile</h1>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
      { this.state.isLoading ? <div className="contain">
        <TextField
            name="name"
            defaultValue={this.state.name}
            className="input"
            margin='normal'
            variant="filled"
            disabled
            InputProps={{style:{fontSize: 20}}}
            InputLabelProps={{style: {fontSize: 20} }}
          />
        <TextField
            name="email"
            defaultValue={this.state.email}
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
        </div>:null }
        <div className="contain">
          <Link to="/organization/profile">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={updateOrgProfile.bind(this, app.state.currentUserId, this.state)}
            style={{fontSize: 20}}
          >
            Submit
          </Button>
          </Link>
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default ProfileForm;
