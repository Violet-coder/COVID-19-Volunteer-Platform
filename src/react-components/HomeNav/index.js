import React from "react";
import Home from '../../Pages/Home';

class HomeNav extends React.Component {
    render() {
        return(
            <nav class="fh5co-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2 text-left">
                            <div id="fh5co-logo"><a href="index.html">Volunteer<span>.</span></a></div>
                        </div>
                        <div class="col-xs-10 text-right menu-1">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="/">Sign Up</a></li>
                                <li><a href="about.html">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
        )
    }

}

export default HomeNav;