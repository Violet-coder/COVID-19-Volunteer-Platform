/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 20,
    '& > span': {
      marginRight: 10,
      fontSize: 20,
    },
  },
});
const datasets = [
  [
    { title: 'IT'},
    { title: 'driver'},
    { title: 'laborer'},
    { title: 'finance'},
    { title: 'food'},
    { title: 'arts'},
    { title: 'healthcare'},
    { title: 'retail'},
    { title: 'education'},
    { title: 'other'}
  ],
  [
    { title: 'Ottawa'},
    { title: 'Edmonton'},
    { title: 'Victoria'},
    { title: 'Winnipeg'},
    { title: 'Fredericton'},
    { title: "St. John's"},
    { title: 'Halifax'},
    { title: 'Toronto'},
    { title: 'Quebec City'},
    { title: 'Regina'},
    { title: 'Yellowknife'},
    { title: 'Iqaluit'},
    { title: 'Whitehorse'},
    { title: 'other'}
  ]
];

export default function TitleSelect(props) {
  const classes = useStyles();
  const { context, label, dataset, id } = props;
  const setJob = (event, newValue) => {
    try{
    context.setState({
      jobTitle: newValue.title
    });
  } catch(error){
    context.setState({
      jobTitle: ""
    });
  }}
  const setLocation = (event, newValue) => {
    try{
    context.setState({
      location: newValue.title
    });
  } catch(error){
    context.setState({
      location: ""
    });
  }}
  if (dataset=='job') {
   var optionSet=datasets[0]
   var setFunc = setJob
  }
  else if (dataset=='location') {
    var optionSet=datasets[1]
    var setFunc = setLocation
  }
  return (
    <Autocomplete
      id={id}
      style={{ width: "100%" }}
      options={optionSet}
      classes={{
        option: classes.option,
      }}
      onChange={(event, newValue) => {
        setFunc(event, newValue)}
      }
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(option) => (
        <React.Fragment>
          
          {option.title}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputLabelProps={{style: {fontSize: 20} }}
          required
          variant="filled"
          inputProps={{
            ...params.inputProps,
            style: {fontSize: 20},
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

