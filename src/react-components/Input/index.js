import React from "react";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

/* Component for the Input field, a wrapper around MUI TextField */
class Input extends React.Component {

  render() {
    const { label, value, onChange, name } = this.props;
    return (
        <TextField
          name={name}
          label={label}
          defaultValue={value || ""}
          className="input"
          margin='normal'
          onChange={onChange}
          multiline
          required
          variant="filled"
          InputProps={{style:{fontSize: 20}}}
          InputLabelProps={{style: {fontSize: 20} }}
        />
    );
  }
}

export default Input;

