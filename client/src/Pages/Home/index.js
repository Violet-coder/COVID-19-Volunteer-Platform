import React from "react";
import HomeNav from '../../react-components/HomeNav';
import HomeHeader from "../../react-components/HomeHeader";

// import "../../css/animate.css";
// import "../../css/icomoon.css";
// import "../../css/bootstrap.css";
// import "../../css/magnific-popup.css";
// import "../../css/style.css";
import HomeIntro from "../../react-components/HomeIntro";
import PostArea from "../../react-components/PostArea";
import Footer from "../../react-components/Footer";

// import "../../js/modernizr-2.6.2.min.js"

class Home extends React.Component {
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
                <HomeHeader />
                <HomeIntro />
                <div>
                { (this.state.isLoading && filteredPosts.length>0) ? <PostArea desc='Opportunities  &amp; Jobs' title='Opportunities'subtitle='COVID-19 Support Opportunities' 
                          ops={filteredPosts}/> : null}
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Home;