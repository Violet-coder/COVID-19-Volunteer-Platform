import React from "react";
import HomeNav from '../../react-components/HomeNav';
import HeaderwithSearchbar from "../../react-components/HeaderwithSearchBar";
import Posts from "../../react-components/Posts";


import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import './styles.css'
import Footer from "../../react-components/Footer";

class Publicpost extends React.Component {
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
        //only display posts that are approved
        const filteredPosts = this.state.posts.filter(
            p => p.status === "Approved"
        )

        return(
            <div id='page'>
                <HomeNav />
                <HeaderwithSearchbar title="Support Our Community During Covid-19" subtitle="Let's work together" posts={filteredPosts} />
                <div>
                {this.state.isLoading ? <Posts posts={filteredPosts}/> : null}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Publicpost;