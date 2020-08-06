export const orgRegister = (registerComp) => {
    const request = new Request("/users/register", {
        method: "post",
        body: JSON.stringify({
            name:registerComp.name,
            email:registerComp.email,
            password:registerComp.password,
            type:"organization"
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
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
}