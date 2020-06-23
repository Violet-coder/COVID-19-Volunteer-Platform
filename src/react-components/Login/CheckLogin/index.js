import React from 'react';


class CheckLogin extends React.Component {
    constructor(props){
        super(props);
        this.isLogin = false;
    }

    login(email, password, callback) {
        if(email === 'user1@user.com' && 
                password === 'user1'){
                    console.log("logging in")
                    this.isLogin = true;
                    callback();
                } else {
                    const error="Email or password is not correct."
                    //alert('login failed');
                }
        
    }

}

export default CheckLogin;