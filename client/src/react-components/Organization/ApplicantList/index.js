import React from "react";
import SingleApplicant from "./../SingleApplicant";
import OrgNav from "../../OrgNav";
import Footer from './../../Footer';
import {uid} from "react-uid";
import "./styles.css";

/* Component for the List of Applicants */
class ApplicantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const url = `/organization/get_applicants/${this.props.app.state.currentUserId}`  
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get applications");
          }
      })
      .then(json => {
        this.setState({ applicants: json, isLoading: true });
      })
      .catch(error => {
          console.log(error);
      });
}
  render() {
    //applicants information should be requested from the database
    const {applicants, context} = this.props;
    const app = this.props.app
    return (
    <div>
        <OrgNav app={app}/>
        <div id="fh5co-started">
      <div className="container">
        <h1 className='h'>All Applicants</h1>
        </div>
        </div>
        <div id="fh5co-blog" className="fh5co-bg-section">
        { this.state.isLoading ? <div className="container" id='single-applicant'>

        {this.state.applicants.map(applicant => (
            <SingleApplicant
            key = {uid(applicant)}
            app_id = {applicant._id}
            id={applicant.applicant_id}
            name={applicant.applicant_name}
            rank={applicant.applicant_rank}
            jobName= "Post Name"
            status={applicant.applicant_status}
            context={this}
            />
          ))}

      </div>:null }
      </div>
      <Footer/>
    </div>
    );
  }
}

export default ApplicantList;