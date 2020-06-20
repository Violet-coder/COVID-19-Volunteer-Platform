import React from 'react';
import SignUpNav from '../../react-components/SignUp/SignUpNav';
import VolSignUpForm from '../../react-components/SignUp/VolSignUpForm';

class VolSignUp extends React.Component {
    render(){
        return(
            <div id='page'>
                <SignUpNav />
                <VolSignUpForm />
            </div>
        )
    }
}
export default VolSignUp;