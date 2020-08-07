export const acceptApplicant = (id) => {
    const url = `/organization/accept/${id}`
    const request = new Request(url, {
     method:"post",
     body: "",
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

 export const rejectApplicant = (id) => {
    const url = `/organization/reject/${id}`
   const request = new Request(url, {
     method:"post",
     body: "",
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