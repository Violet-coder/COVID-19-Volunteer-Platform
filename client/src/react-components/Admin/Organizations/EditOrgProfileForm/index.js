import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {BackButton} from '../../Hook/backButton';
import OrgUpdateSuccessSnackbars from '../../Hook/orgSuccessMsg';
import './styles.css'



const styles = theme => ({
    typography: {
        fontSize: 16,
      },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width:300,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    inputResize: {
        fontSize:20,
        lineHeight:2,
    },
    labelResize: {
        fontSize:16,
    },
    fullTextField: {
        
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
    },
  });

class EditOrgProfileForm extends React.Component{
    render(){
        const {classes} = this.props;
        const {
            name,
            email,
            website,
            intro
        } = this.props.organization;
        const handleInputChange = this.props.handleInputChange;
        const newInfo = this.props.state;
        const orgId = this.props.orgId

        return(
            <div id="profile-services" className="fh5co-bg-section ">
            <div className='container'>
                <div className="row row-pb-md">
                    <div className="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-heading">
                            <h2>User Profile</h2>
                            <p>Manage organization user information.</p>
                        </div>
                    </div>
                </div>`
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="orgName"
                label="Orgnization Name"
                className={classes.fullTextField}
                defaultValue={name || ""}
                onChange={handleInputChange}
                fullWidth
                disabled
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
                <br />
                <TextField
                id="email"
                label="Email"
                className={classes.fullTextField}
                defaultValue={email || ""}
                disabled
                margin="normal"
                variant="outlined"
                fullWidth
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
                <br />

                <TextField
                id="website"
                label="Website"
                className={classes.fullTextField}
                defaultValue={website || ""}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                fullWidth
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
                <br />
                 
                <TextField
                id="introduction"
                label="Introduction"
                className={classes.fullTextField}
                defaultValue={intro || ""}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
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
                <br />

            {/* <div id='updateform'><button  type='button' className="btn btn-primary updatebutton" onClick={adminUpdateOrgProfile.bind(this, queueComponent, newInfo,id)}  >Update Profile</button>
            <BackButton />
            </div> */}

            <span id = 'updateform'><OrgUpdateSuccessSnackbars newInfo={newInfo} id={orgId} />
            <BackButton /></span>
            {/* We will write the updated data to database in phase 2. Now just modify the queueComponent state. */}
            </form>
            </div>
            </div>
        )
    }


}
EditOrgProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(EditOrgProfileForm);