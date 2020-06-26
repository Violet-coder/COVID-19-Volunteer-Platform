import React from "react";
import HomeNav from '../../react-components/HomeNav';
import Header_appli from "../../react-components/Volunteer/Header_appli";
import PostDetail from "../../react-components/PostDetail"
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';




import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import Footer from "../../react-components/Footer";

const posts=[
    { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",location: "Toronto", id:1},
      { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",location: "Vancouver",id:2},
      { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",location: "Toronto", id:3},
      { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",location: "Vancouver", id:4},
      { name: 'THIS SATURDAY - Contactless Delivery Driver Volunteers', 
              description: "We are looking for volunteer drivers, with their own vehicle, to deliver grocery care packages to families that are unable to leave their home this Saturday June 27th", 
              requirement: "driver's license, multi-task", 
              title: "Driver", status: "Under Review", date: "6/27/2020", organization:"Hand Up from Hunger Toronto",
              location: "Toronto", id:5},
    ]

class PublicPostDetailPage extends React.Component {
    
    render() {
        const {id} = this.props.match.params
        const post = posts.find((p) => p.id==id)
        return(
            <div id='page'>
                <HomeNav />
                <Header_appli title={post.name} subtitle={post.organization}/>
                <div id="fh5co-blog" class="fh5co-bg-section">
                <div class="container">
                <PostDetail post={post}/>
                <div className="button">
                <span><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}}>
                Organization Profile
                </Button></span>
                <span><Link to="/volunteer/myapplication"><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}}>
                Apply Now
                </Button></Link></span>
                </div>
                </div>
            
                
                </div>  
                <Footer />
            </div>
        )
    }
}

export default PublicPostDetailPage;