import React from 'react';
import { Route,Switch, BrowserRouter } from 'react-router-dom';
import VolUsers from '../../react-components/Admin/Users/VolUsers';
import VolFixedProfilePage from '../../react-components/Admin/Users/VolFixedProfilePage';
import EditVolProfilePage from '../../react-components/Admin/Users/EditVolProfilePage'
import AdminGuide from '../../react-components/Admin/Posts/AdminGuide';
import PostList from '../../react-components/Admin/Posts/PostList';
import FixedOrgProfilePage from '../../react-components/Admin/Organizations/FixedOrgProfilePage';
import EditOrgProfilePage from '../../react-components/Admin/Organizations/EditOrgProfilePage';
import OrganizationListPage from '../../react-components/Admin/Organizations/OrganizationListPage';
import PostDetailPage from '../../react-components/Admin/Posts/PostDetailPage';



class Admin extends React.Component {

    render() {
        const app = this.props.app

        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/admin/volunteers' render={() => (<VolUsers  app={app}/>)}/>
                    <Route exact path='/admin/organizations' render={() => (<OrganizationListPage app={app}/>)}/>

                    <Route exact path='/admin/volunteers/volprofile/:id' render={(matchProps)=> {
                       return <VolFixedProfilePage matchProps={matchProps} app={app} />
                    }} />
                    <Route exact path='/admin/volunteers/editvolprofile/:id' render={(matchProps)=> {
                       return <EditVolProfilePage matchProps={matchProps} {...this.props}  app={app} />
                    }} />


                    <Route exact path='/admin/organizations/orgprofile/:id' render={(matchProps)=> {
                        return <FixedOrgProfilePage matchProps={matchProps} app={app} />
                    }} />
                    <Route exact path='/admin/organizations/editorgprofile/:id' render={(matchProps)=> {
                        return <EditOrgProfilePage matchProps={matchProps}  app={app}/>
                    }} />


                    <Route exact path='/admin/posts' render={
                        ()=> (<PostList  app={app} />)} />

                    <Route path='/admin/posts/:id' render={(matchProps)=> {

                        return <PostDetailPage matchProps={matchProps}  app={app} />
                    }} />
                    
                    <Route exact path='/admin/entry' render={() =><AdminGuide app={app} />}  />                   
                    
                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Admin;