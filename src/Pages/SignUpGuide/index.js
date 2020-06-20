import React from 'react';
import SignUpNav from '../../react-components/SignUp/SignUpNav';
import Footer from "../../react-components/Footer";
import Guide from "../../react-components/SignUp/Guide";


class SignUpGuide extends React.Component {
    render(){
        return(
            <div id='page'>
            <SignUpNav />
            <Guide />
            <Footer />
            </div>
        )
    }
}

export default SignUpGuide;