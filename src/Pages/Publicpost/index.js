import React from "react";
import HomeNav from '../../react-components/HomeNav';
import HomeHeader from "../../react-components/HomeHeader";
import Posts from "../../react-components/Posts";


import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";
import Footer from "../../react-components/Footer";

class Publicpost extends React.Component {
    
    render() {
        const {posts} = this.props
        return(
            <div id='page'>
                <HomeNav />
                <HomeHeader />
                <Posts posts={posts}/>
                <Footer />
            </div>
        )
    }
}

export default Publicpost;