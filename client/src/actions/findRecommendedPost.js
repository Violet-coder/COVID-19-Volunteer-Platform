export const findRecommendedPost = (id, vol) => {
    const url = `/volunteer/profile/${id}`
    let userSkills = {}
    const equipedSkills = []
    const RecommendedPost = []
    

    fetch(url)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            alert("Could not find volunteer profile");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        userSkills = json.skills
        for(var propt in userSkills){
            if (userSkills[propt]=== true){
                equipedSkills.push(propt)
            }
        }
    })
    .catch(error => {
        console.log(error);
    });

    console.log("equipedSkills", equipedSkills)
    
    const url1 = "/posts"
    fetch(url1)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            alert("Could not get posts");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        const posts = new Array(json)
        console.log("posts", posts[0])
        for (var post of posts[0]){
            for (var skill of equipedSkills){
                if (post.title === skill){
                    RecommendedPost.push(post)
                    console.log("matched post", post)
                }
            }
            
        }
        console.log("RecommendedPost", RecommendedPost)
        
        
        vol.setState({ posts: RecommendedPost, isLoading: true });
        
    })
    .catch(error => {
        console.log(error);
    });
  }