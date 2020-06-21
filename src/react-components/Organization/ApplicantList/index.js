import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import SingleApplicant from "./../SingleApplicant";
import OrgNav from "../../OrgNav";
import "./styles.css";

/* Component for the List of Posts */
class ApplicantList extends React.Component {
  
  render() {
    const {applicants} = this.props;
    return (
    <div>
        <OrgNav/>
        <div id="fh5co-started">
      <div class="container">
        <h1 class='h'>All Applicants</h1>
        </div>
        </div>
        <div id="fh5co-services" class="fh5co-bg-section border-bottom">
        <div class="container">
      <Table style={{ width: '80%' }}>
        <TableBody>
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
      </div>
    </div>
    );
  }
}

export default ApplicantList;