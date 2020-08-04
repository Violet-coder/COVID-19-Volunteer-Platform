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
        return(
            <div id='page'>
                <AdminNav />
                <VolUserTable volusers={volusers} queueComponent={queueComponent}/>
            </div>
        )
    }
}

export default VolUsers;