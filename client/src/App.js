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
   
    this.state={
      currentUser:null,
      currentUserId:null,
      type:null,
      dataIsReturned:false
    }
  }
  componentDidMount(){
    readCookie(this);
  }


  
  render() {
    const currentUser = this.state.currentUser;
    const currentUserId = this.state.currentUserId;
    const type = this.state.type

    return (
        
        <div>
        <BrowserRouter>
          <Switch> 
       
            <Route exact path='/' render={()=> (<Home />)}/>
            <Route exact path='/signGuide' render={() => (<SignUpGuide/>)}/>
            <Route exact path='/orgSignUp' render={() => (<OrgSignUp />)} />
            <Route exact path='/volSignUp' render={() => (<VolSignUp />)} />
    
          
            { this.state.dataIsReturned ? 
            <Route path='/volunteer' render={( props ) => {
              if (currentUser && type=='volunteer'){
                return <Volunteer   app={this} /> 
              }else{
                return <Login app={this}/>
              }
            }}/> :null}

            <Route path='/publicposts' render={() => <Publicpost />}/>
            <Route path='/publicpost/:id' render={(matchProps) => {return <PublicPostDetailPage matchProps={matchProps}/>}} />
            <Route path='/searchresult' component={PublicSearchResultPage}/>
            <Route path='/orgProfile/:id' render={(matchProps) => {return <OrgProfilePage matchProps={matchProps}/> }} />
            
            { this.state.dataIsReturned ?
            <Route path='/organization' render={() => 
              (currentUser && type=='organization') ?  <Organization app={this} /> :
              <Login  app={this}/>
            }/> : null}

            { this.state.dataIsReturned ?
            <Route path='/admin' render={() => 
              (currentUser && type=='admin') ?  <Admin app={this} /> :
              <Login  app={this}/>
            } /> : null}

            <Route path='/login' render={({ history }) =>{
              if(currentUser && type=='volunteer'){
                return <Redirect to="/volunteer/userpage"/>
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