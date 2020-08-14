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
                            <div id="fh5co-logo"><a href="/" id='a-header'>Volunteer</a><span>.</span></div>
                        </div>
                        <div className="col-xs-10 text-right" >
                            <ul>
                                <Link to="/organization/profile"><li id='nav-li'>Profile</li></Link>
                                <Link to="/organization/post"><li id='nav-li'>Post a New Job</li></Link>
                                <Link to="/organization/applicants"><li id='nav-li'>All Applicants</li></Link>
                                <li id='nav-li' onClick={()=> this.logoutUser(app)}>Log Out</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
    );
  }
}

export default withRouter(OrgNav);
