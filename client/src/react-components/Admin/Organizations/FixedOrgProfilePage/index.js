import React from 'react';
import AdminNav from '../../AdminNav';
import OrgProfileForm from '../OrgProfileForm';
import {BackButton} from '../../Hook/backButton';
import './styles.css';

class FixedOrgProfilePage extends React.Component{
    render(){
        const organization=this.props.organization;
        const app = this.props.app


        return(
            <div id='page'>
                <AdminNav app={app}/>
                {/* Pass the organization data as props to the component OrgProfileForm, and we will use database to get data later in phase 2*/}
                <OrgProfileForm organization={organization}/>
                <div id='button-services' className='fh5co-bg-section'>
                <div id='update-button'><BackButton/></div>
                </div>
                
            </div>
        )

    }
}

export default FixedOrgProfilePage;