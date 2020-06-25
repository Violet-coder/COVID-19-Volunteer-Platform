import React from 'react';


class CheckLogin extends React.Component {
    constructor(props){
        super(props);
        this.isLogin = false;
    }

    login(email, password, callback) {
        if(email === 'user1@user.com' && 
                password === 'user1'){
                console.log("logging in as volunteer")
                this.isLogin = true;
                callback();
                }
        else if(email === 'user2@user.com' &&
                password === 'user2') {
                console.log("loginng in as organization")
                this.isLogin = true;
                callback();
        }
        else if(email === 'admin@admin.com' &&
                password === 'admin') {
                console.log("loginng in as admin")
                this.isLogin = true;
                callback();
        } 

        else {
            const error="Email or password is not correct."
            //alert('login failed');
        }

    }

}

export default CheckLogin;