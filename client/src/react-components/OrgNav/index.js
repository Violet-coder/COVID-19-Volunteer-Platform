import React from "react";
import { withRouter,Link } from "react-router-dom";
import "./styles.css";
import {logout} from '../../actions/login'
/* The Navigarion Bar of Organization Component */
class OrgNav extends React.Component {
  logoutUser = (app) => {
    this.props.history.push("/");
    logout(app);
  };

  render() {
    const app = this.props.app
    
    return (
      <nav className="fh5co-nav" role="navigation" id='nav'>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="fh5co-logo"><a href="/">Volunteer<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><Link to="/organization/profile">Profile</Link></li>
                                <li><Link to="/organization/post">Post a New Job</Link></li>
                                <li><Link to="/organization/applicants">All Applicants</Link></li>
                                <li><a onClick={()=> this.logoutUser(app)}>Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
    );
  }
}

export default withRouter(OrgNav);
