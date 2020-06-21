import React from 'react';
import './styles.css'

class OrgSignUpForm extends React.Component {
    render() {
        const {
            orgName,
            email,
            password,
            confirmPassword,
            errors,
            handleChange,
            handleSubmit,
        } = this.props;
        // console.log("props",this.props)
        return(
            <div id="fh5co-started">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <p>as an organization</p>
                            <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <span><label htmlFor='orgName'>Organization name</label></span>
                                <input type="text" name="orgName" onChange={handleChange} value={orgName || ""} />

                                {errors.orgName.length > 0 && 
                                    <span><small className='error'>{errors.orgName}</small></span>}
                            </div>
                            <div>
                                <span><label htmlFor='email'>Email</label></span>
                                <input type="email" name="email" onChange={handleChange} value={email || ""} noValidate/>
                                {errors.email.length > 0 && 
                                    <span><small className='error'>{errors.email}</small></span>}  
                            </div>
                            <div>
                                <span><label htmlFor='password'>Password</label></span>
                                <input type="password" name="password" onChange={handleChange} value={password || ""} noValidate />
                                {errors.password.length > 0 && 
                                    <span><small className='error'>{errors.password}</small></span>}
                            </div>
                            <div>
                                <span><label htmlFor='confirmPassword'>Comfirm the password</label></span>
                                <input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword || ""} noValidate />
                                {errors.confirmPassword.length > 0 && 
                                    <span><small className='error'>{errors.confirmPassword}</small></span>}
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                            </form>
                            <p><a href=''>Sign up as a volunteer here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrgSignUpForm;