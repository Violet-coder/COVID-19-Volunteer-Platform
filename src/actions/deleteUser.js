export const deleteUser = (queue, user) => {
    // here we get the user to be deleted from front-end
    // code below requires server call: remove the deleted user from database
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