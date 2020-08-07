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
// import "./styles.css"




class Userpage_volunteer extends React.Component{
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
        const app = this.props.app
        const {queueComponent,recommended_posts, posts,applied_posts} = this.props
        
         //only display posts that are approved
        const filteredPosts = this.state.posts.filter(
            p => p.is_approved === true
        )
        


        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together"  queueComponent={queueComponent}/>
            {/* <div>{ this.state.isLoading ? <Recommended_ops queueComponent={queueComponent} posts={filteredPosts} applied_posts={applied_posts}/>: null}
</div> */}
            <div>
            {this.state.isLoading ? <All_ops queueComponent={queueComponent} posts={filteredPosts}/> : null}
            <div className="center">
					<p><span><Link to="/volunteer/seeall"><button type="submit" className="btn btn-primary">See All</button></Link></span></p>
				</div>
            </div>
            
			
            
            




            </div>



        );
    }
}

export default Userpage_volunteer;

