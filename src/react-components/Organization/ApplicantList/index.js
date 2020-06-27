import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import SingleApplicant from "./../SingleApplicant";
import OrgNav from "../../OrgNav";
import Footer from './../../Footer';
import {uid} from "react-uid";
import "./styles.css";

/* Component for the List of Posts */
class ApplicantList extends React.Component {
  
  render() {
    const {applicants, context} = this.props;
    return (
    <div>
        <OrgNav/>
        <div id="fh5co-started">
      <div className="container">
        <h1 className='h'>All Applicants</h1>
        </div>
        </div>
        <div id="fh5co-blog" className="fh5co-bg-section">
        <div className="container">
      <Table style={{ width: '80%' }}>
        <TableBody>
        {applicants.map(applicant => (
            <SingleApplicant
              key = {uid(applicant)}
              id={applicant.id}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
              status={applicant.status}
              context={context}
            />
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default ApplicantList;