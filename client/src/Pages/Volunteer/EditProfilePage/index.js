import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import EditProfileForm from "../../../react-components/Volunteer/EditProfileForm";
import {merge} from 'lodash/fp';
import {getVolProfile} from "../../../actions/updateVolProfile";
// import { Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";

class EditProfilePage extends React.Component {
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


    
    handleInputChange = (event) => {
        
        const target = event.target;
        const value = target.value;
        const id = target.id;

        // this.setState({
        //     [id]:value
        // });
        var currentUser = this.state.user
        currentUser[id]=value
        this.setState({
            user:currentUser
        })
    }
    
    handleCheckboxChange = (event) => {
        const target = event.target;
        const id = target.id;
        const category = document.getElementById(id).parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.innerText.toLowerCase()
        // console.log("category", category)
        const value = document.getElementById(id).checked
        // console.log(id, document.getElementById(id).checked)
        // console.log("id", id)
        // console.log("value",value)
        var newUser = this.state.user
        newUser[category][id]=value
        this.setState({
            user:newUser
        })

        // const newState = merge(this.state.user, {[category]:{[id] : value}})
        // this.setState({
        //     user:newState


        // })
        /* this.state = newState
        console.log("this state", this.state) */
        

    }
    render(){
       
        const user = this.state.user
        const queueComponent = this.props.queueComponent
        const app = this.props.app
        console.log('edit profile app',app)
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
            
            <div id='page'>
            <Navbar app={app}/>
            <Header_appli title="Update Profile" subtitle="Let's work together" app = {app} />
            {/* <EditProfileForm user={user} newInfo={this.state} handleInputChange={this.handleInputChange}  handleCheckboxChange={this.handleCheckboxChange} queueComponent={queueComponent} /> */}
            <div>
            {this.state.isLoading ?<EditProfileForm user={user} newInfo={this.state.user} handleInputChange={this.handleInputChange}  handleCheckboxChange={this.handleCheckboxChange} queueComponent={queueComponent} app={app}/> :null}
            </div>
                      
            </div>

        )
    }
}

export default EditProfilePage;

