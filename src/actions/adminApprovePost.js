export const adminApprovePost = (queue, op) => {
    console.log("op.status", op.status)
    console.log("queue", queue)
    op.status = 'Approved'
    let posts = queue.state.posts
    console.log('id',op.id)
    const index = posts.findIndex(
        o => o.id == op.id
    )
    console.log("index of post", index)
    console.log("update state", queue.state.posts)
    
    
    if(window.confirm("Are you sure to approve this post?")){   
        queue.setState({
            posts:posts
        })
    }
}