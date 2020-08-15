import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { fade,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
        color:"black"
    },
    labelResize: {
        fontSize:16,
    },
    fullTextField: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover':{
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        }
        
    },
  });


class OrgProfileForm extends React.Component{
    render(){
        const {classes} = this.props;
        const {
            name,
            email,
            website,
            info,
        } = this.props.organization;

        return(
            <div id="profile-services" className="fh5co-bg-section ">
            <div className='container'>
                <div className="row row-pb-md">
                    <div className="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-heading">
                            <h2>User Profile</h2>
                            <p>View organization user information.</p>
                        </div>
                    </div>
                </div>`
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="orgName"
                label="Orgnization Name"
                className={classes.fullTextField}
                value={name || ""}
                fullWidth
                disabled
                variant="outlined"
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
                <br />
                <TextField
                id="email"
                label="Email"
                className={classes.fullTextField}
                value={email || ""}
                margin="normal"
                variant="outlined"
                fullWidth
                disabled
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
                <br />

                <TextField
                id="website"
                label="Website"
                className={classes.fullTextField}
                value={website || ""}
                margin="normal"
                variant="outlined"
                fullWidth
                disabled
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
                <br />
                 
                <TextField
                id="introduction"
                label="Introduction"
                className={classes.fullTextField}
                value={info || ""}
                margin="normal"
                variant="outlined"
                fullWidth
                disabled
                multiline
                rows={4}
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
                <br />

            </form>
            </div>
            </div>
        )
    }


}
OrgProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(OrgProfileForm);