import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header from "../../../react-components/Volunteer/Header";
import Recommended_ops from "../../../react-components/Volunteer/Recommended_op";

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"




class Userpage_volunteer extends React.Component{

    
       
    
    render() {
        const app = this.props.app
        console.log('vol userpage app',this.props.app)
        const {queueComponent,recommended_posts, posts,applied_posts} = this.props
        /* console.log("queueComponent",queueComponent)
        console.log("posts",posts)  */
         //only display posts that are approved
        const filteredPosts = posts.filter(
            p => p.status === 'Approved'
        )
        const filteredRecommendedPosts = recommended_posts.filter(
            p => p.status === 'Approved'
        )


        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together" posts={filteredPosts} queueComponent={queueComponent}/>
            <Recommended_ops queueComponent={queueComponent} posts={filteredRecommendedPosts} applied_posts={applied_posts}/>





            </div>



        );
    }
}

export default Userpage_volunteer;

