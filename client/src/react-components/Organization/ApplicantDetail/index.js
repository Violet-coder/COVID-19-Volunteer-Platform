import React from 'react';
import OrgNav from '../../OrgNav';
import Footer from './../../Footer';
import VolProfileForm from "../../Admin/Users/VolProfileForm";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { BackButton } from '../Hook/backButton'
import { acceptApplicant, rejectApplicant } from "../../../actions/decision";
import "./styles.css";
/*
const volusers=[
    {
    id: 1,
    firstName:"John", 
    lastName:"Smith", 
    email:"johnsmith@user.com",
    links:"github.com/johnsmith",
    location:"Toronto",
    desc:"Software Engineer",
    skills:{
        analytics: false,
        biology: false,
        biotech: false,
        community: false,
        content: false,
        data: false,
        finance: true,
        helpdesk: false,
        manufacturing: false,
        marketing: false,
        mechanics: false,
        IT: true,
        anything: false,
        },
    availability:{
        option1: true,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
    }
    },
    {
    id:2,
    firstName:"Maria", 
    lastName:"Hernandz", 
    email:"mariahernandez@user.com",
    links:"github.com/maria",
    location:"Toronto",
    desc:"Data analytics",
    skills:{
        analytics: true,
        biology: false,
        biotech: false,
        community: false,
        content: false,
        data: false,
        finance: false,
        helpdesk: false,
        manufacturing: false,
        marketing: true,
        mechanics: false,
        IT: true,
        anything: false,
        },
    availability:{
        option1: true,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
    }
    },
    {
      id:3,
      firstName:"Hannah", 
      lastName:"Logan", 
      email:"hannahlogan@user.com",
      links:"github.com/hannah",
      location:"Toronto",
      desc:"Food industry",
      skills:{
          analytics: false,
          biology: false,
          biotech: false,
          community: false,
          content: false,
          data: false,
          finance: false,
          helpdesk: true,
          manufacturing: false,
          marketing: true,
          mechanics: false,
          IT: true,
          anything: false,
          },
      availability:{
          option1: true,
          option2: false,
          option3: false,
          option4: false,
          option5: false,
    }
    },
    {
      id:4,
      firstName:"Janice", 
      lastName:"Bingham", 
      email:"janicebingham@user.com",
      links:"github.com/janice",
      location:"Toronto",
      desc:"Front-desk",
      skills:{
          analytics: false,
          biology: false,
          biotech: false,
          community: true,
          content: false,
          data: false,
          finance: false,
          helpdesk: true,
          manufacturing: false,
          marketing: false,
          mechanics: false,
          IT: true,
          anything: false,
          },
      availability:{
          option1: true,
          option2: false,
          option3: false,
          option4: false,
          option5: false,
      }
      }

]
*/
class ApplicantDetail extends React.Component {
  
  //applicants information should be requested from the database
  //rejecting or accepting an applicant should make a change to the database
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      isLoading: false,
    };
  }
  componentDidMount() {
    const app_id = this.props.matchProps.match.params.id
    let vol_id
    let url = `/organization/get_application/${app_id}`  
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get applications");
          }
      })
      .then(json => {
        this.setState({ status: json.applicant_status });
        vol_id = json.applicant_id
      })
      .catch(error => {
          console.log(error);
      });
      url = `/organization/get_vol_profile/${vol_id}` 
      fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              alert("Could not get applications");
          }
      })
      .then(json => {
        this.setState({ user: json, isLoading: true });
      })
      .catch(error => {
          console.log(error);
      });
}
      checkState = (id) => {
        if (this.state.status==='rejected') {
          return (
            <div className='buttons'>
            <p className='rejected'>Rejected</p>
            </div>
          )
        }
        if (this.state.status==='accepted') {
          return (
            <div className='buttons'>
            <p className='accepted'>Accepted</p>
            </div>
          )
        }
        else if (this.state.status==='pending') {
          return (
            <ButtonGroup>
            <Button
            variant="contained"
            color="secondary"
            style={{fontSize: 12}}
            onClick={()=>{
                this.reject(id)
              }}
        >
            reject
            </Button>
            <Button
            variant="contained"
            color="primary"
            style={{fontSize: 12}}
            onClick={()=>{
                this.accept(id)
              }}
        >
            accept
            </Button>
            </ButtonGroup>
          )
        }
        
      }
    accept = (id) => {
        if (window.confirm("Are you sure you want to accept this candidate?")) {
          this.setState({
            status: 'accepted'
          })
      acceptApplicant(id)
      }}
      reject = (id) => {
        if (window.confirm("Are you sure you want to reject this candidate?")) {
          this.setState({
            status: 'rejected'
          })
      rejectApplicant(id)
      }}
    render(){
        const app = this.props.app
        const app_id = this.props.matchProps.match.params.id
        //const user = volusers.find((u) => u.id===parseInt(id))
        return(
        
            <div>
                <OrgNav app={app}/>
                { this.state.isLoading ? <VolProfileForm user={this.state.user}/>:null }
                <div className='buttons'>
                {this.checkState(app_id)}
                <BackButton/>
            </div>
                <Footer/>
            </div>
        )
    }
}

export default ApplicantDetail;