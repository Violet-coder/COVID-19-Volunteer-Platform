
export const addApplication = (userid, post) => {
    const url = `/volunteer/application/${userid}`
    console.log("url", url)
    console.log("post", post)
    
    const newApplication = {
        post_id: post._id,
        name: post.name,
        status: "pending",
        };
   
    
    const request = new Request(url, {
        method:"post",
        body: JSON.stringify(newApplication),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
      })

    fetch(request)
    .then(function (res) {
        if (res.status === 200) {
        // return res.json();
        } else {
        alert("Could not add application");
        }
    })
    .catch(error => {
        console.log(error);
    });
    }


    export const getApplicationFromVol = (url, PostDetailPage) => {
    fetch(url)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            alert("Could not get application");
        }
    })
    .then(json => {
       if (json.length >0){
        PostDetailPage.setState({ isApplied: true, isLoading1: true });
       }
        
    })
    .catch(error => {
        console.log(error);
    });
    }