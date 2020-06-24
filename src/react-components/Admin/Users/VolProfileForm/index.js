import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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


class VolUserProfile extends React.Component{
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
        checklist:{
            analytics: true,
            biology: false,
            biotech: false,
            community: false,
            content: false,
            data: false,
            finance: false,
            helpdesk: false,
            manufacturing: false,
            marketing: true,
            mechanics: false,
            IT: true,
            anyting: false,
        }
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    
    render(){
        const { classes } = this.props;


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
          value={this.state.name}
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
          value={this.state.name}
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
          value={this.state.name}
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
          value={this.state.name}
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
          value={this.state.name}
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
          value={this.state.name}
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
                    checked={this.state.checklist.analytics}
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
                    checked={this.state.checklist.biology}
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
                    checked={this.state.checklist.biotech}
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
                    checked={this.state.checklist.community}
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
                    checked={this.state.checklist.content}
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
                    checked={this.state.checklist.data}
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
                    checked={this.state.checklist.finance}
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
                    checked={this.state.checklist.helpdesk}
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
                    checked={this.state.checklist.manufacturing}
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
                    checked={this.state.checklist.marketing}
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
                    checked={this.state.checklist.mechanics}
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
                    checked={this.state.checklist.IT}
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
                    checked={this.state.checklist.anything}
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
      </form>
      </div>
      </div>
        );
    }
}
            
VolUserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(VolUserProfile);