//  const log = console.log;

//  export const updateOrgProfile = (context, info) => {
//     const url = `/organization/update_profile/${id}`
//     const oldInfo = context.state.info;
//    if (info.website===""){
//      info.website=oldInfo.website
//    }
//    if (info.intro===""){
//      info.intro=oldInfo.intro
//    }
//    const newInfo = {
//      name: oldInfo.name,
//      email: oldInfo.email,
//      website: info.website,
//      intro: info.intro
//    };
//    const request = new Request(url, {
//      method:"post",
//      body: JSON.stringify(newInfo),
//      headers: {
//        Accept: "application/json, text/plain, */*",
//        "Content-Type": "application/json"
//    }
//    })
//      //Send the request with fetch()
//    fetch(request)
//        .then(function (res) {
//            if (res.status === 200) {
//            } else {
//            }
//        })
//        .catch(error => {
//            console.log(error);
//        });

//    context.setState({
//      info: newInfo
//      });  
//  };

//  export const getOrgProfile = (id, org) => {
//   const url = `/organization/get_profile/${id}`
//   fetch(url)
//   .then(res => {
//       if (res.status === 200) {
//           // return a promise that resolves with the JSON body
//           return res.json();
//       } else {
//           // alert("Could not get students");
//       }
//   })
//   .then(json => {
//       // the resolved promise with the JSON body
//       org.setState({ user: json });
//   })
//   .catch(error => {
//       console.log(error);
//   });
// }

// export const getOrgPosts = (id, org) => {
//   const url = `/organization/get_posts/${id}`
//   fetch(url)
//   .then(res => {
//       if (res.status === 200) {
//           // return a promise that resolves with the JSON body
//           return res.json();
//       } else {
//           // alert("Could not get students");
//       }
//   })
//   .then(json => {
//       // the resolved promise with the JSON body
//       org.setState({ posts: json, isLoading: true });
//   })
//   .catch(error => {
//       console.log(error);
//   });
// }