import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Userpage_volunteer from'../Userpage_volunteer';
import My_application from '../My_application';
import PostDetailPage from '../PostDetailPage';
import EditProfilePage from '../EditProfilePage';
import My_profile from '../My_profile';
import SearchResultPage from '../SearchResultPage';
import VolunteerSeeall from '../VolunteerSeeall';
import OrgProfilePage from '../OrgProfilePage';

class Volunteer extends React.Component{
    state = {
        applied_posts: [
            { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society", id:1,org_status: 'pending'},
            { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",id:2, org_status: 'accepted'},
            { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",id:3,org_status: 'rejected'}    
          ],
        profile:  {   id: 1,
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
                }
     
    }
    render() {
     const {posts} = this.props
      
      return (
          <div>
            <Switch> 
              <Route exact path='/volunteer/userpage' render={() => (<Userpage_volunteer  queueComponent={this} recommended_posts={posts.slice(2,5)} posts={posts}/>)}/>
              <Route exact path='/volunteer/myapplication' render={() => (<My_application applications={this.state.applied_posts} />)}/>
              <Route exact path='/volunteer/myprofile' render={() => (<My_profile user={this.state.profile}/>)}/>
              <Route path='/volunteer/editprofile' render={() => (<EditProfilePage user={this.state.profile} queueComponent={this}/>)} />
              <Route path='/volunteer/post/:id' component={PostDetailPage} />
              <Route path='/volunteer/searchresult'  component={SearchResultPage}/>
              <Route exat path='/volunteer/seeall'  render={() => (<VolunteerSeeall queueComponent={this} posts={posts}/>)}/>
              <Route path='/volunteer/orgProfile/:id' component={OrgProfilePage} />



              

              

            </Switch> 
        </div>
      );  
    }
  }
  
  export default Volunteer;