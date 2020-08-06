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
        getVolProfile("5f29e3b9fcecd5232c568bfe", this)
    }
    
    
    render() {
        const {user} = this.props
        const app = this.props.app
        console.log('vol my_profile app', app)
      
        return(
            <div id="page">
            <Navbar app={app}/>
            <Header_appli title="My Profile" subtitle="Let's work together"/>
            {/* <VolProfileForm user={user}/>            */}
            { this.state.isLoading ? <VolProfileForm user={this.state.user}/>:null }
            </div>



        );
    }
}

export default My_profile;