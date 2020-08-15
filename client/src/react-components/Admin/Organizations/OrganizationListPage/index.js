import React from 'react';

import AdminNav from '../../AdminNav';
import OrganizationTable from '../OrganizationTable';
import {BackButton} from '../../Hook/backButton';
import './styles.css'
class OrganizationListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
            dataIsReturned: false
        }
    } 

    componentDidMount() {
        const url = "/admin/allorganizations"
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get organizations");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            this.setState({ organizations: json, dataIsReturned: true });
        })
        .catch(error => {
            console.log(error);
        });
    }


    render(){
        let organizations = this.state.organizations
        organizations = organizations.filter(org => org.type !== "admin")
        const app = this.props.app


        return(
            <div id='page'>
                <AdminNav app={app} />
                {this.state.dataIsReturned ?
                <OrganizationTable organizations={organizations} orgComp = {this} /> : null}
                <div className='fh5co-bg-section'><div id='update-button'><BackButton /></div></div>
            </div>
        )
    }
}

export default OrganizationListPage;