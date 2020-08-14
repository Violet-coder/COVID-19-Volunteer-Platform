import React from "react";
import HomeNav from '../../react-components/HomeNav';
import Header_appli from "../../react-components/Volunteer/Header_appli";
import PostDetail from "../../react-components/PostDetail"
import { Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '../../react-components/Dialog';
import './styles.css'
import {BackButton} from "../../react-components/Organization/Hook/backButton"


import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import Footer from "../../react-components/Footer";



    
class PublicPostDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},          
            isLoading: false,
            isOpen: false
        }
        
    }
    componentDidMount() {
        
        const id = this.props.matchProps.match.params.id
        const url = `/post/${id}`

        
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


    }
    
      
    render() {
    
       
        return(
            <div id='page'>
                <HomeNav />
                <Header_appli title={this.state.post.name} subtitle={this.state.post.organization}/>
                <div id="fh5co-blog" class="fh5co-bg-section">
                <div class="container">
                {this.state.isLoading ? <PostDetail post={this.state.post}/> : null}
                
                <Link to={{pathname:`/orgProfile/${this.state.post.org_id}`}}><button id="organizationprofile"className=" btn btn-primary Organizationbutton" variant="contained" color="secondary">
                Organization Profile
                </button></Link>
                <button id="applybutton" type='button' onClick={(e) => this.setState({isOpen: true})} className="btn btn-primary Applybutton" variant="contained" color="secondary">
                Apply Now
                </button>

                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false})}>If you are interested in this opportunity, please log in.</Dialog>

                <span className='Applybutton'><BackButton/></span>

                
                
                </div>
            
                
                </div>  
                <Footer />
            </div>
        )
    }
}

export default PublicPostDetailPage;

