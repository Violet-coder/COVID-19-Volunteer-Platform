import React from "react";

class Navbar extends React.Component{
    render() {
        const { user } = this.props;

        return (
            <nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2 text-left">
					<div id="fh5co-logo"><a href="index.html">Volunteer<span>.</span></a></div>
				</div>
				<div class="col-xs-10 text-right menu-1">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li class="has-dropdown">
							<a href="services.html">Account</a>
							<ul class="dropdown">
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