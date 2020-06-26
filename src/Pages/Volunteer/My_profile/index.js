import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import VolProfileForm from "../../../react-components/Volunteer/FixedProfileForm";
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"


class My_profile extends React.Component{
    
    
    render() {
        const {user} = this.props
      
        return(
            <div id="page">
            <Navbar />
            <Header_appli title="My Profile" subtitle="Let's work together"/>
            <VolProfileForm user={user}/>           
            </div>



        );
    }
}

export default My_profile;