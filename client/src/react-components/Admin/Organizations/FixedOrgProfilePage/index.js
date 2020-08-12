import React from 'react';
import AdminNav from '../../AdminNav';
import OrgProfileForm from '../OrgProfileForm';
import {BackButton} from '../../Hook/backButton';
import {getOrgProfile} from '../../../../actions/adminUpdateOrgProfile';
import {Link} from 'react-router-dom';
import './styles.css';

class FixedOrgProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            organization:{},
            dataIsReturned: false
        }
    }

    componentDidMount(){
        const orgId = this.props.matchProps.match.params.id
        getOrgProfile(this, orgId)
    }
    render(){
        const organization=this.state.organization;
        const app = this.props.app
        const orgId = this.props.matchProps.match.params.id


        return(
            <div id='page'>
                <AdminNav app={app}/>
                {/* Pass the organization data as props to the component OrgProfileForm, and we will use database to get data later in phase 2*/}
                <OrgProfileForm organization={organization}/>
                <div id='button-services' className='fh5co-bg-section'>
                <div id='update-button'><Link to={`/admin/organizations/editorgprofile/${orgId}`}><button className="btn btn-info updatebutton">Go To Update</button></Link>
                <BackButton/></div>
                </div>
                
            </div>
        )

    }
}

export default FixedOrgProfilePage;