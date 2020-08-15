import React from 'react';
import "./styles.css";
class LoginForm extends React.Component {
    render(){
        const {
            email,
            password,
            errors,
            msg,
            handleChange,
            handleSubmit,
        } = this.props;
        return(
            <div id="fh5co-started">
                <div className="container login">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            
                            <h2>Log in</h2>
                            <form onSubmit={handleSubmit}>
                            <div>
                                <span><label htmlFor='email' >Email</label></span>
                                <input type="email" name="email" onChange={handleChange} />
                                {errors.email.length > 0 && 
                                    <span><small className='error'>{errors.email}</small></span>}
                            </div>
                            <div>
                                <span><label htmlFor='password'>Password</label></span>
                                <input type="password" name="password" onChange={handleChange} />
                                {errors.password.length > 0 && 
                                    <span><small className='error'>{errors.password}</small></span>}
                                {msg ?
                                <span><small className='error'>{msg.body}</small></span> : null}
                            </div>

                            <button type="submit" className="btn btn-primary">Log In</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;