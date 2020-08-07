export const acceptApplicant = (id, info) => {
    const url = `/organization/accept/${id}`
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

   context.setState({
     info: newInfo
     });  
 };

 export const rejectApplicant = (id, info) => {
    const url = `/organization/reject/${id}`
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

   context.setState({
     info: newInfo
     });  
 };