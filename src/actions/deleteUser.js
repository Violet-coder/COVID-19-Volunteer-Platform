export const deleteUser = (queue, user) => {
    //console.log("to delete queue",queue.state.volusers)
    //console.log("student", user)
    const filteredUser = queue.state.volusers.filter(
        u => {
            return u !== user;
        }
    );
    //console.log(filteredUser)
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