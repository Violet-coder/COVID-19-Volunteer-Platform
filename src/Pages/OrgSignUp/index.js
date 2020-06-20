import React from 'react';
import SignUpNav from '../../react-components/SignUp/SignUpNav';
import OrgSignUpForm from '../../react-components/SignUp/OrgSignUpForm';

class OrgSignUp extends React.Component {
    render() {
        return (
            <div id='page'>
            <SignUpNav />
            <OrgSignUpForm />
            </div>
        )
    }
}

export default OrgSignUp;