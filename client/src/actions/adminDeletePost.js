export const adminDeletePost = (queue, post) =>{
    // now get the data from queue and post, which are passed from its parent component
    // in phase 2 get data from client side and pass to back-end
    // code below requires server call: delete the specific post in database
    const filteredPost = queue.state.posts.filter(
        p => {
            return p._id !== post._id;
        }
    );
    
    const url = `/admin/post/delete/${post._id}`

    const request = new Request(url, {
        method: "post",
        body:"",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    if(window.confirm('Are you sure to delete this post?')){
    fetch(request)
        .then(function(res){
            if(res.status === 200){
                queue.setState({
                    posts: filteredPost,
                    dataIsReturned: true
                })
            } else {
                console.log("Error: cannot delete this post.")
            }
        })
        .catch((error) => {
            console.log(error)
            }
        )
    }





}