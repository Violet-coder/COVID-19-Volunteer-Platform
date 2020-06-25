import React from "react";
import { uid } from "react-uid";

class ApplicationList extends React.Component{
    render(){
       const {applications} = this.props

       return(
        <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <div className="row">
            {applications.map(application => (<div key={uid(application)} className="fh5co-post"  style={{height: "100px"}}>
                <h3><a href="#">{ application.name}</a></h3>
                <span><button type="submit" class="btn btn-primary" >{ application.org_status }</button></span>
                </div>
                ))}

            </div>
            </div>
        </div>
        
       )
    }
}

export default ApplicationList;