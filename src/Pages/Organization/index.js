import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostForm from '../../react-components/Organization/PostForm';
import OrgProfile from '../../react-components/Organization/OrgProfile';
import ApplicantList from '../../react-components/Organization/ApplicantList';
import ProfileForm from '../../react-components/Organization/ProfileForm';
class Organization extends React.Component{
    state = {
      posts: [
        { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020"},
        { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020"}
      ],
      applicants: [
        {name: 'Jack', jobName: 'Driver', rank: 'A'},
        {name: 'Mike', jobName: 'Rider', rank: 'B'}
      ],
      info: {
        name: "Food Delivery Organization",
        intro: "We deliver food. We need you! Phone number: 123456789. Email: 123456789.",
        location: 'Toronto',
        website: 'www.FDO.ca'
      }
    }
    render() {
      
      return (
          <div>
            <Switch> 
              <Route exact path='/organization/profile' render={() => (<OrgProfile posts={this.state.posts} queueComponent={this}/>)}/>
              <Route exact path='/organization/post' render={() => 
                              (<PostForm queueComponent={this}/>)}/>
              <Route exact path='/organization/applicants' render={() => 
                              (<ApplicantList applicants={this.state.applicants}/>)}/>
              <Route exact path='/organization/update' render={() => 
                              (<ProfileForm info={this.state.info}/>)}/>
              </Switch> 
        </div>
      );  
    }
  }
  
  export default Organization;