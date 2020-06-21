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
            <Route path='/organization' component={Organization}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
