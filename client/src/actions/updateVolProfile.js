export const getVolProfile = (id, vol) => {
  const url = `/volunteer/profile/${id}`
  fetch(url)
  .then(res => {
      if (res.status === 200) {
          // return a promise that resolves with the JSON body
          return res.json();
      } else {
          alert("Could not get students");
      }
  })
  .then(json => {
      // the resolved promise with the JSON body
      console.log("json", json)
      vol.setState({ user: json, isLoading: true });
      console.log(vol.state)
  })
  .catch(error => {
      console.log(error);
  });
}

export const updateVolProfile = (queueComponent, info) => {
    //  console.log(queueComponent)
    
     let newInfo = queueComponent.state.profile;//Get old profile from server
     console.log("newInfo", newInfo)
     console.log("toupdate", info)
    // const userToUpdate = oldVols.find(u => u.id==userId)
    // let newInfo = userToUpdate;

    // const index = oldVols.findIndex(u => u.id==userId)
    // console.log("index", index)
    // console.log("userto update", userToUpdate)
    if(info.links !==''){
      newInfo.links=info.links
    }
    if(info.location !==''){
      newInfo.location=info.location
    }
    if(info.desc!==''){
      newInfo.desc=info.desc
    }
    newInfo.skills=info.skills
    newInfo.availability=info.availability
    /* for (let i in info.skills) {
        if (i === true){
        newInfo.skills=info.skills
        }
    }
    for (let j in info.availability) {
        if (j === true){
        newInfo.availability=info.availability
        }
    }   */

    
    queueComponent.setState(
      {profile: newInfo}
    )
    console.log("now",queueComponent)
  };