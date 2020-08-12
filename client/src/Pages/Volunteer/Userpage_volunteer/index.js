import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header from "../../../react-components/Volunteer/Header";
import Recommended_ops from "../../../react-components/Volunteer/Recommended_op";
import All_ops from "../../../react-components/Volunteer/All_ops";
import { Link} from 'react-router-dom';

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
import {findRecommendedPost} from "../../../actions/findRecommendedPost"




class Userpage_volunteer extends React.Component{
    constructor(props) {
        super(props);
        //this.props.history.push('/volunteer/userpage')
        console.log('userpage history', this.props.history)
        this.state = {
            posts: [],
            isLoading: false
        }
        
    }
    componentDidMount() {
        findRecommendedPost(this.props.app.state.currentUserId, this)
    }

    
       
    
    render() {
        const app = this.props.app
        const {queueComponent,recommended_posts, posts,applied_posts} = this.props
        
         //only display posts that are approved
        const filteredPosts = this.state.posts.filter(
            p => p.status === "Approved"
        )
        
        

        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together"  queueComponent={queueComponent}/>
            <div>
            { (this.state.isLoading&&filteredPosts.length>0) ? <All_ops queueComponent={queueComponent} posts={filteredPosts}/> : null}
            {(this.state.isLoading&&filteredPosts.length===0)? <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <h2>No recommended post</h2>
                            <p>Update your profile</p>
                            <p>Or click on the <b>See All</b> button to see all the posts on our platform</p>
                        </div>
                </div> 	
                </div>
                </div> : null}
            <div className="center">
					<p><span><Link to="/volunteer/seeall"><button type="submit" className="btn btn-primary">See All</button></Link></span></p>
				</div>
            </div>
            
			
            
            




            </div>



        );
    }
}

export default Userpage_volunteer;

