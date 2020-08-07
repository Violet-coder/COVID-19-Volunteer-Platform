import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header from "../../../react-components/Volunteer/Header";
import All_ops from "../../../react-components/Volunteer/All_ops";

import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"




class VolunteerSeeall extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false
        }
        
    }
    componentDidMount() {
        const url = "/posts"
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            this.setState({ posts: json, isLoading: true });
        })
        .catch(error => {
            console.log(error);
        });
    }
  
    render() {
        const {queueComponent} = this.props
        const app = this.props.app
        //only display posts that are approved
        const filteredPosts = this.state.posts.filter(
            p => p.status === "Approved"
        )

        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together" posts={filteredPosts} app={app}/>
            <div>
            {this.state.isLoading ? <All_ops queueComponent={queueComponent} posts={filteredPosts}/> : null}
            </div>





            </div>



        );
    }
}

export default VolunteerSeeall;

