import { readCookie } from "./login";

export const orgRegister = (registerComp) => {
    const request = new Request("/users/register", {
        method: "post",
        body: JSON.stringify({
            name:registerComp.state.orgName,
            email:registerComp.state.email,
            password:registerComp.state.password,
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
                window.location = "/login"
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);

        });
}

export const volRegister = (registerComp) => {
    const request = new Request("/users/register", {
        method: "post",
        body: JSON.stringify({
            firstName:registerComp.state.firstName,
            lastName:registerComp.state.lastName,
            email:registerComp.state.email,
            password:registerComp.state.password,
            type:"volunteer"
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
                window.location = "/login"
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
            
        });
}