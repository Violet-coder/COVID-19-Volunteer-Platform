import React from 'react';
import { Route,Switch } from 'react-router-dom';
import VolUsers from '../../react-components/Admin/Users/VolUsers';
import VolFixedProfilePage from '../../react-components/Admin/Users/VolFixedProfilePage';

let users= []
class Admin extends React.Component {
    state={
        volusers:[
            {
            id: 1,
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
                anyting: false,
                },
            availabitly:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            }
            },
            {
            id:2,
            firstName:"Maria", 
            lastName:"Hernandz", 
            email:"mariahernandez@user.com",
            links:"github.com/maria",
            location:"Toronto",
            desc:"Data analytics",
            skills:{
                analytics: true,
                biology: false,
                biotech: false,
                community: false,
                content: false,
                data: false,
                finance: false,
                helpdesk: false,
                manufacturing: false,
                marketing: true,
                mechanics: false,
                IT: true,
                anyting: false,
                },
            availabitly:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            }
            },

        ],
        

    }

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/admin/volusers' render={() => (<VolUsers />)} />
                    <Route exact path='/admin/volprofile' render={() => (<VolFixedProfilePage />)} />
                </Switch>
            </div>
        )
    }
}

export default Admin;