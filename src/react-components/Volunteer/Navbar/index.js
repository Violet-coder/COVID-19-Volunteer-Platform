import React from "react";
import "../../../css/animate.css";
// import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";


class Navbar extends React.Component{
    render() {
        const { user } = this.props;

        return (
            <nav className="fh5co-nav" role="navigation">
		<div className="container">
			<div className="row">
				<div className="col-xs-2 text-left">
					<div id="fh5co-logo"><a href="/">Volunteer<span>.</span></a></div>
				</div>
				<div className="col-xs-10 text-right menu-1">
					<ul>
						<li><a href="/volunteer/userpage">Home</a></li>
						<li><a href="/volunteer/myprofile">My Profile</a></li>
						<li><a href="/volunteer/editprofile">Update Profile</a></li>
		
						{/* <li className="has-dropdown">
							<a href="/volunteer/myprofile">My Profile</a>
							<ul className="dropdown">
								<li><a href="/volunteer/editprofile">Update Profile</a></li>
							</ul>
						</li> */}
						<li><a href="/volunteer/myapplication" >My Application</a></li>
							
							
						
						<li><a href="/">Log Out</a></li>					
					</ul>
						
					
				</div>
			</div>
			
		</div>
	</nav>      
        )
    }
}

export default Navbar;