import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostForm from '../../react-components/Organization/PostForm';
import PostEditForm from '../../react-components/Organization/PostForm/edit';
import OrgProfile from '../../react-components/Organization/OrgProfile';
import ApplicantList from '../../react-components/Organization/ApplicantList';
import ProfileForm from '../../react-components/Organization/ProfileForm';
import SelfPostDetail from '../../react-components/Organization/SelfPostDetail';
import ApplicantDetail from '../../react-components/Organization/ApplicantDetail';
class Organization extends React.Component{
  constructor(props) {
    super(props);
  }
  //all these data below should be requested from the database
    state = {
      posts: [
        { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", location: "Toronto", id: 1},
        { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task", title: "Driver", status: "Approved", date: "6/16/2020", location: "Vancouver", id: 2}
      ],
      applicants: [
        {name: 'Jonh Smith', jobId: 1, rank: 'A', status: 'pending', id: 1, jobName: 'Driver'},
        {name: 'Maria Hernandz', jobId: 2, rank: 'B', status: 'pending', id: 2, jobName: 'Rider'},
        {name: 'Hannah Logan', jobId: 2, rank: 'A', status: 'accepted', id: 3, jobName: 'Rider'},
        {name: 'Janice Bingham', jobId: 1, rank: 'C', status: 'rejected', id: 4, jobName: 'Driver'},
      ],
      info: {
        name: "Listening Society",
        intro: "We deliver food. We need you!",
        website: 'www.LS.ca',
        email: "user2@user.com"
      }
    }
    render() {
      const app = this.props.app
      return (
          <div>
            <Switch> 
              <Route exact path='/organization/profile' render={() => (<OrgProfile posts={this.state.posts} queueComponent={this} app={app}/>)}/>
              <Route exact path='/organization/post' render={() => 
                              (<PostForm queueComponent={this} app={app} />)}/>
              <Route exact path='/organization/applicants' render={() => 
                              (<ApplicantList applicants={this.state.applicants} context={this} app={app}/>)}/>
              <Route exact path='/organization/update' render={() => 
                              (<ProfileForm info={this.state.info} infoComponent={this} app={app} />)}/>
              <Route exact path='/organization/post_edit/:id' render={(matchProps) => 
                              (<PostEditForm matchProps = {matchProps} posts={this.state.posts} context={this} app={app}/>)}/>
              <Route path='/organization/volprofile/:id' render={(matchProps) => 
                              (<ApplicantDetail matchProps = {matchProps} applicants={this.state.applicants} context={this} app={app}/>)}/>
              <Route path='/organization/posts/:id' render={(matchProps) => 
                              (<SelfPostDetail matchProps = {matchProps} context={this} app={app} />)}/>
              </Switch> 
        </div>
      );  
    }
  }
  
  export default Organization;