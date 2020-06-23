import React from "react";


class SignUpNav extends React.Component {
    render() {
        return(
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="fh5co-logo"><a href="/">Volunteer<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li className="active"><a href="/signGuide">Sign Up</a></li>
                                <li><a href="/login">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
        )
    }

}

export default SignUpNav;