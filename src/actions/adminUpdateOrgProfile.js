export const adminUpdateOrgProfile = (queue, info, userId) => {
    const oldOrgs = queue.state.organizations;
    const userToUpdate = oldOrgs.find(u => u.id==userId)
    let newInfo = userToUpdate;
    const index = oldOrgs.findIndex(u => u.id==userId)
    //console.log("index", index)
    //console.log("userto update", userToUpdate)
    if(info.orgName !==''){
      newInfo.orgName=info.orgName
    }

    if(info.website !==''){
        newInfo.website=info.website
      }
    if(info.introduction!==''){
      newInfo.introduction=info.introduction
    }
    
    //console.log('new info', newInfo)
    oldOrgs[index]=newInfo;
    //console.log("new vols", oldVols)
    
    queue.setState(
      {orgnizations: oldOrgs}
    )
  };