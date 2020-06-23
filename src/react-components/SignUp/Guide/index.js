import React from 'react';
import {Link} from "react-router-dom";

class Guide extends React.Component {
    render() {
        return(
            <div id="fh5co-started">
                <div classclassName="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <span>Are you a volunteer or a company?</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 ">
                            <Link to="/volSignUp">
                            <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span className="icon">
                                    <i className="icon-command"></i>
                                </span>
                                <h3>VOLUNTEER</h3>
                                <p>If you are a volunteer looking for an opportunities to help people affected by COVID-19, you can find opportunities here.</p>
                                <p><button type="submit" className="btn btn-primary">Sign Up as a Volunteer</button></p>

                            </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                            <Link to="/orgSignUp">
                            <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                                <span className="icon">
                                    <i className="icon-eye"></i>
                                </span>
                                <h3>COMPANY</h3>
                                <p>If you are a company working to help people through this diffcult time, you can post opportunities here.</p>
                                <p><button type="submit" className="btn btn-primary">Sign Up as a Company</button></p>
                            
                            </div>
                            </Link>
                        </div>
        
                        <div className="clearfix visible-md-block"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Guide;