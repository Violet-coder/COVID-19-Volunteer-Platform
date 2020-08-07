const log = console.log;

export const addPost = (queue, info) => {
  const url = `/organization/post/${id}`
  const postList = queue.state.posts;
  let requirements = ""
  for (var i in info.requirement) {
    if (requirements!=="") {
      requirements += ", "
    }
    requirements += info.requirement[i].title
  }
  const d = new Date()
  /*
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
  */
  const post = {
    name: info.jobName,
    org_name: info.orgName,
    description: info.jobDescription,
    requirement: requirements,
    title: info.jobTitle,
    status: "Under review",
    date: d.toLocaleDateString(),
    location: info.location,
    org_id: id,
    applicants: []
  };
  
  if (post.name!=="" && post.description!=="" && post.title!=="") {
    postList.push(post);
    queue.setState({
      posts: postList,
    });  
  }
  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(post),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })
  fetch(request)
       .then(function (res) {
           if (res.status === 200) {
           } else {
           }
       })
       .catch(error => {
           console.log(error);
       });

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
  const url = `/organization/edit_post/${post_id}`
  const postList = queue.state.posts;
  let requirements = ""
  for (var i in info.requirement) {
    if (requirements!=="") {
      requirements += ", "
    }
    requirements += info.requirement[i].title
  }
  const d = new Date()
  /*
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
  */
 const post = {
  name: info.jobName,
  description: info.jobDescription,
  requirement: requirements,
  title: info.jobTitle,
  status: "Under review",
  date: d.toLocaleDateString(),
  location: info.location,
};
  for (var i in postList) {
    if (postList[i].id===id) {
      postList[i] = post
    }
  }
  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(post),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })
  fetch(request)
       .then(function (res) {
           if (res.status === 200) {
           } else {
           }
       })
       .catch(error => {
           console.log(error);
       });

    queue.setState({
      posts: postList,
    });  
};