import React from 'react';

import AdminNav from '../../AdminNav';
import VolUserTable from '../../VolUserTable';

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
        //console.log("volusers",volusers)

        //console.log("VolUsers queueComponent", queueComponent)
        const app = this.props.app
        return(
            <div id='page'>
                <AdminNav app={app}/>
                {this.state.dataIsReturned ?
                <VolUserTable volunteers={volunteers} volComp={this} /> : null }
            </div>
        )
    }
}

export default VolUsers;