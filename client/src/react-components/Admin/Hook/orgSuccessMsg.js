import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {adminUpdateOrgProfile} from '../../../actions/adminUpdateOrgProfile';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      marginLeft: theme.spacing(0)
    },
  },
}));

export default function OrgUpdateSuccessSnackbars(props) {
  const queueComponent= props.queueComponent;
  const newInfo = props.newInfo;
  const id = props.id;

  const classes = useStyles();
  const [state, setState] = React.useState({
    open:false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick =() => {
    setState({
      open:true,
    });
    adminUpdateOrgProfile(queueComponent, newInfo, id);
  } 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({
      open:false,
    });
  };
  
  return(
    <div className={classes.root}>
    <button type='button' className="btn btn-primary updatebutton" onClick={
     handleClick }>
    Update Profile
    </button>
    <Snackbar open={state.open} autoHideDuration={3000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success">
      Update Successfully!
    </Alert>
  </Snackbar>
  </div>
  );
};

