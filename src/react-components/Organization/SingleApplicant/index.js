import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import "./styles.css";
class Applicant extends React.Component {

  render() {
    const { name, rank ,jobName} = this.props;

    return (
      <TableRow key={name} style={{ width: "100%"}}>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          {name}
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          {jobName}
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          {rank}
        </TableCell>

        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="primary"
          >
            detail
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
          >
            reject
          </Button>
          </TableCell>
          <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="primary"
          >
            accept
          </Button>
        </TableCell>        
      </TableRow>
    );
  }
}

export default Applicant;
