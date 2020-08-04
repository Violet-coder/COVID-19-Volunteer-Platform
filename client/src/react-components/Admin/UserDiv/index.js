import React from 'react';
import './styles.css';
import { UID, uid } from 'react-uid';
import {Link} from "react-router-dom";
import {deleteUser} from "../../../actions/deleteUser";
class UserDiv extends React.Component {
    render(){
        const volusers = this.props.volusers;
        //console.log("userlist", volusers)
        const queueComponent = this.props.queueComponent;
        return(
            <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>Admin Functionality</span>
                            <h2>User Management</h2>
                        </div>
                    </div>
                    {
                        volusers.map((vol) => {
                            return(<div key={uid(vol)} className=" animate-box" data-animate-effect="fadeInUp">
                                    <div className="fh5co-post">

                                        <h3 className="user-name">{"ID: "+ vol.id +" " + vol.firstName + " "+ vol.lastName}</h3>
                                        <button  type="submit" className="btn btn-primary user-manage"  
                                            onClick={deleteUser.bind(this, queueComponent, vol)}>Delete</button>
                                        <Link to={{pathname:`/admin/volunteers/editvolprofile/${vol.id}`}}>
                                        <button  type="submit" className="btn btn-primary user-manage">Edit</button></Link> 
                                        <Link to={{pathname:`/admin/volunteers/volprofile/${vol.id}`}}>
                                            <button  type="submit" className="btn btn-primary user-manage" >View</button></Link>
                                    </div>
                                    </div>)}
                    )
                    }
                

                </div>
            </div>
        
        )
    }
}

export default UserDiv;