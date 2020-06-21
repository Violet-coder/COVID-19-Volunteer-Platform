import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Userpage_volunteer from './Pages/Userpage_volunteer';
import Home from './Pages/Home';
import SignUpGuide from './Pages/SignUpGuide';
import OrgSignUp from './Pages/OrgSignUp';
import VolSignUp from './Pages/VolSignUp';
import Login from './Pages/Login';
import Organization from './Pages/Organization';



class App extends React.Component{

  state = {
    posts: [
      { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society"},
      { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society"},
      { name: "Grocery Delivery", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project"},
      { name: "Grocery Delivery", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books"},

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
            <Route exact path='/login' render={() => (<Login />)} />
            <Route exact path='/Userpage_volunteer' render={() => 
                            (<Userpage_volunteer  posts={this.state.posts}/>)}/>
            <Route path='/organization' component={Organization}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
