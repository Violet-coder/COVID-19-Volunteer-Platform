import React from 'react';
import AdminNav from '../../AdminNav';
import VolProfileForm from "../VolProfileForm";

class VolFixedProfilePage extends React.Component {
    render(){
        return(
            <div id='page'>
                <AdminNav />
                <VolProfileForm />
            </div>
        )
    }
}

export default VolFixedProfilePage;