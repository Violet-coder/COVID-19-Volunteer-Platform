import React from "react";
import HomeNav from '../../react-components/HomeNav';
import Header_appli from "../../react-components/Volunteer/Header_appli";
import OrgDetail from "../../react-components/OrgDetail"
import {BackButton} from '../../react-components/Organization/Hook/backButton';



import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import Footer from "../../react-components/Footer";

const organizations= [
    {
    id:5,
    type:'organization',
    name:"Listening Society",
    email: "ls@organization.com",
    website: "www.LS.ca",
    intro: "We deliver food. We need you!"
    },
    {
    id:6,
    type:'organization',
    name:"EAST TORONTO FOOD COALITION",
    email: "covidfoodcoalition@gmail.com",
    website:"https://covidfoodcoalition.wixsite.com/website",
    intro:"The East Toronto Food Coalition (ETFC) is a grassroots food security initiative serving the Beaches East-York, Regent Park, Leslieville areas. "
    },
    {
    id:7,
    type:'organization',
    name:"The Atrium Project",
    email: "TheAtriumProject@gmail.com",
    website:"https://TheAtriumProject.wixsite.com/website",
    intro:"The Atrium Project was created as a way for people within different communities to come together and support each other."
    },
    {
    id:8,
    type:'organization',
    name:"The mental Health books",
    email: "ThementalHealthbooks@gmail.com",
    website:"https://covidfoodcoalition.wixsite.com/website",
    intro:"The mental Health books is an organization helps vulnerable groups with their mental health in this special period."
    },
    {
    id:9,
    type:'organization',
    name:'Hand Up from Hunger Toronto',
    email:'kevin.hoang@handuptoronto.org',
    website:'www.handuptoronto.org',
    intro:'Reconnect Community Health Services is a not-for-profit health service organization located in the west end of Toronto. We provide services for seniors, caregivers, and people living with mental health and addictions concerns.',
    },

    
]

    
   

class OrgProfilePage extends React.Component {
    
    render() {
        const {id} = this.props.match.params
        const info = organizations.find((o) => o.id==id)
       
        return(
            <div id='page'>
                <HomeNav />
                <Header_appli title={info.name} subtitle={info.email}/>
                <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                <OrgDetail info={info}/>
                </div>
                </div>
                <span className='Applybutton'><BackButton/></span>
                <Footer />
            </div>
        )
    }
}

export default OrgProfilePage;

