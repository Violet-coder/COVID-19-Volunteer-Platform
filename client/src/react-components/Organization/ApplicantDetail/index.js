import React from 'react';
import OrgNav from '../../OrgNav';
import Footer from './../../Footer';
import VolProfileForm from "../../Admin/Users/VolProfileForm";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { BackButton } from '../Hook/backButton'
import { acceptApplicant, rejectApplicant } from "../../../actions/decision";
import "./styles.css";

class ApplicantDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      isLoading: false,
      user: {}
    };
  }
  componentDidMount() {
    const app_id = this.props.matchProps.match.params.id
    let vol_id
    let url = `/organization/get_applications/${app_id}`  
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
        url = `/organization/get_vol_profile/${vol_id}`
        console.log(url)
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get applications");
            }
        })
        .then(user => {
          this.setState({ user: user, isLoading: true });
        })
        .catch(error => {
            console.log(error);
        });
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
        let user = this.state.user
        if (this.state.isLoading) {
          user = this.state.user
          if (!user.desc) {
              user.desc=""
          }
          if(!user.links) {
              user.links=""
          }
          if(!user.location){
              user.location = ""
          }
          if (!user.skills){
              user.skills = {
                  analytics:false,
                  biology:false,
                  biotech:false,
                  community:false,
                  content:false,
                  data:false,
                  finance:false,
                  helpdesk:false,
                  manufacturing:false,
                  marketing:false,
                  mechanics:false,
                  IT:false,
                  anything:false
              }
          }
          if (!user.availability){
              user.availability={
                  option1:false,
                  option2:false,
                  option3:false,
                  option4:false,
                  option5:false
              }
          }}
        return(
        
            <div>
                <OrgNav app={app}/>
                { this.state.isLoading ? <VolProfileForm volunteer={user}/>:null }
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