import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';


import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl } from '@material-ui/core';


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


class VolProfileForm extends React.Component{
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    
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

        //console.log("availability", availability)

        return(
        <div id="fh5co-services" className="fh5co-bg-section border-bottom">
        <div className='container'>
            <div className="row row-pb-md">
                <div className="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
                    <div className="fh5co-heading">
                        <h2>User Profile</h2>
                        <p>View volunteer users' information.</p>
                    </div>
                </div>
            </div>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          className={classes.textField}
          value={firstName || ""}
          onChange={this.handleChange('name')}
          margin="normal"
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
        <TextField
          id="lastName"
          label="Last Name"
          className={classes.textField}
          value={lastName || ""}
          onChange={this.handleChange('name')}
          margin="normal"
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

        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={email || ""}
          onChange={this.handleChange('name')}
          margin="normal"
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

        <TextField
          id="location"
          label="location"
          className={classes.textField}
          value={location || ""}
          onChange={this.handleChange('name')}
          margin="normal"
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

        <TextField
          id="links"
          label="Links"
          className={classes.fullTextField}
          value={links || ""}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          fullWidth
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
          id="description"
          label="About you"
          className={classes.fullTextField}
          value={desc || ""}
          onChange={this.handleChange('name')}
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
                  readOnly:true,
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
                    className={classes.checkbox}
                    checked={skills.analytics}
                    name='analytics'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Analytics</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.biology}
                    name='biology'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Biology</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.biotech}
                    name='biotech'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Biotech</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.community}
                    name='community'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Community</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.content}
                    name='content'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Content</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.data}
                    name='data'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Data</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.finance}
                    name='finance'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Finance</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.helpdesk}
                    name='helpdesk'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Helpdesk</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.manufacturing}
                    name='manufacturing'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Manufacturing</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.marketing}
                    name='marketing'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Marketing</span>}
            />
            
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.mechanics}
                    name='mechanics'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Mechanics</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.IT}
                    name='IT'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>IT&Engineering</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={skills.anything}
                    name='anything'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>Anything</span>}
            />


        </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.formControlLabel} >Availabitly</FormLabel>
            <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={availability.option1}
                    name='option1'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>1-2 hours a day</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={availability.option2}
                    name='option2'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>2-4 hours a day</span>}
            />
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={availability.option3}
                    name='option3'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>more than 4 hours a day</span>}
            />

            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={availability.option4}
                    name='option4'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>only weekends</span>}
            />
            <FormControlLabel
                control={
                <Checkbox
                    className={classes.checkbox}
                    checked={availability.option5}
                    name='option5'
                    color='primary'
                    inputProps={{
                        readOnly: true,
                    }}    
                />
                }
                label={<span className={classes.formControlLabel}>anytime</span>}
            />
            
            </FormGroup>
            
        </FormControl>   
      </form>
      </div>
      </div>
        );
    }
}
            
VolProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(VolProfileForm);