export const adminUpdateOrgProfile = (info, userId) => {

  const url = `/admin/organization/update/${userId}`
  const newInfo = {
    name: info.name,
    email: info.email,
    website: info.website,
    info: info.intro
  };
  const request = new Request(url, {
    method:"post",
    body: JSON.stringify(newInfo),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
  }
  })
    //Send the request with fetch()
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


  export const getOrgProfile = (orgComp, userId) => {
    const url =`/admin/organization/${userId}`

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
        orgComp.setState({ organization: json,
                           dataIsReturned: true });
    })
    .catch(error => {
        console.log(error);
    });
  }