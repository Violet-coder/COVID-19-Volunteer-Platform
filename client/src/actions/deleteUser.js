export const deleteUser = (queue, user) => {
    // here we get the user to be deleted from front-end
    // code below requires server call: remove the deleted user from database
    const filteredUser = queue.state.volusers.filter(
        u => {
            return u !== user;
        }
    );

    const filteredOrganizations= queue.state.organizations.filter(
        u => {
            return u !== user;
        }
    );
    if(window.confirm("Are you sure to DELETE this user?")){
    queue.setState(
        {
            volusers: filteredUser,
            organizations: filteredOrganizations,
        }
    )
    }
};

export const adminDeleteOrganization = (orgComp, org) =>{
    const filteredOrg = orgComp.state.organizations.filter(
        o => {
            return o._id !== org._id;
        }
    );    

    const url = `/admin/organization/delete/${org._id}`

    const request = new Request(url, {
        method: "post",
        body:"",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    if(window.confirm('Are you sure to delete this organization?')){
    fetch(request)
        .then(function(res){
            if(res.status === 200){

                orgComp.setState({
                    organizations: filteredOrg,
                    dataIsReturned: true
                })
            
            } else {
                console.log("Error: cannot delete this organization.")
            }
        })
        .catch((error) => {
            console.log(error)
            }
        )
    }

}



export const adminDeleteVolunteer = (volComp, vol) =>{
    const filteredVol = volComp.state.volunteers.filter(
        o => {
            return o._id !== vol._id;
        }
    );    

    const url = `/admin/volunteer/delete/${vol._id}`

    const request = new Request(url, {
        method: "post",
        body:"",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    if(window.confirm('Are you sure to delete this volunteer?')){
    fetch(request)
        .then(function(res){
            if(res.status === 200){

                volComp.setState({
                    volunteers: filteredVol,
                    dataIsReturned: true
                })
            
            } else {
                console.log("Error: cannot delete this volunteer.")
            }
        })
        .catch((error) => {
            console.log(error)
            }
        )
    }





}