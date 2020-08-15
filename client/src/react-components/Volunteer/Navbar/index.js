import React from "react";
import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
import {withRouter, Link} from 'react-router-dom'
import { logout } from '../../../actions/login';


class Navbar extends React.Component{
	logoutUser = (app) => {
		
        this.props.history.push("/");
        logout(app);
	};
	
    render() {
		const { user } = this.props;
		const app = this.props.app

        return (
			<nav className="admin-nav" role="navigation">
			<div className="container">
				<div className="row">
					<div className="col-xs-2 text-left">
						<div id="admin-logo" ><a href="/" >VOLUNTEER<span>.</span></a></div>
					</div>
					<div className="col-xs-10 text-right menu-1">
					<ul>
						<li><Link to="/volunteer/userpage">Home</Link></li>
						<li><Link to="/volunteer/myprofile">My Profile</Link></li>
						{/* <li><Link to="/volunteer/editprofile">Update Profile</Link></li> */}
		
						{/* <li className="has-dropdown">
							<a href="/volunteer/myprofile">My Profile</a>
							<ul className="dropdown">
								<li><a href="/volunteer/editprofile">Update Profile</a></li>
							</ul>
						</li> */}
						<li><Link to="/volunteer/myapplication" >My Application</Link></li>
							
							
						
						<li><Link onClick={()=> {
							this.logoutUser(app)}}>Log Out</Link></li>					
					</ul>
					</div>
				</div>
				
			</div>
		</nav>     
        )
    }
}

export default withRouter(Navbar);