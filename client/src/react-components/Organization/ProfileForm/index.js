import React from "react";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import OrgNav from './../../OrgNav';
import Footer from './../../Footer';
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { updateOrgProfile } from "../../../actions/updateOrgProfile";

const styles = theme => ({
  typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 16,
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:300,
  },
  dense: {
    marginTop: 16,
  },
  inputResize: {
      fontSize:16,
      lineHeight:1.6,
  },
  labelResize: {
      fontSize:14
  },
  fullTextField: {
      
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
});
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
    const { classes } = this.props;
    return (
      <div>
      <OrgNav app={app}/>
      <div id="fh5co-started">
      <h1 className='header'>Update your profile</h1>
      </div>
      <div id="fh5co-services" className="fh5co-bg-section border-bottom">
      { this.state.isLoading ? <div className="contain">
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
          label="Name"
          className={classes.textField}
          defaultValue={this.state.name || ""}
          margin="normal"
          variant="outlined"
          disabled
          multiline
          rows={1}
          InputProps={
              {
                  classes:{
                      input: classes.inputResize,
                  },
                  readOnly:true,
              }
          }
          InputLabelProps={{
              classes:{
                  root: classes.labelResize,
              }
          }}
        />
      <TextField
          label="Email"
          disabled
          multiline
          className={classes.textField}
          defaultValue={this.state.email || ""}
          margin="normal"
          variant="outlined"
          rows={1}
          InputProps={
              {
                  classes:{
                      input: classes.inputResize,
                  },
                  readOnly:true,
              }
          }
          InputLabelProps={{
              classes:{
                  root: classes.labelResize,
              }
          }}
        />
      <TextField
          name="website"
          label="Website"
          className={classes.fullTextField}
          defaultValue={this.state.website || ""}
          onChange={this.handleInputChange}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          InputProps={
              {
                  classes:{
                      input: classes.inputResize,
                  },

              }
          }
          InputLabelProps={{
              classes:{
                  root: classes.labelResize,
              }
          }}
        />
    <TextField
          name="intro"
          label="Introduction"
          className={classes.fullTextField}
          defaultValue={this.state.intro || ""}
          onChange={this.handleInputChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          InputProps={
              {
                  classes:{
                      input: classes.inputResize,
                  },

              }
          }
          InputLabelProps={{
              classes:{
                  root: classes.labelResize,
              }
          }}
        />
        </form>
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

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProfileForm);
