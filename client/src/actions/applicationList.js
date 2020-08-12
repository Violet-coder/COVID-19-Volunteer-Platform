import {getRank} from "./getRank"

export const addApplication = (userid, post) => {
    const url = `/volunteer/application/${userid}`
    const rank = getRank(post._id, userid)
    
    if (!rank){
        console.log("can not calculate user rank!")
    } else{
        const newApplication = {
        post_id: post._id,
        post_name: post.name,
        applicant_rank: rank
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