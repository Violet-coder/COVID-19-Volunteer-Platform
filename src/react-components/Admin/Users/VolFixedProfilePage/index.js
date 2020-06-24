import React from 'react';
import AdminNav from '../../AdminNav';
import VolProfileForm from "../VolProfileForm";

const volusers=[
    {
    id: 1,
    firstName:"John", 
    lastName:"Smith", 
    email:"johnsmith@user.com",
    links:"github.com/johnsmith",
    location:"Toronto",
    desc:"Software Engineer",
    skills:{
        analytics: false,
        biology: false,
        biotech: false,
        community: false,
        content: false,
        data: false,
        finance: true,
        helpdesk: false,
        manufacturing: false,
        marketing: false,
        mechanics: false,
        IT: true,
        anything: false,
        },
    availability:{
        option1: true,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
    }
    },
    {
    id:2,
    firstName:"Maria", 
    lastName:"Hernandz", 
    email:"mariahernandez@user.com",
    links:"github.com/maria",
    location:"Toronto",
    desc:"Data analytics",
    skills:{
        analytics: true,
        biology: false,
        biotech: false,
        community: false,
        content: false,
        data: false,
        finance: false,
        helpdesk: false,
        manufacturing: false,
        marketing: true,
        mechanics: false,
        IT: true,
        anything: false,
        },
    availability:{
        option1: true,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
    },
    },

]

class VolFixedProfilePage extends React.Component {
    render(){
        //console.log(this.props.match)
        const {id} = this.props.match.params
        //console.log('id',id)
        //console.log('user1.id', volusers[0].id)
        const user = volusers.find((u) => u.id==id)
        //console.log("view user", user)

        //const userToView = this.props.location.query
        //console.log("user",userToView)
        return(
        
            <div id='page'>
                <AdminNav />
                <VolProfileForm user={user}/>
            </div>
        )
    }
}

export default VolFixedProfilePage;