import React from 'react';
import "./styles.css";
class LoginForm extends React.Component {
    render(){
        return(
            <div id="fh5co-started">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            
                            <h2>Log in</h2>
                            <span>Email</span>
                            <p><input type="text" name="email" /></p>
                            <span>Password</span>
                            <p><input type="text" name="password" /></p>
                            <p><a href='/'>Forget your email or password?</a></p>
                            <p><button type="submit" class="btn btn-primary">Log In</button></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;