import React from 'react';

import AdminNav from '../../AdminNav';
import VolUserTable from '../../VolUserTable';
import {BackButton} from '../../Hook/backButton';
import './styles.css';

class VolUsers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            volunteers: [],
            dataIsReturned: false
        }
    } 

    componentDidMount() {
        const url = "/admin/allvolunteers"
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Could not get volunteers");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            this.setState({ volunteers: json, dataIsReturned: true });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        const volunteers=this.state.volunteers
        const app = this.props.app
        
        return(
            <div id='page'>
                <AdminNav app={app}/>
                {this.state.dataIsReturned ?
                <VolUserTable volunteers={volunteers} volComp={this} /> : null }
                <div className='fh5co-bg-section'><div id='update-button' className="fh5co-bg-section"><BackButton /></div></div>
            </div>
        )
    }
}

export default VolUsers;