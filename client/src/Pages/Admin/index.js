import React from 'react';
import { Route,Switch, Redirect, BrowserRouter } from 'react-router-dom';
import VolUsers from '../../react-components/Admin/Users/VolUsers';
import VolFixedProfilePage from '../../react-components/Admin/Users/VolFixedProfilePage';
import EditVolProfileForm from '../../react-components/Admin/Users/EditVolProfileForm';
import EditVolProfilePage from '../../react-components/Admin/Users/EditVolProfilePage'
import AdminGuide from '../../react-components/Admin/Posts/AdminGuide';
import PostList from '../../react-components/Admin/Posts/PostList';
import AdminPostForm from '../../react-components/Admin/Posts/AdminPostForm';
import FixedOrgProfilePage from '../../react-components/Admin/Organizations/FixedOrgProfilePage';
import EditOrgProfilePage from '../../react-components/Admin/Organizations/EditOrgProfilePage';
import OrganizationListPage from '../../react-components/Admin/Organizations/OrganizationListPage';
import PostDetailPage from '../../react-components/Admin/Posts/PostDetailPage';



class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    //Store all the data in Admin global state,
    //and pass the necessary data to each page component.
    //When the components of each page perform some actions, the global state will be updated.
    //With databases in phase 2, we will get data from database each time enter a page.
    state={
        volusers:[
            {
            id: 1,
            type:'volunteer',
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
                anything: false,
                },
            availability:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            }
            },
            {
            id:2,
            type:'volunteer',
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
                anything: false,
                },
            availability:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            },
            },
            {
            id:3,
            type:'volunteer',
            firstName:"Hannah", 
            lastName:"Logan", 
            email:"hannahlogan@user.com",
            links:"github.com/hannah",
            location:"Toronto",
            desc:"Food industry",
            skills:{
                analytics: false,
                biology: false,
                biotech: false,
                community: false,
                content: false,
                data: false,
                finance: false,
                helpdesk: true,
                manufacturing: false,
                marketing: true,
                mechanics: false,
                IT: true,
                anything: false,
                },
            availability:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            },
            },
            {
            id:4,
            type:'volunteer',
            firstName:"Janice", 
            lastName:"Bingham", 
            email:"janicebingham@user.com",
            links:"github.com/janice",
            location:"Toronto",
            desc:"Front-desk",
            skills:{
                analytics: false,
                biology: false,
                biotech: false,
                community: true,
                content: false,
                data: false,
                finance: false,
                helpdesk: true,
                manufacturing: false,
                marketing: false,
                mechanics: false,
                IT: true,
                anything: false,
                },
            availability:{
                option1: true,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
            },
            }

        ],

        organizations: [
            {
            id:5,
            type:'organization',
            orgName:"Listening Society",
            email: "ls@organization.com",
            website: "www.LS.ca",
            introduction: "We deliver food. We need you!"
            },
            {
            id:6,
            type:'volunteer',
            orgName:"EAST TORONTO FOOD COALITION",
            email: "covidfoodcoalition@gmail.com",
            website:"https://covidfoodcoalition.wixsite.com/website",
            introduction:"The East Toronto Food Coalition (ETFC) is a grassroots food security initiative serving the Beaches East-York, Regent Park, Leslieville areas. "
            },
            {
            id:7,
            type:'organization',
            orgName:"The Atrium Project",
            email: "TheAtriumProject@gmail.com",
            website:"https://TheAtriumProject.wixsite.com/website",
            introduction:"The Atrium Project was created as a way for people within different communities to come together and support each other."
            },
            {
            id:8,
            type:'organization',
            orgName:"The mental Health books",
            email: "ThementalHealthbooks@gmail.com",
            website:"https://covidfoodcoalition.wixsite.com/website",
            introduction:"The mental Health books is an organization helps vulnerable groups with their mental health in this special period."
            },
            {
            id:9,
            type:'organization',
            orgName:'Hand Up from Hunger Toronto',
            email:'kevin.hoang@handuptoronto.org',
            website:'www.handuptoronto.org',
            introduction:'Reconnect Community Health Services is a not-for-profit health service organization located in the west end of Toronto. We provide services for seniors, caregivers, and people living with mental health and addictions concerns.',
            }
        ],

        posts: [
            { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",orgId:5,location: "Toronto", id:1},
            { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",orgId:5,location: "Vancouver",id:2},
            { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",orgId:7,location: "Toronto", id:3},
            { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",orgId:8,location: "Vancouver", id:4},
            { name: 'THIS SATURDAY - Contactless Delivery Driver Volunteers', 
                    description: "We are looking for volunteer drivers, with their own vehicle, to deliver grocery care packages to families that are unable to leave their home this Saturday June 27th", 
                    requirement: "driver's license, multi-task", 
                    title: "Driver", status: "Under Review", date: "6/27/2020", organization:"Hand Up from Hunger Toronto",orgId:9,location: "Toronto", id:5},
          ]
        

    }

    render() {
        const app = this.props.app

        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/admin/volunteers' render={() => (<VolUsers  
                        volusers={this.state.volusers} queueComponent={this} app={app}/>)}/>
                    <Route exact path='/admin/organizations' render={() => (<OrganizationListPage  
                        organizations={this.state.organizations} app={app}/>)}/>

                    <Route exact path='/admin/publishpost' render={() => (
                        <AdminPostForm queueComponent={this} app={app}/>)} />
                    {/* <Route exact path='/admin/volprofile' render={() => (<VolFixedProfilePage />)} /> */}
                    {/* <Route path='/admin/volprofile' component={VolFixedProfilePage} /> */}

                    <Route exact path='/admin/volunteers/volprofile/:id' render={(matchProps)=> {
                       return <VolFixedProfilePage matchProps={matchProps} queueComponent={this} app={app} />
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
                        ()=> (<PostList  posts= {this.state.posts} app={app} />)} />

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