export const adminDeletePost = (queue, post) =>{
    // now get the data from queue and post, which are passed from its parent component
    // in phase 2 get data from client side and pass to back-end
    // code below requires server call: delete the specific post in database
    const filteredPost = queue.state.posts.filter(
        p => {
            return p._id !== post._id;
        }
    );
    //console.log("filetered post", filteredPost)
    

    const url = `/admin/post/${post._id}`

    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    fetch(request)
        .then(function(res){
            if(res.status === 200){
                if(window.confirm('Are you sure to delete this post?')){
                        queue.setState({
                            posts: filteredPost,
                            dataIsReturned: true
                })}
            
            } else {
                console.log("Error: cannot approve this post.")
            }
        })
        .catch((error) => {
            console.log(error)
            }
        )





}