import React from 'react';
import AdminNav from '../../AdminNav';
import OrgProfileForm from '../OrgProfileForm';
import {BackButton} from '../../Hook/backButton';
import './styles.css';

class FixedOrgProfilePage extends React.Component{
    render(){
        const organization=this.props.organization;

        return(
            <div id='page'>
                <AdminNav />
                
                <OrgProfileForm organization={organization}/>
                <div id='button-services' className='fh5co-bg-section'>
                <div id='update-button'><BackButton/></div>
                </div>
                
            </div>
        )

    }
}

export default FixedOrgProfilePage;