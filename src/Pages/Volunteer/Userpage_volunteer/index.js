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
// import "../../js/modernizr-2.6.2.min.js"



class Userpage_volunteer extends React.Component{
    
    
    
    
    render() {
        const {Volunteer, posts} = this.props

        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together"/>
            <Recommended_ops Volunteer={Volunteer} posts={posts}/>





            </div>



        );
    }
}

export default Userpage_volunteer;

