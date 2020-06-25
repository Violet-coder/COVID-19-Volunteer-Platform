import React from 'react';
import Button from '@material-ui/core/Button';
import Volunteer from "../../../Pages/Volunteer/Vol"
import { addApplication } from "../../../actions/applicationList"
import "./styles.css"
import { Link} from 'react-router-dom';
import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";





// const Volunteer = Volunteer
class PostDetail_button extends React.Component {
    

    render(){
        const {application} = this.props
        // console.log("-------"+Volunteer.state)
        return(
            <div id="fh5co-blog" class="fh5co-bg-section">
            <div className="button">
            <span><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}}>
            Organization Profile
            </Button></span>
            <span><Link to="/volunteer/My_application"><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}} onClick={ addApplication.bind(this, Volunteer, application)}>
            Apply Now
            </Button></Link></span>
            </div>
            
            </div>  



        )


    }

}

export default PostDetail_button;
