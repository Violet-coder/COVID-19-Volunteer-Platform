import React from "react";
import HomeNav from '../../react-components/HomeNav';
import HomeHeader from "../../react-components/HomeHeader";
import { Link} from 'react-router-dom';

// import "../../css/animate.css";
// import "../../css/icomoon.css";
// import "../../css/bootstrap.css";
// import "../../css/magnific-popup.css";
// import "../../css/style.css";
import HomeIntro from "../../react-components/HomeIntro";
import PostArea from "../../react-components/PostArea";
import Footer from "../../react-components/Footer";

// import "../../js/modernizr-2.6.2.min.js"

class Home extends React.Component {
    state = {
        ops: [
          { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",location: "Toronto", id:1},
          { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",location: "Vancouver",id:2},
          { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",location: "Toronto", id:3},
          { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",location: "Vancouver", id:4}      
        ]
    
      };
    
    
    
    render() {
        return(
            <div id='page'>
                <HomeNav />
                <HomeHeader />
                <HomeIntro />
                <PostArea desc='Opportunities  &amp; Jobs' title='Opportunities'subtitle='COVID-19 Support Opportunities' 
                          ops={this.state.ops}/>
                <Footer />
            </div>
        )
    }
}

export default Home;