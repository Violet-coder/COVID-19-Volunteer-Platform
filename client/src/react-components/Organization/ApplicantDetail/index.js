import React from 'react';
import OrgNav from '../../OrgNav';
import Footer from './../../Footer';
import VolProfileForm from "../../Admin/Users/VolProfileForm";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { BackButton } from '../Hook/backButton'
import "./styles.css";
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
class ApplicantDetail extends React.Component {
  id = this.props.matchProps.match.params.id
  //applicants information should be requested from the database
  //rejecting or accepting an applicant should make a change to the database
  applicant = this.props.applicants.find((u) => u.id===parseInt(this.id))
  
    state = {
        status: this.applicant.status
      }
      checkState = (context, id) => {
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
                this.reject(context, id)
              }}
        >
            reject
            </Button>
            <Button
            variant="contained"
            color="primary"
            style={{fontSize: 12}}
            onClick={()=>{
                this.accept(context, id)
              }}
        >
            accept
            </Button>
            </ButtonGroup>
          )
        }
        
      }
    accept = (context, id) => {
        if (window.confirm("Are you sure you want to accept this candidate?")) {
          this.setState({
            status: 'accepted'
          })
          let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].id===id) {
          appList[i].status='accepted'
          break
        }
      }
      context.setState({
        applicants: appList
      })
      }}
      reject = (context, id) => {
        if (window.confirm("Are you sure you want to reject this candidate?")) {
          this.setState({
            status: 'rejected'
          })
          let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].id===id) {
          appList[i].status='rejected'
          break
        }
      }
      context.setState({
        applicants: appList
      })
      }}
    render(){
        const id = this.props.matchProps.match.params.id
        const context = this.props.context
        const user = volusers.find((u) => u.id===parseInt(id))
        return(
        
            <div>
                <OrgNav />
                <VolProfileForm user={user}/>
                <div className='buttons'>
                {this.checkState(context, parseInt(id))}
                <BackButton/>
            </div>
                <Footer/>
            </div>
        )
    }
}

export default ApplicantDetail;