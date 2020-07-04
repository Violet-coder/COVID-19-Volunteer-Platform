export const adminApprovePost = (queue, op) => {
    // now we get the post data from global state
    // in phase 2 get data from server, below code requires server call
    // write the upated post status to database
    op.status = 'Approved'
    let posts = queue.state.posts
    //console.log('id',op.id)
    const index = posts.findIndex(
        o => o.id == op.id
    )
    //console.log("index of post", index)
    //console.log("update state", queue.state.posts)
    
    
    if(window.confirm("Are you sure to approve this post?")){   
        queue.setState({
            posts:posts
        })
    }
}