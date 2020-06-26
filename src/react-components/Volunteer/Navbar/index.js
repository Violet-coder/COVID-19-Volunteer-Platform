import React from "react";


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
						<li><a href="/">Home</a></li>
						{/* <li><a href="#">{user}</a></li> */}
						<li><a href="/volunteer/myprofile">My Profile</a></li>
						<li><a href="/volunteer/myapplication">My Application</a></li>
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