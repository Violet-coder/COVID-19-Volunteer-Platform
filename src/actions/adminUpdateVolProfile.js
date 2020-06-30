export const adminUpdateVolProfile = (queue, info, userId) => {
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