import React from "react";
import './styles.css'

class HomeNav extends React.Component {
    render() {
        return(
            <nav className="admin-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="admin-logo" ><a href="/" >VOLUNTEER<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/signGuide">Sign Up</a></li>
                                <li><a href="/login">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        )
    }

}

export default HomeNav;