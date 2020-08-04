const log = console.log;

export const updateOrgProfile = (context, info) => {
  const oldInfo = context.state.info;
  if (info.website===""){
    info.website=oldInfo.website
  }
  if (info.intro===""){
    info.intro=oldInfo.intro
  }
  const newInfo = {
    name: oldInfo.name,
    email: oldInfo.email,
    website: info.website,
    intro: info.intro
  };
    context.setState({
    info: newInfo
    });  
};