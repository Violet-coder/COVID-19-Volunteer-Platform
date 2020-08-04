import React from 'react';

import AdminNav from '../../AdminNav';
import OrganizationList from '../OrganizationList';
import OrganizationTable from '../OrganizationTable';

class OrganizationListPage extends React.Component{
    render(){
        //In phase 2 get data from database instead
        const organizations = this.props.organizations
        const queueComponent = this.props.queueComponent

        return(
            <div id='page'>
                <AdminNav />
                <OrganizationTable organizations={organizations} queueComponent={queueComponent}/>
            </div>
        )
    }
}

export default OrganizationListPage;