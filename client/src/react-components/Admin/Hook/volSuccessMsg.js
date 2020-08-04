import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {adminUpdateVolProfile} from '../../../actions/adminUpdateVolProfile';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(6),
      },
    },
  }));


export default function VolUpdateSucessSnackbars(props){
    
    
    const queueComponent= props.queueComponent;
    const newInfo = props.newInfo;
    const id = props.id;


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClick =(e) => {
      setOpen(true);
      adminUpdateVolProfile(queueComponent, newInfo, id);
    } 
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return(
      <div className={classes.root}>
      <button type='button' className="btn btn-primary updatebutton" 
        onClick={handleClick}>
      Update Profile
      </button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        Update Successfully!
      </Alert>
    </Snackbar>
    </div>)
  };



  