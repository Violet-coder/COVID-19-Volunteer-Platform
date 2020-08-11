export const adminApprovePost = (queue, post) => {
    // now we get the post data from global state
    // in phase 2 get data from server, below code requires server call
    // write the upated post status to database
    post.status = 'Approved'
    //console.log('id',op.id)

    //console.log("index of post", index)
    //console.log("update state", queue.state.posts)
    
    
    

    const url = `/admin/post/approve/${post._id}`

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify({
            status: "Approved"
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    fetch(request)
        .then(function(res){
            if(res.status === 200){
                if(window.confirm("Are you sure to approve this post?")){   
                    queue.setState({
                        post:post,
                        dataIsReturned: true
                    })
                }
            } else {
                console.log("Error: cannot approve this post.")
            }
        })
        .catch((error) => {
            console.log(error)
        }
        )

    console.log("this",queue)
}