import React from "react";
import { uid } from "react-uid";
import { Link } from "react-router-dom";

class ApplicationList extends React.Component{

    render(){
       const {applications} = this.props

       return(
        <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <div className="row">
            {applications.map(application => (<div key={uid(application)} className="fh5co-post"  style={{height: "100px"}}>
                <h3><Link to={{pathname:`/volunteer/post/${application.post_id}`}} >{ application.name}</Link></h3>
                <span><button type="submit" class="btn btn-primary" >{ application.status }</button></span>
                </div>
                ))}

            </div>
            </div>
        </div>
        
       )
    }
}

export default ApplicationList;