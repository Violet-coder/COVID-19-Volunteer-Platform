import React from 'react';

import AdminNav from '../../AdminNav';
import OrganizationList from '../OrganizationList';

class OrganizationListPage extends React.Component{
    render(){
        const organizations = this.props.organizations
        const queueComponent = this.props.queueComponent

        return(
            <div id='page'>
                <AdminNav />
                <OrganizationList organizations={organizations} queueComponent={queueComponent}/>
            </div>
        )
    }
}

export default OrganizationListPage;