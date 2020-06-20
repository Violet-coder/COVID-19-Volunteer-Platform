import React from 'react';

class OrgSignUpForm extends React.Component {
    render() {
        return(
            <div id="fh5co-started">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <p>as an organization</p>
                            <span>Organization name</span>
                            <p><input type="text" name="company_name" /></p>
                            <span>Email</span>
                            <p><input type="text" name="email" /></p>
                            <span>Password</span>
                            <p><input type="text" name="password" /></p>
                            <span>Comfirm the password</span>
                            <p><input type="text" name="confirm_password" /></p>
                            <p><button type="submit" class="btn btn-primary">Sign Up</button></p>
                            <p><a href=''>Sign up as a volunteer here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrgSignUpForm;