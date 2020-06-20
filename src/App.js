import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import PostForm from './react-components/Organization/PostForm';
import OrgProfile from './react-components/Organization/OrgProfile';
import ApplicantList from './react-components/Organization/ApplicantList';
import Userpage_volunteer from './Pages/Userpage_volunteer';
import Home from './Pages/Home';
import SignUpGuide from './Pages/SignUpGuide';
import OrgSignUp from './Pages/OrgSignUp';
import VolSignUp from './Pages/VolSignUp';
import Login from './Pages/Login';



class App extends React.Component{
  state = {
    posts: [
      { name: 'Driver', description: "Deliver food", requirement: "Driver's license", status: "Approved"},
      { name: "Rider", description: "Deliver food", requirement: "Has a bike", status: "Approved"}
    ],
    applicants: [
      {name: 'Jack', jobName: 'Driver', rank: 'A'},
      {name: 'Mike', jobName: 'Rider', rank: 'B'}
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
                            (<Userpage_volunteer />)}/>
            <Route exact path='/orgProfile' render={() => 
                            (<OrgProfile posts={this.state.posts} queueComponent={this}/>)}/>
            <Route exact path='/post' render={() => 
                            (<PostForm queueComponent={this}/>)}/>
            <Route exact path='/applicants' render={() => 
                            (<ApplicantList applicants={this.state.applicants}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
