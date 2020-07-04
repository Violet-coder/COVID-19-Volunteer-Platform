import React from "react";
import SingleApplicant from "./../SingleApplicant";
import OrgNav from "../../OrgNav";
import Footer from './../../Footer';
import {uid} from "react-uid";
import "./styles.css";

/* Component for the List of Applicants */
class ApplicantList extends React.Component {
  
  render() {
    //applicants information should be requested from the database
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
        <div className="container" id='single-applicant'>

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

      </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default ApplicantList;