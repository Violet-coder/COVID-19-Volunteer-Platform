import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import PostDetail from "../../../react-components/Volunteer/PostDetail";
// import PostDetail_button from "../../../react-components/Volunteer/PostDetail_button"
import Button from '@material-ui/core/Button';
// import Volunteer from "../../../Pages/Volunteer/Vol"
// import My_application from "../../../Pages/Volunteer/My_application"
import { addApplication } from "../../../actions/applicationList"
// import "./styles.css"
import { Link} from 'react-router-dom';




import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"
const posts=[
    { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society", id:1},
    { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",id:2},
    { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",id:3},
    { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",id:4},
  ]



class PostDetailPage extends React.Component {

    
    render(){
        // this.componentWillMount()
        const {id} = this.props.match.params
        console.log(id)
        const post = posts.find((p) => p.id==id)
        // console.log("state", this.props.location)
        
        const queueComponent = this.props.location.query
        console.log('!!!!!!!!')
        console.log("detail page",queueComponent)
    
        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header_appli title={post.name} subtitle={post.organization}/>
            <PostDetail post={post}/>
            {/* <PostDetail_button  application={post}/> */}
            <div className="button">
            <span><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}}>
            Organization Profile
            </Button></span>
            <span><Link to="/volunteer/myapplication"><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}} onClick={ addApplication.bind(this, queueComponent, post)}>
            Apply Now
            </Button></Link></span>
            
            </div>  

            </div>





        )



    }


}

export default PostDetailPage;