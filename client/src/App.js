import React, { Component } from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignUpGuide from './Pages/SignUpGuide';
import OrgSignUp from './Pages/OrgSignUp';
import VolSignUp from './Pages/VolSignUp';
import Login from './Pages/Login';
import Organization from './Pages/Organization';
import Volunteer from './Pages/Volunteer/Vol';
import Publicpost from './Pages/Publicpost';
import PublicPostDetailPage from './Pages/PublicPostDetailPage';
import PublicSearchResultPage from './Pages/PublicSearchResultPage';
import OrgProfilePage from './Pages/PublicOrgProfilePage';



import CheckLogin from './react-components/Login/CheckLogin';
import LoginForm from './react-components/Login/LoginForm';
import Admin from './Pages/Admin';

import {readCookie} from "./actions/login";

const log = console.log

class App extends React.Component{
  constructor(props){
    super(props)
    readCookie(this);
  }

  state = {
    currentUser:null,
    currentUserId:null,
    type:"volunteer",
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
    const currentUser = this.state.currentUser;
    const currentUserId = this.state.currentUserId;
    const type = this.state.type
    log("current user", currentUser, currentUserId)
    // log("current user", currentUser)
    return (
        <div>
        <BrowserRouter>
          <Switch> 
            {/* <Route exact path='/' render={() => 
                            (<Home state={this.state}/>)}/> */}
            <Route exact path='/' render={()=> (<Home />)}/>
            <Route exact path='/signGuide' render={() => (<SignUpGuide/>)}/>
            <Route exact path='/orgSignUp' render={() => (<OrgSignUp />)} />
            <Route exact path='/volSignUp' render={() => (<VolSignUp />)} />
           {/*  <Route exact path='/login' render={(history) => 
                  (currentUser && type=='volunteer') ?  <Redirect to={"/volunteer/userpage"}/>:
                  <Login history={history} app={this} /> 
                  } /> */}
            
            <Route path='/volunteer' render={(history) => (
              (currentUser && type=='volunteer') ?  <Volunteer  app={this} /> :
              <Login history={history} app={this}/> )}/>
            <Route path='/publicpost' render={() => <Publicpost />}/>
            <Route path='/post/:id' render={(matchProps) => {return <PublicPostDetailPage matchProps={matchProps}/>}} />
            <Route path='/searchresult' component={PublicSearchResultPage}/>
            <Route path='/orgProfile/:id' render={(matchProps) => {return <OrgProfilePage matchProps={matchProps}/> }} />
            <Route path='/organization' render={() => 
              (currentUser && type=='organization') ?  <Organization app={this} /> :
              <Login  app={this}/>
            }/>
            <Route path='/admin' render={() => 
              (currentUser && type=='admin') ?  <Admin app={this} /> :
              <Login  app={this}/>
            } />

            <Route exact path='/login' render={(history) =>{
              if(currentUser && type=='volunteer'){
                return <Redirect to={"/volunteer/userpage"}/>
              } else if (currentUser && type=='organization'){
                return <Redirect to={"/organization/profile"}/>
              } else if(currentUser && type=='admin') {
                return <Redirect to={'/admin/entry'} />
              } else {
                return <Login history={history} app={this} />
              }
            } } />

          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;