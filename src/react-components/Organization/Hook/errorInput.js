import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ErrorTextField(props) {
  const { label, value, onChange, name } = props;
  return (

        <TextField
          error
          name={name}
          onChange={onChange}
          label={label}
          defaultValue={value || ""}
          helperText="Cannot be empty."
          className="input"
          margin='normal'
          variant="filled"
          multiline
          required
          InputProps={{style:{fontSize: 20}}}
          InputLabelProps={{style: {fontSize: 20} }}
          FormHelperTextProps={{style: {fontSize: 13} }}
        />

  );
}