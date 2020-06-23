import React from 'react';
import Button from '@material-ui/core/Button';
import Volunteer from "../../../Pages/Volunteer/Vol"
import My_application from "../../../Pages/Volunteer/My_application"
import { addApplication } from "../../../actions/applicationList"
import "./styles.css"
import { Route,Link} from 'react-router-dom';


// const Volunteer = Volunteer
class PostDetail_button extends React.Component {
    

    render(){
        const {application} = this.props
        // console.log("-------"+Volunteer.state)
        return(
            <div className="button">
            <span><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}}>
            Organization Profile
            </Button></span>
            <span><Link to="/volunteer/My_application"><Button variant="contained" color="secondary" style={{width:"230px", textAlign:"center"}} onClick={ addApplication.bind(this, Volunteer, application)}>
            Apply Now
            </Button></Link></span>
            
            </div>  



        )


    }

}

export default PostDetail_button;
