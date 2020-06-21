import React from 'react';
import SignUpNav from '../../react-components/SignUp/SignUpNav';
import OrgSignUpForm from '../../react-components/SignUp/OrgSignUpForm';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);



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
        const target = event.target
        const name = target.name
        const value = target.value
        let errors = this.state.errors;
        // console.log(event)
        // console.log(name)
        // console.log(value)
        
        switch(name) {
            case 'orgName':
                console.log("orgname", value.length)
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

    validateForm = (errors) => {
        let valid = true;
    
        console.log(Object)
        console.log(Object.values)
        Object.values(errors).forEach(
            (val) => val.length >0 && (valid = false)
        );
        if(this.state.password !== this.state.confirmPassword){
            this.setState({errors: 
                {
                    orgName: "",
                    email: "",
                    password: "",
                    confirmPassword: "Password doesn't match.",
                }
            })
            valid =false;
        }
    
        return valid;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        //console.log(this.state)

    }

    render() {
        const {errors} = this.state;

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