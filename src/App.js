import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Userpage_volunteer from './Pages/Userpage_volunteer'

class App extends React.Component{
  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> 
            {/* <Route exact path='/' render={() => 
                            (<Home state={this.state}/>)}/> */}
            <Route exact path='/Userpage_volunteer' render={() => 
                            (<Userpage_volunteer />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
