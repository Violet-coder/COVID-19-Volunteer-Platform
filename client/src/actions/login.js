export const readCookie = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json) {
                app.setState({ currentUser: json.currentUser,
                               currentUserId:json.currentUserId,
                               type: json.type,
                               dataIsReturned: true });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify({
            email: loginComp.state.email,
            password: loginComp.state.password
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    // Send the request with fetch()
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } 
    })
    .then(json => {
        if (json.currentUser !== undefined) {
            app.setState({ currentUser: json.currentUser,
                currentUserId:  json.currentUserId,
                type: json.type});
        } else {
            loginComp.setState({
                message: { type: "error", body: "Email or password is not correct." }
            })

        }
    })
    .catch(error => {
        console.log(error);
        
    });
};


// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                currentUserId:null,
                type:null,
                message: { type: "Success", body: "Log out successfully!" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};