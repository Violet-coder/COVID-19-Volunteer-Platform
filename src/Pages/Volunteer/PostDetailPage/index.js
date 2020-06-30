import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import PostDetail from "../../../react-components/PostDetail";
import Button from '@material-ui/core/Button';
import { addApplication } from "../../../actions/applicationList"
import "./styles.css"
import { Link} from 'react-router-dom';






import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"
const posts=[
    { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",orgId:5,location: "Toronto", id:1},
      { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",orgId:5,location: "Vancouver",id:2},
      { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",orgId:7,location: "Toronto", id:3},
      { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",orgId:8,location: "Vancouver", id:4},
      { name: 'THIS SATURDAY - Contactless Delivery Driver Volunteers', 
              description: "We are looking for volunteer drivers, with their own vehicle, to deliver grocery care packages to families that are unable to leave their home this Saturday June 27th", 
              requirement: "driver's license, multi-task", 
              title: "Driver", status: "Under Review", date: "6/27/2020", organization:"Hand Up from Hunger Toronto",orgId:9,location: "Toronto", id:5},
  ]



class PostDetailPage extends React.Component {

    
    render(){
        // this.componentWillMount()
        const {id} = this.props.match.params

        const post = posts.find((p) => p.id==id)
        // console.log("state", this.props.location)
        
        const queueComponent = this.props.location.query
        // console.log("queueComponent",queueComponent)
        
        
    
        return(
            <div id="page">
            <Navbar user="Application"/>
            { console.log("queueComponent",queueComponent)}
            <Header_appli title={post.name} subtitle={post.organization}/>
            <div id="fh5co-blog" class="fh5co-bg-section">
            <div class="container">
            <PostDetail post={post}/>
            {/* <PostDetail_button  application={post}/> */}
            <div className="detailpagebutton">
            <span ><Link to={{pathname:`/volunteer/orgProfile/${post.orgId}`}}><Button className="Organizationbutton" variant="contained" color="secondary">Organization Profile</Button></Link></span>
            <span><Link to="/volunteer/myapplication"><Button className="Applybutton" variant="contained" color="secondary"  onClick={ addApplication.bind(this, queueComponent, post)}>
            Apply Now
            </Button></Link></span>
            
            </div>
            </div>         
            </div>  

            </div>





        )



    }


}

export default PostDetailPage;