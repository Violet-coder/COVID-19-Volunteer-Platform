import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import PostDetail from "../../../react-components/PostDetail";
import {getApplicationFromVol} from "../../../actions/applicationList";
import Button from '@material-ui/core/Button';
import { addApplication } from "../../../actions/applicationList"
import "./styles.css"
import { Link} from 'react-router-dom';






import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"


class PostDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            isApplied: false,
            isLoading: false,
            isLoading1: false
        }
        
    }
    componentDidMount() {
        
        const id = this.props.matchProps.match.params.id
        const userid = this.props.app.state.currentUserId
        const url = `/post/${id}`
        const url1 = `/volunteer/${userid}/${id}`

        
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get post detail");
            }
        })
        .then(json => {
            this.setState({ post: json, isLoading: true });
        })
        .catch(error => {
            console.log(error);
        });

        getApplicationFromVol(url1, this)


        

    }

    
    render(){
        

        const app = this.props.app
        const userid = this.props.app.state.currentUserId
    
        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header_appli title={this.state.post.name} subtitle={this.state.post.organization}  />
            <div id="fh5co-blog" class="fh5co-bg-section">
            <div class="container">
            <div>
            { this.state.isLoading ? <PostDetail post={this.state.post}/> : null}
            </div>
            
            
            
            <Link to={{pathname:`/volunteer/orgProfile/${this.state.post.org_id}`}}><button id="organizationprofile" type='button' className=" btn btn-primary Organizationbutton" variant="contained" color="secondary">Organization Profile</button></Link>
            {
            (this.state.isApplied)? <span><Button>Applied</Button></span> : 
            <Link to="/volunteer/myapplication"><button id="applybutton" type='button' className=" btn btn-primary Applybutton" variant="contained" color="secondary" onClick={ addApplication.bind(this, userid, this.state.post)} >
            Apply Now
            </button></Link>
              
            }
           
            
            
            </div>         
            </div>  

            </div>
           





        )



    }


}

export default PostDetailPage;