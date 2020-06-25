import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

/* The Navigarion Bar of Organization Component */
class OrgNav extends React.Component {
  render() {
    
    return (
      <nav className="fh5co-nav" role="navigation" id='nav'>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="fh5co-logo"><a href="index.html">Volunteer<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/organization/post">Post a New Job</Link></li>
                                <li><Link to="/organization/profile">Profile</Link></li>
                                <li><Link to="/organization/applicants">All applicants</Link></li>
                                <li><Link to="/">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
    );
  }
}

export default OrgNav;
