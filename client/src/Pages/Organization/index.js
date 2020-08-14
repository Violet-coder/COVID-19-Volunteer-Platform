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
    render() {
      const app = this.props.app
      return (
          <div>
            <Switch> 
              <Route exact path='/organization/profile' render={() => (<OrgProfile app={app}/>)}/>
              <Route exact path='/organization/post' render={() => 
                              (<PostForm app={app} />)}/>
              <Route exact path='/organization/applicants' render={() => 
                              (<ApplicantList app={app}/>)}/>
              <Route exact path='/organization/update' render={() => 
                              (<ProfileForm app={app} />)}/>
              <Route exact path='/organization/post_edit/:id' render={(matchProps) => 
                              (<PostEditForm matchProps = {matchProps} app={app}/>)}/>
              <Route path='/organization/volprofile/:id' render={(matchProps) => 
                              (<ApplicantDetail matchProps = {matchProps} app={app}/>)}/>
              <Route path='/organization/posts/:id' render={(matchProps) => 
                              (<SelfPostDetail matchProps = {matchProps} app={app} />)}/>
              </Switch> 
        </div>
      );  
    }
  }
  
  export default Organization;