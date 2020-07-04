export const adminDeletePost = (queue, post) =>{
    // now get the data from queue and post, which are passed from its parent component
    // in phase 2 get data from client side and pass to back-end
    // code below requires server call: delete the specific post in database
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