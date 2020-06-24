import React from 'react';
import OrgNav from '../../OrgNav';
import VolProfileForm from "../../Admin/Users/VolProfileForm";
import Button from "@material-ui/core/Button";
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
    },
    },

]
class ApplicantDetail extends React.Component {
    state = {
        status: 'pending'
      }
      checkState = () => {
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
            <div className='buttons'>
            <Button
            variant="contained"
            color="secondary"
            style={{fontSize: 12}}
            onClick={()=>{
                this.reject()
              }}
        >
            reject
            </Button>
            <Button
            variant="contained"
            color="primary"
            style={{fontSize: 12}}
            onClick={()=>{
                this.accept()
              }}
        >
            accept
            </Button>
            </div>
          )
        }
        
      }
    accept = () => {
        if (window.confirm("Are you sure you want to accept this candidate?")) {
          this.setState({
            status: 'accepted'
          })
      }}
      reject = () => {
        if (window.confirm("Are you sure you want to reject this candidate?")) {
          this.setState({
            status: 'rejected'
          })
      }}
    render(){
        const {id} = this.props.match.params
        const user = volusers.find((u) => u.id==id)
        return(
        
            <div>
                <OrgNav />
                <VolProfileForm user={user}/>
                {this.checkState()}
            </div>
        )
    }
}

export default ApplicantDetail;