export const deleteUser = (queue, user) => {
    console.log("to delete queue",queue.state.volusers)
    console.log("student", user)
    const filteredUser = queue.state.volusers.filter(
        u => {
            return u !== user;
        }
    );
    //console.log(filteredUser)

    queue.setState(
        {
            volusers: filteredUser
        }
    )
};