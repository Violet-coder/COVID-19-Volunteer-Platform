import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import ApplicationList from "../../../react-components/Volunteer/ApplicationList"


import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
import "./styles.css"
// import "../../js/modernizr-2.6.2.min.js"





class My_application extends React.Component{
    
    
    render() {
      const {applications} = this.props
      console.log(applications)
        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header_appli title="My Application" subtitle="Let's work together"/>
            <ApplicationList applications={applications}/>





            </div>



        );
    }
}

export default My_application;

