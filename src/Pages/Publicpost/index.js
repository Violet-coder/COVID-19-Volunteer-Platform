import React from "react";
import HomeNav from '../../react-components/HomeNav';
import Header from "../../react-components/Volunteer/Header";
import Posts from "../../react-components/Posts";


import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import './styles.css'
import Footer from "../../react-components/Footer";

class Publicpost extends React.Component {
    
    render() {
        const {posts} = this.props
        return(
            <div id='page'>
                <HomeNav />
                <Header title="Support Our Community During Covid-19" subtitle="Let's work together"/>
                <Posts posts={posts}/>
                <Footer />
            </div>
        )
    }
}

export default Publicpost;