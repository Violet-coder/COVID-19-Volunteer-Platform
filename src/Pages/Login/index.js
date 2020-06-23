import React from 'react';
import { withRouter } from "react-router-dom";
import LoginNav from '../../react-components/Login/LoginNav';
import LoginForm from '../../react-components/Login/LoginForm';
import CheckLogin from '../../react-components/Login/CheckLogin';
import "./styles.css";

const user1 ={
    email:"user1@user.com",
    password: "user1",
};

class Login extends React.Component{
     constructor(props){
        super(props);
        this.state = { 
            email : "",
            password : "",
            errors: {
                email: "",
                password: "",     
            },
            
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
            
            case 'email':
                errors.email = 
                    validEmailRegex.test(value)
                        ? ''
                        : "Email is not valid."
                break;
            case 'password':
                errors.password = 
                    value.length < 4
                        ? "Password must be 4 characters long."
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

        if(!state.email){
            valid = false;
            errors["email"]="Please enter email."
        }
        if(!state.password){
            valid = false;
            errors["password"]="Please enter password."
        }

        this.setState({
            errors: errors
        })
    
        return valid;
    }

    handleSubmit = (event) => {
        let errors = this.state.errors
        event.preventDefault();
        if(this.validateForm()) {
            console.info('Valid Form')
            //console.log(this.state)
        //     if(this.state.email === 'user1@user.com' && 
        //         this.state.password === 'user1'){
        //             console.log("logging in")
        //             this.props.history.push('/Userpage_volunteer')
        //         } else {
        //             errors["password"]="Email or password is not correct."
                    
        //         }
        // } else {
        //     console.error('Invalid Form')
            console.log("this passport",this.props.passport)
            const p = this.props.passport;
            
            p.login(this.state.email,this.state.password, 
                ()=> {this.props.history.push('/Userpage_volunteer')})
            console.log(p)
            if(p.isLogin===false){
                console.log('error')
                errors["password"]="Email or password is not correct."
            }
        } else {
            console.error('Invalid Form')
        }

        this.setState({
            errors: errors
        })
        //console.log(this.state)

    }

    render(){
    
        return(
            <div id='page'className='login'>
                <LoginNav />
                <LoginForm 
                email={this.state.email}
                password={this.state.password}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default withRouter(Login);
