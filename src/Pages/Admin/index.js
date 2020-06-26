import React from 'react';
import { Route,Switch } from 'react-router-dom';
import VolUsers from '../../react-components/Admin/Users/VolUsers';
import VolFixedProfilePage from '../../react-components/Admin/Users/VolFixedProfilePage';
import EditVolProfileForm from '../../react-components/Admin/Users/EditVolProfileForm';
import EditVolProfilePage from '../../react-components/Admin/Users/EditVolProfilePage'
import AdminGuide from '../../react-components/Admin/Posts/AdminGuide';
import PostList from '../../react-components/Admin/Posts/PostList';

let users= []
class Admin extends React.Component {
    state={
        volusers:[
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

        ],

        posts: [
            { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",location: "Toronto", id:1},
            { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",location: "Vancouver",id:2},
            { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",location: "Toronto", id:3},
            { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",location: "Vancouver", id:4},
            { name: 'THIS SATURDAY - Contactless Delivery Driver Volunteers', 
              description: "We are looking for volunteer drivers, with their own vehicle, to deliver grocery care packages to families that are unable to leave their home this Saturday June 27th", 
              requirement: "driver's license, multi-task", 
              title: "Driver", status: "Under Review", date: "6/27/2020", organization:"Hand Up from Hunger Toronto",
              location: "Toronto", id:5},
          ]
        

    }

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/admin/volusers' render={() => (<VolUsers  
                        volusers={this.state.volusers} queueComponent={this} />)}/>
                    {/* <Route exact path='/admin/volprofile' render={() => (<VolFixedProfilePage />)} /> */}
                    {/* <Route path='/admin/volprofile' component={VolFixedProfilePage} /> */}
                    <Route path='/admin/volprofile/:id' component={VolFixedProfilePage} />
                    <Route path='/admin/editvolprofile/:id' component={EditVolProfilePage} />
                    <Route path='/admin/posts' render={
                        ()=> (<PostList  posts= {this.state.posts} queueComponent={this} />)} />
                    <Route path='/admin' component={AdminGuide} />
                    
                    
                    
                </Switch>
            </div>
        )
    }
}

export default Admin;