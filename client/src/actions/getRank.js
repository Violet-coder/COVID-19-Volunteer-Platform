export const getRank = (post_id, vol_id) => {
const post_url = `/post/${post_id}`
const score = 0
fetch(post_url)
.then(res => {
    if (res.status === 200) {
        // return a promise that resolves with the JSON body
        return res.json();
    } else {
        // alert("Could not get students");
    }
})
.then(json => {
    const title = json.title
    const location = json.location
    const vol_url = `/volunteer/profile/${vol_id}`
    fetch(vol_url)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            // alert("Could not get students");
        }
    })
    .then(vol => {
        // the resolved promise with the JSON body
        vol.skills.eachPath((pathname, schematype) => {
            if (vol.skills.pathname === true) {
                if (pathname == title) {
                    score += 10
                }
                else {
                    score += 1
                }
            }
          });
        if (vol.location == location) {
            score += 10
        }
    })
    .catch(error => {
        console.log(error);
    });
})
.catch(error => {
    console.log(error);
});
if (score<=7) {
    return 'D'
}
if (score>=24) {
    return 'A'
}
if (score>=16) {
    return 'B'
}
return 'C'
}