import React from "react";
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import {BackButton} from "../../Organization/Hook/backButton"

class ApplicationList extends React.Component{

    render(){
       const {applications} = this.props

       return(
        <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <div className="row">
            {applications.map(application => (<div key={uid(application)} className="fh5co-post"  style={{height: "100px"}}>
                <h3><Link to={{pathname:`/volunteer/post/${application.post_id}`}} >{ application.post_name}</Link></h3>
                <span><button type="submit" class="btn btn-primary" >{ application.applicant_status }</button></span>
                </div>
                ))}

            </div>
            <span className='Applybutton'><BackButton/></span>

            </div>
        </div>
        
       )
    }
}

export default ApplicationList;