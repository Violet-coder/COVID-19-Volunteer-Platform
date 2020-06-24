import React, { Component } from 'react';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignUpGuide from './Pages/SignUpGuide';
import OrgSignUp from './Pages/OrgSignUp';
import VolSignUp from './Pages/VolSignUp';
import Login from './Pages/Login';
import Organization from './Pages/Organization';
import Volunteer from './Pages/Volunteer/Vol'
import Publicpost from './Pages/Publicpost'
import PostDetailPage from './Pages/Volunteer/PostDetailPage'


import CheckLogin from './react-components/Login/CheckLogin';
import LoginForm from './react-components/Login/LoginForm';
import Admin from './Pages/Admin';
let passport = new CheckLogin();



class App extends React.Component{

  state = {
    posts: [
      { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society", id:1},
      { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",id:2},
      { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",id:3},
      { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",id:4},

    ]
  }


  
  render() {
    
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
            <Route exact path='/login' render={(props) => 
                  {return <Login passport={passport} />
                  }} />
            <Route path='/volunteer' render={() => <Volunteer posts={this.state.posts} />}/>
            <Route path='/publicpost' render={() => <Publicpost posts={this.state.posts} />}/>
            <Route path='/post/:id' component={PostDetailPage} />

            {/* <Route exact path='/Userpage_volunteer' render={(props) => {
                if(passport.isLogin){
                  return <Userpage_volunteer  posts={this.state.posts} />
                } else {
                  return <Redirect to='login'/>
                }
            }}/> */}
            <Route path='/organization' component={Organization}/>
            <Route path='/admin' component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;