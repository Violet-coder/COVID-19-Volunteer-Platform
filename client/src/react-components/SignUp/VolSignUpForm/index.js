import React from 'react';

class VolSignUpForm extends React.Component {
    render(){
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            errors,
            message,
            handleChange,
            handleSubmit,
        } = this.props;
        return(
            <div id="fh5co-started">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sign up</h2>
                            <p>as a volunteer</p>
                            <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <span><label htmlFor='firstName'>First name</label></span>
                                <input type="text" name="firstName" onChange={handleChange} value={firstName || ""} />

                                {errors.firstName.length > 0 && 
                                    <span><small className='error'>{errors.firstName}</small></span>}
                            </div>
                            <div>
                                <span><label htmlFor='lastName'>Last name</label></span>
                                <input type="text" name="lastName" onChange={handleChange} value={lastName || ""} />

                                {errors.lastName.length > 0 && 
                                    <span><small className='error'>{errors.lastName}</small></span>}
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
                                {message.body.length > 0 && 
                                    <span><small className='error'>{message.body}</small></span>}
                            </div>
                            <button type="submit" className="btn btn-primary sign">Sign Up</button>
                            </form>
                            <p><a href='/orgSignUp'>Sign up as an organization here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VolSignUpForm;