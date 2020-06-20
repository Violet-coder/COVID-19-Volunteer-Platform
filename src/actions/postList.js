
const log = console.log;

export const addPost = (queue, info) => {
  log("adding post");
  const postList = queue.state.posts;

  const post = {
    name: info.jobName,
    description: info.jobDescription,
    requirement: info.requirement,
    status: "Under review"
  };
  if (post.name!=="" && post.description!=="" && post.requirement!=="") {
    postList.push(post);
  }
  queue.setState({
    posts: postList,
  });
};

export const deletePost = (queue, post) => {

  const filteredPosts = queue.state.posts.filter(s => {
    return s !== post;
  });

  queue.setState({
    posts: filteredPosts
  });
};