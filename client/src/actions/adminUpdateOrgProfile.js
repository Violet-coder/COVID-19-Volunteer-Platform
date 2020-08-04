export const adminUpdateOrgProfile = (queue, info, userId) => {

    // here get user info and updated profile info from its parent component
    // in phase 2 we get the function parameters from front-end and pass to back-end
    // code below requires server call: update the organization profile information in database
    const oldOrgs = queue.state.organizations;
    const userToUpdate = oldOrgs.find(u => u.id==userId)
    let newInfo = userToUpdate;
    const index = oldOrgs.findIndex(u => u.id==userId)

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