import React from 'react';
import "./styles.css";

class Footer extends React.Component {
    render(){
        return(
            <div id="fh5co-started">
                <div className='container' id='contain'>
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
            <h6 id='title'>About</h6>
            <p className="text-justify" id='intro'>We connect the organizations in their communities and are vetting COVID-19 related volunteer opportunities for safety and quality, for both the volunteer and those they are helping. Let us help people affected by COVID-19 together.</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6 id='title'>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/volSignUp">I Want to Volunteer</a></li>
              <li><a href="/orgSignUp">I Need Volunteers</a></li>
            </ul>
          </div>
          <div id="logo">Volunteer<span>.</span></div>
          </div>
          </div>
          <div>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p id="intro">Copyright &copy; 2020 All Rights Reserved by  
         <a href="#"> CSC309/Team20</a>.
            </p>
          </div>
          </div>
          </div>   
            </div>
        )
    }
}
export default Footer;