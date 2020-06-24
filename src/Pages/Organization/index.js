import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostForm from '../../react-components/Organization/PostForm';
import OrgProfile from '../../react-components/Organization/OrgProfile';
import ApplicantList from '../../react-components/Organization/ApplicantList';
import ProfileForm from '../../react-components/Organization/ProfileForm';
import ApplicantDetail from '../../react-components/Organization/ApplicantDetail';
class Organization extends React.Component{
    state = {
      posts: [
        { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", location: "Toronto"},
        { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", location: "Vancouver"}
      ],
      applicants: [
        {name: 'Jonh Smith', jobName: 'Driver', rank: 'A', status: 'pending', id: 1},
        {name: 'Maria Hernandz', jobName: 'Rider', rank: 'B', status: 'pending', id: 2},
        {name: 'Lily', jobName: 'Rider', rank: 'A', status: 'accepted', id: 3},
        {name: 'Lucy', jobName: 'Driver', rank: 'C', status: 'rejected', id: 4},
      ],
      info: {
        name: "Food Delivery Organization",
        intro: "We deliver food. We need you!",
        website: 'www.FDO.ca',
        email: "abc@abc.com"
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
                              (<ApplicantList applicants={this.state.applicants} context={this}/>)}/>
              <Route exact path='/organization/update' render={() => 
                              (<ProfileForm info={this.state.info} infoComponent={this}/>)}/>
              <Route path='/organization/volprofile/:id' component={ApplicantDetail}/>
              </Switch> 
        </div>
      );  
    }
  }
  
  export default Organization;