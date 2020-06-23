import React from 'react';

import AdminNav from '../../AdminNav';
import UserDiv from '../../UserDiv';

class VolUsers extends React.Component{
    render(){
        return(
            <div id='page'>
                <AdminNav />
                <UserDiv />
            </div>
        )
    }
}

export default VolUsers;