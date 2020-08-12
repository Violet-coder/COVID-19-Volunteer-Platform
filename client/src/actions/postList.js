const log = console.log;

export const addPost = (id, info) => {
  const url = `/organization/post/${id}`
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
  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(post),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })
  fetch(request).catch(error => {
           console.log(error);
       });

};

export const deletePost = (post_id) => {
  const url = `/organization/delete_post/${post_id}`
  const res = window.confirm('Delete this post?')
  if (res) {
    const request = new Request(url, {
      method:"delete",
      body: JSON.stringify(post),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
    }
    })
    fetch(request).catch(error => {
        console.log(error);
    });
}
else {
  return false
}
};

export const editPost = (post_id, info) => {
  const url = `/organization/edit_post/${post_id}`
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
};
  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(post),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })
  fetch(request).catch(error => {
           console.log(error);
       });
};