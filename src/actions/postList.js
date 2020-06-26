const log = console.log;

export const addPost = (queue, info) => {
  const postList = queue.state.posts;
  let requirements = ""
  for (var i in info.requirement) {
    if (requirements!=="") {
      requirements += ", "
    }
    requirements += info.requirement[i].title
  }
  const d = new Date()
  const post = {
    name: info.jobName,
    description: info.jobDescription,
    requirement: requirements,
    title: info.jobTitle,
    status: "Under review",
    date: d.toLocaleDateString(),
    location: info.location,
    id: postList.length+1
  };
  if (post.name!=="" && post.description!=="" && post.title!=="") {
    postList.push(post);
    queue.setState({
      posts: postList,
    });  
  }
};

export const deletePost = (queue, post) => {
  const res = window.confirm('Delete this post?')
  if (res) {
  const filteredPosts = queue.state.posts.filter(s => {
    
    return s !== post;
  });
  queue.setState({
    posts: filteredPosts
  });
  return true
}
else {
  return false
}
};

export const editPost = (id, queue, info) => {
  const postList = queue.state.posts;
  let requirements = ""
  for (var i in info.requirement) {
    if (requirements!=="") {
      requirements += ", "
    }
    requirements += info.requirement[i].title
  }
  const d = new Date()
  const post = {
    name: info.jobName,
    description: info.jobDescription,
    requirement: requirements,
    title: info.jobTitle,
    status: "Under review",
    date: d.toLocaleDateString(),
    location: info.location,
    id: id
  };
  for (var i in postList) {
    if (postList[i].id===id) {
      postList[i] = post
    }
  }

    queue.setState({
      posts: postList,
    });  
};