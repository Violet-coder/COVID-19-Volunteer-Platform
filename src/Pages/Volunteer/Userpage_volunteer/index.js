import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header from "../../../react-components/Volunteer/Header";
import Recommended_ops from "../../../react-components/Volunteer/Recommended_op";

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
import "./styles.css"




class Userpage_volunteer extends React.Component{
    
    
    
    
    render() {
        const {queueComponent, posts} = this.props
        /* console.log("queueComponent",queueComponent)
        console.log("posts",posts)  */

        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together"/>
            <Recommended_ops queueComponent={queueComponent} posts={posts}/>





            </div>



        );
    }
}

export default Userpage_volunteer;

