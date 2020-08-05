import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header from "../../../react-components/Volunteer/Header";
import All_ops from "../../../react-components/Volunteer/All_ops";

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"




class VolunteerSeeall extends React.Component{

    
    
       
    
    render() {
        const {queueComponent, posts} = this.props
        const app = this.props.app
        /* console.log("queueComponent",queueComponent)
        console.log("posts",posts)  */
         //only display posts that are approved
        const filteredPosts = posts.filter(
            p => p.status === 'Approved'
        )

        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together" posts={filteredPosts} app={app}/>
            <All_ops queueComponent={queueComponent} posts={filteredPosts}/>





            </div>



        );
    }
}

export default VolunteerSeeall;

