import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Userpage_volunteer from'../Userpage_volunteer';
import My_application from '../My_application';
import PostDetailPage from '../PostDetailPage';

class Volunteer extends React.Component{
    state = {
        applied_posts: [
            { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society", id:1,org_status: 'pending'},
            { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",id:2, org_status: 'accepted'},
            { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",id:3,org_status: 'rejected'}    
          ],
          
      /* applications: [
        {app_name: applied_posts[0].name, status: 'pending'},
        {name: 'Mike', jobName: 'Rider', rank: 'B', status: 'pending'},
        {name: 'Lily', jobName: 'Rider', rank: 'A', status: 'accepted'},
        {name: 'Lucy', jobName: 'Driver', rank: 'C', status: 'rejected'},
      ], */
      info: {
        name: "Food Delivery Organization",
        intro: "We deliver food. We need you! Phone number: 123456789. Email: 123456789.",
        website: 'www.FDO.ca',
        email: "abc@abc.com"
      }
    }
    render() {
     const {posts} = this.props
      
      return (
          <div>
            <Switch> 
              <Route exact path='/volunteer/Userpage_volunteer' render={() => (<Userpage_volunteer  posts={posts}/>)}/>
              <Route exact path='/volunteer/My_application' render={() => (<My_application applications={this.state.applied_posts} />)}/>
              {/* <Route path='/volunteer/post/postdetail/:id' render={()=>(<PostDetailPage volunteer={}/>)}/> */}
              <Route path='/volunteer/post/:id' component={PostDetailPage} />

            </Switch> 
        </div>
      );  
    }
  }
  
  export default Volunteer;