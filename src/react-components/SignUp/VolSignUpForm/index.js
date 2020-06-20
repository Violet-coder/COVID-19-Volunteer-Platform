import React from 'react';

class VolSignUpForm extends React.Component {
    render(){
        return(
            <div id="fh5co-started">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <p>as a volunteer</p>
                            <span>First name</span>
                            <p><input type="text" name="first_name" /></p>
                            <span>Last name</span>
                            <p><input type="text" name="last_name" /></p>
                            <span>Email</span>
                            <p><input type="text" name="email" /></p>
                            <span>Password</span>
                            <p><input type="text" name="password" /></p>
                            <span>Comfirm the password</span>
                            <p><input type="text" name="confirm_password" /></p>
                            <p><button type="submit" class="btn btn-primary">Sign Up</button></p>
                            <p><a href='/orgSignUp'>Sign up as an organization here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VolSignUpForm;