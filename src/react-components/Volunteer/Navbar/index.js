import React from "react";


class Navbar extends React.Component{
    render() {
        const { user } = this.props;

        return (
            <nav className="fh5co-nav" role="navigation">
		<div className="container">
			<div className="row">
				<div className="col-xs-2 text-left">
					<div id="fh5co-logo"><a href="index.html">Volunteer<span>.</span></a></div>
				</div>
				<div className="col-xs-10 text-right menu-1">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li className="has-dropdown">
							<a href="services.html">Account</a>
							<ul className="dropdown">
								<li><a href="#">{user}</a></li>
								<li><a href="#">Profile</a></li>
								<li><a href="#">Log Out</a></li>
							</ul>
						</li> 
					</ul>
				</div>
			</div>
			
		</div>
	</nav>      
        )
    }
}

export default Navbar;