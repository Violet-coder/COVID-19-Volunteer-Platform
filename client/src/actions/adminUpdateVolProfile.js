export const adminUpdateVolProfile = (user, info, userId) => {
  const url = `/admin/volunteer/update/${userId}`

  
  let newInfo = user;//Get old profile from server
  
  if(info.links !==''){
    newInfo.links=info.links
  }
  if(info.location !==''){
    newInfo.location=info.location
  }
  if(info.desc!==''){
    newInfo.desc=info.desc
  }
  // console.log("skills",info.skills)
  // console.log("availability", info.availability)
  newInfo.skills=info.skills
  newInfo.availability=info.availability

  console.log("url", url)
  console.log("newInfo",newInfo)

  



  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(newInfo),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })

  
   // Send the request with fetch()
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

  export const getVolProfile = (volComp,id) => {
    const url = `/admin/volunteer/${id}`
    fetch(url)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            // alert("Could not get students");
            console.log("Cannot get the volunteer info.")
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        console.log("update vol state")
        volComp.setState({ volunteer: json, dataIsReturned: true });
    })
    .catch(error => {
        console.log(error);
    });
  }