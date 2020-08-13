export const adminUpdateVolProfile = (queue, info, userId) => {
    // here get user info and updated profile info from its parent component
    // in phase 2 we get the function parameters from front-end and pass to back-end
    // code below requires server call: update the volunteer profile information in database
    const oldVols = queue.state.volusers;
    const userToUpdate = oldVols.find(u => u.id==userId)
    let newInfo = userToUpdate;

    const index = oldVols.findIndex(u => u.id==userId)
    //console.log("index", index)
    //console.log("userto update", userToUpdate)
    if(info.links !==''){
      newInfo.links=info.links
    }
    if(info.location !==''){
      newInfo.location=info.location
    }
    if(info.desc!==''){
      newInfo.desc=info.desc
    }
    
    //console.log('new info', newInfo)
    oldVols[index]=newInfo;
    //console.log("new vols", oldVols)
    queue.setState(
      {volusers: oldVols}
    )
    console.log(queue.state)
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