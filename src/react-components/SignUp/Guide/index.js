import React from 'react';
import {Link} from "react-router-dom";

class Guide extends React.Component {
    render() {
        return(
            <div id="fh5co-started">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <span>Are you a volunteer or a company?</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 ">
                            <Link to="/orgSignUp">
                            <div class="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span class="icon">
                                    <i class="icon-command"></i>
                                </span>
                                <h3>VOLUNTEER</h3>
                                <p>If you are a volunteer looking for an opportunities to help people affected by COVID-19, you can find opportunities here.</p>
                                <p><button type="submit" class="btn btn-primary">Sign Up as a Volunteer</button></p>

                            </div>
                            </Link>
                        </div>
                        <div class="col-md-4 col-sm-6 ">
                            <Link to="/">
                            <div class="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span class="icon">
                                    <i class="icon-eye"></i>
                                </span>
                                <h3>COMPANY</h3>
                                <p>If you are a company working to help people through this diffcult time, you can post opportunities here.</p>
                                <p><button type="submit" class="btn btn-primary">Sign Up as a Company</button></p>
                            
                            </div>
                            </Link>
                        </div>
        
                        <div class="clearfix visible-md-block"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Guide;