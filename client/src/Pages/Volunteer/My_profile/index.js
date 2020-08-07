import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import VolProfileForm from "../../../react-components/Volunteer/FixedProfileForm";
import {getVolProfile} from "../../../actions/updateVolProfile";
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"


class My_profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoading: false
        }
        
    }

    componentDidMount() {
        getVolProfile(this.props.app.state.currentUserId, this)
    }
    
    
    render() {
        // const {user} = this.props
        const app = this.props.app
        const user = this.state.user
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
        }

       
      
        return(
            <div id="page">
            <Navbar app={app}/>
            <Header_appli title="My Profile" subtitle="Let's work together"/>
            {/* <VolProfileForm user={user}/>            */}
            <div>
            { this.state.isLoading ? <VolProfileForm user={user}/>:null }</div>
            </div>



        );
    }
}

export default My_profile;