export const getVolProfile = (id, vol) => {
  const url = `/volunteer/profile/${id}`
  fetch(url)
  .then(res => {
      if (res.status === 200) {
          // return a promise that resolves with the JSON body
          return res.json();
      } else {
          // alert("Could not get students");
      }
  })
  .then(json => {
      // the resolved promise with the JSON body
      vol.setState({ user: json, isLoading: true });
  })
  .catch(error => {
      console.log(error);
  });
}

export const updateVolProfile = (user, info, userid) => {
  // the URL for the request 
  
  const url = `/volunteer/update/${userid}`

  
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
              // dashboardComp.setState({
              //     message: {
              //         body: "Success: Added a student.",
              //         type: "success"
              //     }
              // });
          } else {
              // dashboardComp.setState({
              //     message: {
              //         body: "Error: Could not add student.",
              //         type: "error"
              //     }
              // });
          }
      })
      .catch(error => {
          console.log(error);
      });


  
  
};