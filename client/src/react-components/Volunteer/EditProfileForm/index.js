import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl } from '@material-ui/core';
import { updateVolProfile } from '../../../actions/updateVolProfile';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'
import './styles.css'


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
    menu: {
      width: 200,
    },
    inputResize: {
        fontSize:16,
        lineHeight:1.6,
    },
    labelResize: {
        fontSize:14
    },
    fullTextField: {
        
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    checkbox: {
        fontSize:20,
    },
    formControl: {
        margin: theme.spacing(3),
      },

    formControlLabel: { 
        fontSize:16,
        fontWeight:600,
        color:'#303030',
        marginRight: theme.spacing.unit,
     }
  });


class EditProfileForm extends React.Component{
        
    render(){
        const { classes } = this.props;
        //console.log("form prop", this.props)
        const {
            id,
            firstName, 
            lastName, 
            email,
            links,
            location,
            desc,
            skills,
            availability,
        } = this.props.user
       
          let newInfo = this.props.newInfo
        // console.log("form new state", this.props.state)
        // console.log("newInfo",newInfo)

        const handleInputChange = this.props.handleInputChange;
        const handleCheckboxChange = this.props.handleCheckboxChange;
        
        const queueComponent = this.props.queueComponent;
        // console.log("edit form", queueComponent)




        return(
        <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className='container'>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          className={classes.textField}
          defaultValue={firstName || ""}
          margin="normal"
          variant="outlined"
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
        <TextField
          id="lastName"
          label="Last Name"
          className={classes.textField}
          defaultValue={lastName || ""}
          margin="normal"
          variant="outlined"
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

        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          defaultValue={email || ""}
          margin="normal"
          variant="outlined"
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

        <TextField
          id="location"
          label="location"
          className={classes.textField}
          defaultValue={location || ""}
          onChange={handleInputChange}
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

        <TextField
          id="links"
          label="Links"
          className={classes.fullTextField}
          defaultValue={links || ""}
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

        <TextField
          id="desc"
          label="About you"
          className={classes.fullTextField}
          defaultValue={desc || ""}
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
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.formControlLabel} >Skills</FormLabel>
        <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox
                    onChange={handleCheckboxChange}
                    className={classes.checkbox}                 
                    checked={skills.analytics}
                    id='analytics'
                    color='primary'
                    inputProps={{
                        readOnly: false,
                    }}
                    // disabled    
                />
                }
                label={<span className={classes.formControlLabel}>Analytics</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.biology}
                    id='biology'
                    color='primary'
                    inputProps={{
                        readOnly: false,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Biology</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.biotech}
                    id='biotech'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Biotech</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.community}
                    id='community'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Community</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.content}
                    id='content'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Content</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.data}
                    id='data'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Data</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.finance}
                    id='finance'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Finance</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.helpdesk}
                    id='helpdesk'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Helpdesk</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.manufacturing}
                    id='manufacturing'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Manufacturing</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.marketing}
                    id='marketing'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Marketing</span>}
            />
            
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.mechanics}
                    id='mechanics'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Mechanics</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.IT}
                    id='IT'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>IT&Engineering</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={skills.anything}
                    id='anything'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>Anything</span>}
            />


        </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.formControlLabel} >Availability</FormLabel>
            <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={availability.option1}
                    id='option1'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>1-2 hours a day</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={availability.option2}
                    id='option2'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}
                    // disabled     
                />
                }
                label={<span className={classes.formControlLabel}>2-4 hours a day</span>}
            />
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={availability.option3}
                    id='option3'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }} 
                    // disabled    
                />
                }
                label={<span className={classes.formControlLabel}>more than 4 hours a day</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={availability.option4}
                    id='option4'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}  
                    // disabled   
                />
                }
                label={<span className={classes.formControlLabel}>only weekends</span>}
            />
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    onChange={handleCheckboxChange}
                    checked={availability.option5}
                    id='option5'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}  
                    // disabled   
                />
                }
                label={<span className={classes.formControlLabel}>anytime</span>}
            />
            
            </FormGroup>
        
            
        </FormControl>   
            {console.log("new Info 1111111", newInfo)}
                 
            <span id="updateform" ><Link to={{pathname:`/volunteer/myprofile`}}><Button  className="updatebutton" variant="contained" color="secondary" onClick={updateVolProfile.bind(this, this.props.user, newInfo)}  >Update My Profile</Button></Link></span>
            {console.log("new Info 222222", newInfo)}
        
           
      </form>
      </div>
      </div>
        );
    }
}
            
EditProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(EditProfileForm);