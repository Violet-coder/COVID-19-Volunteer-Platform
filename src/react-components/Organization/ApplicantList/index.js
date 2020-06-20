import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SingleApplicant from "./../SingleApplicant";
import OrgNav from "../../OrgNav";

//import "./styles.css";

/* Component for the List of Posts */
class ApplicantList extends React.Component {
  render() {
    const {applicants} = this.props;
    return (
    <div>
        <OrgNav/>
        <h1>Applicants</h1>
      <Table className="student-list">
        <TableBody>
        <TableRow className="student">
        <TableCell component="th" scope="row">
          Name
        </TableCell>
        <TableCell component="th" scope="row">
          Job
        </TableCell>
        <TableCell component="th" scope="row">
          Rank
        </TableCell> 
        <TableCell component="th" scope="row">
        </TableCell>    
        <TableCell component="th" scope="row">
        </TableCell>  
        <TableCell component="th" scope="row">
        </TableCell>      
      </TableRow>
        {applicants.map(applicant => (
            <SingleApplicant
              key={uid(
                applicant
              )}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
            />
          ))}
        </TableBody>
      </Table>
    </div>
    );
  }
}

export default ApplicantList;