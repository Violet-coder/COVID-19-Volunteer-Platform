import React from 'react';
import AdminNav from '../../AdminNav';
import EditOrgProfileForm from '../EditOrgProfileForm';
import {BackButton} from '../../Hook/backButton';

class EditOrgProfilePage extends React.Component{
    state={
        name:'',
        email:'',
        website:'',
        intro:'',
        dataIsReturned: false
    }

    componentDidMount(){
        const orgId = this.props.matchProps.match.params.id

        const url =`/admin/organization/${orgId}`

        fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                // alert("Could not get students");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            this.setState({ name: json.name,
                            email: json.email,
                            website: json.website,
                            intro: json.info,
                            dataIsReturned: true });
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        console.log('value', value)
        const id = target.id;
        if(id === 'orgName'){
            this.setState({
                'name':value
            })
        } else if(id ==='introduction'){
            console.log('set intro')
            this.setState({
                'intro':value
            })
        } else{
        this.setState({
            [id]:value
        });
        }
    }

    render(){

        //get organization data from database, but here we get data from props instead
        //the queueComponent represents the class object whose state we want to modify.
        const organization = this.state
        console.log('state',this.state)
        const orgId = this.props.matchProps.match.params.id

        const app = this.props.app


        return(
            <div id='page'>
                <AdminNav app={app} />
                {this.state.dataIsReturned ?
                <EditOrgProfileForm organization={organization} orgId={orgId} state={this.state} 
                handleInputChange={this.handleInputChange} /> :null}
            </div>
        )
        
    }
}

export default EditOrgProfilePage;