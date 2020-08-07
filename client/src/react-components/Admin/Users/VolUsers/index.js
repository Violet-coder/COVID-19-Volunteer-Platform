import React from 'react';

import AdminNav from '../../AdminNav';
import UserDiv from '../../UserDiv';
import VolUserTable from '../../VolUserTable';

class VolUsers extends React.Component{
    render(){
        const volusers=this.props.volusers
        //console.log("volusers",volusers)
        const queueComponent = this.props.queueComponent
        //console.log("VolUsers queueComponent", queueComponent)
        const app = this.props.app
        return(
            <div id='page'>
                <AdminNav app={app}/>
                <VolUserTable volusers={volusers} queueComponent={queueComponent}/>
            </div>
        )
    }
}

export default VolUsers;