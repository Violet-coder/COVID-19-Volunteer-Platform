import React from 'react';
import HomeNav from '../../react-components/HomeNav';
import HomeHeader from "../../react-components/HomeHeader";
import Footer from "../../react-components/Footer";
import Guide from "../../react-components/SignUp/Guide";

class SignUpGuide extends React.Component {
    render(){
        return(
            <div id='page'>
            <HomeNav />
            <Guide />
            <Footer />
        </div>
        )
    }
}

export default SignUpGuide;