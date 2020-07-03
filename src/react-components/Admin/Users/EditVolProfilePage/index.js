import React from 'react';
import AdminNav from '../../AdminNav';
import EditVolProfileForm from '../EditVolProfileForm';
import './styles.css';
// const volusers=[
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

class EditVolProfilePage extends React.Component {

    //store the upated profile information in state
    state = {
    
            links:"",
            location:"",
            desc:"",
            
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const id = target.id;
        //console.log("target id", id)
        //console.log("target value", value)
        this.setState({
            [id]:value
        });
    }

    render(){
        //get the id of user and read the selected user info from database in phase 2
        const {id} = this.props.matchProps.match.params
        const queueComponent = this.props.queueComponent;
        const volusers = queueComponent.state.volusers

        const user = volusers.find((u) => u.id==id)

        //console.log("edit page queue",queueComponent)

        return(
            
            <div id='page'>
                <AdminNav />
                <EditVolProfileForm user={user} state={this.state} handleInputChange={this.handleInputChange} queueComponent={queueComponent} />
            </div>
        )
    }
}

export default EditVolProfilePage;