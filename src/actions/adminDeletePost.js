export const adminDeletePost = (queue, post) =>{
    //console.log("delete post")
    const filteredPost = queue.state.posts.filter(
        p => {
            return p !== post;
        }
    );
    //console.log("filetered post", filteredPost)
    if(window.confirm('Are you sure to delete this post?'))
    {
        queue.setState({
            posts: filteredPost
    })}
}