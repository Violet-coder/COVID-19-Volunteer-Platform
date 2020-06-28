import React from 'react';
import AdminNav from '../../AdminNav';
import VolProfileForm from "../VolProfileForm";
import {BackButton} from '../../Hook/backButton';
import './styles.css'

// let volusers=[
//     {
//     id: 1,
//     firstName:"John", 
//     lastName:"Smith", 
//     email:"johnsmith@user.com",
//     links:"github.com/johnsmith",
//     location:"Toronto",
//     desc:"Software Engineer",
//     skills:{
//         analytics: false,
//         biology: false,
//         biotech: false,
//         community: false,
//         content: false,
//         data: false,
//         finance: true,
//         helpdesk: false,
//         manufacturing: false,
//         marketing: false,
//         mechanics: false,
//         IT: true,
//         anything: false,
//         },
//     availability:{
//         option1: true,
//         option2: false,
//         option3: false,
//         option4: false,
//         option5: false,
//     }
//     },
//     {
//     id:2,
//     firstName:"Maria", 
//     lastName:"Hernandz", 
//     email:"mariahernandez@user.com",
//     links:"github.com/maria",
//     location:"Toronto",
//     desc:"Data analytics",
//     skills:{
//         analytics: true,
//         biology: false,
//         biotech: false,
//         community: false,
//         content: false,
//         data: false,
//         finance: false,
//         helpdesk: false,
//         manufacturing: false,
//         marketing: true,
//         mechanics: false,
//         IT: true,
//         anything: false,
//         },
//     availability:{
//         option1: true,
//         option2: false,
//         option3: false,
//         option4: false,
//         option5: false,
//     },
//     },

// ]

class VolFixedProfilePage extends React.Component {
    render(){
        //console.log(this.props.match)
        //get the id of user and read the user info from database
        //const {id} = this.props.matchProps.match.params
        const matchProps = this.props.matchProps
        const {id} = matchProps.match.params
        console.log("id",id)
        const queueComponent = this.props.queueComponent
        const volusers = queueComponent.state.volusers
        const user = volusers.find((u) => u.id==id)


        return(
        
            <div id='page'>
                <AdminNav />
                
                <VolProfileForm user={user}/>
                <div id='button-services' className='fh5co-bg-section'>
                <span id='updateform'><BackButton/></span>
                </div>
                
            </div>
        )
    }
}

export default VolFixedProfilePage;