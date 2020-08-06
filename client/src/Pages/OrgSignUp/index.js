import React from 'react';
import SignUpNav from '../../react-components/SignUp/SignUpNav';
import OrgSignUpForm from '../../react-components/SignUp/OrgSignUpForm';
import {orgRegister} from '../../actions/register'




class OrgSignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orgName : null,
            email : null,
            password : null,
            confirmPassword : null,
            errors: {
                orgName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }

        };
    }

    handleChange = (event) => {
        event.preventDefault();
        //const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const validEmailRegex = /\S+@\S+\.\S+/;
        const target = event.target
        const name = target.name
        const value = target.value
        let errors = this.state.errors;

        
        switch(name) {
            case 'orgName':
               
                errors.orgName = 
                    value.length < 4
                        ? "Organization name must be 4 characters long."
                        : '';
                break;
            case 'email':
                errors.email = 
                    validEmailRegex.test(value)
                        ? ''
                        : "Email is not valid."
                break;
            case 'password':
                errors.password = 
                    value.length < 8
                        ? "Password must be 8 characters long."
                        : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword =
                    value.length < 8
                    ? "Password must be 8 characters long."
                    : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value})
        // console.log("state", this.state)
    }

    validateForm = () => {
        let valid = true;
        let state = this.state
        let errors= this.state.errors


        Object.values(errors).forEach(
            (val) => val.length >0 && (valid = false)
        );

        if(!state.orgName){
            valid = false;
            errors["orgName"]="Please enter organization name."
        }

        if(!state.email){
            valid = false;
            errors["email"]="Please enter email."
        }
        if(!state.password){
            valid = false;
            errors["password"]="Please enter password."
        }
        if(!state.confirmPassword){
            valid = false;
            errors["confirmPassword"]="Please enter password."
        }

        

        if(this.state.password !== this.state.confirmPassword){
            console.log(errors)
            errors['confirmPassword']="Password doesn't match."
            valid =false;
        }
        this.setState({
            errors: errors
        })
    
        return valid;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validateForm()) {
            console.info('Valid Form')
            orgRegister(this)
        } else {
            console.error('Invalid Form')
        }
        //console.log(this.state)

    }

    render() {


        return (
            <div id='page'>
            <SignUpNav />
            <OrgSignUpForm 
                orgName={this.state.orgName}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
            </div>
        )
    }
}

export default OrgSignUp;