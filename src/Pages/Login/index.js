import React from 'react';
import LoginNav from '../../react-components/Login/LoginNav';
import LoginForm from '../../react-components/Login/LoginForm';


class Login extends React.Component{
    render(){
        return(
            <div id='page'>
                <LoginNav />
                <LoginForm />
            </div>
        )
    }
}

export default Login;
